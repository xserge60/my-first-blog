import multiprocessing
import json
import time

import redis

from engine import BubotConfig


class Buject(multiprocessing.Process):
    def __init__(self, user_config=None):
        multiprocessing.Process.__init__(self)
        # self.daemon = True
        self.time = time.time()  # время текущего кадра
        self.bubot = {}
        self.param = {}
        self.status = {}
        self.config = {}
        self.subscribe_list = {}  # автогенерируемый список подписки на каналы
        self.redis = None
        self.pubsub = None
        # self.name = ''
        self.read_config(user_config)

    def read_config(self, user_config):
        self.config = BubotConfig.get_buject_config(self.__class__.__name__, user_config)
        self.set_default_param()
        # self.name = "{0}:{1}".format(self.bubot['name'], self.param['name'])

    def subscribe(self):
        subscribe_list = []
        if 'incoming_event' in self.config:
            for method_name in self.config['incoming_event']:
                method_param = self.config['incoming_event'][method_name]
                method = 'incoming_event_{0}'.format(method_name)
                if hasattr(self, method):
                    if 'bubot' not in method_param:
                        method_param['bubot'] = self.bubot['name']
                    if 'buject' not in method_param:
                        method_param['buject'] = self.bubot['name']
                    if 'name' not in method_param:
                        method_param['name'] = method_name
                    ch = '{0}:{1}:event:{2}'.format(method_param['bubot'], method_param['buject'], method_param['name'])
                    self.subscribe_list[ch] = {'method': method, 'param': self.config['incoming_event'][method_name]}
                    subscribe_list.append(ch)
                else:
                    self.log("set_subscribe_list({0}) method is not defined: {1}".format(self.param['name'], method))
        if 'outgoing_request' in self.config:
            for method_name in self.config['outgoing_request']:
                method_param = self.config['outgoing_request'][method_name]
                if 'response' in method_param and method_param['response']:
                    method = 'incoming_response_{0}'.format(method_name)
                    if hasattr(self, method):
                        ch = '{0}:{1}:response:{2}'.format(self.bubot['name'], self.param['name'],
                                                           method_param['name'])
                        self.subscribe_list[ch] = {'method': method,
                                                   'param': self.config['outgoing_request'][method_name]}
                        subscribe_list.append(ch)
                    else:
                        self.log("{0} method is not defined: {1}".format(self.param['name'], method))
        if 'incoming_request' in self.config:
            for method_name in self.config['incoming_request']:
                # method_param = self.config['incoming_request'][method_name]
                method = 'incoming_request_{0}'.format(method_name)
                if hasattr(self, method):
                    ch = '{0}:{1}:request:{2}'.format(self.bubot['name'], self.param['name'],
                                                      method_name)
                    self.subscribe_list[ch] = {'method': method, 'param': self.config['incoming_request'][method_name]}
                    subscribe_list.append(ch)
                else:
                    self.log("{0} method is not defined: {1}".format(self.param['name'], method))

        self.pubsub = self.redis.pubsub(ignore_subscribe_messages=True)
        self.pubsub.unsubscribe()
        if subscribe_list:
            self.pubsub.subscribe(subscribe_list)

            if self.param['debug'] > 2:
                self.log('Buject "{0}" subscribe to channels: {1}'.format(self.param['name'], subscribe_list))

    def wait_depend_buject(self):
        if self.config['depend_buject']:  # проверяем загрузились ли необходимые модули
            self.send_status()
            not_ready = " "
            while not_ready:
                self.status['buject'] = 'wait depend buject: {0}'.format(not_ready)
                self.status['last_time'] = time.time()
                time.sleep(0.25)
                self.send_status()
                not_ready = ""
                for depend_buject in self.config['depend_buject']:
                    _buject = self.config['depend_buject'][depend_buject]
                    _bubot = self.config['bubot']
                    _status = None
                    if 'bubot' in _buject:
                        _bubot = _buject['bubot']
                    try:
                        _status = self.get_status(_bubot, depend_buject)
                    except Exception as e:
                        self.log('Buject "{0}" check status depend buject error: {1}'.format(self.param['name'], e))
                        print(_bubot)
                    if not _status:
                        not_ready += " " + depend_buject
                    elif not _status['buject'] == 'ready':
                        not_ready += " " + depend_buject
                        # читаем сообщения
                if self.pubsub:
                    self.get_subscribe_message()
                if 'terminate' in self.status:
                    return False
            self.status['buject'] = ''
            self.status['last_time'] = time.time()
        return True

    def set_default_param(self):
        for _group in ['bubot', 'param', 'status']:
            if _group in self.config:
                param = {}
                for _property in self.config[_group]:
                    if 'value' in self.config[_group][_property]:
                        param[_property] = self.config[_group][_property]['value']
                setattr(self, _group, param)

    def run(self):  # основной цикл сервиса
        self.redis = self.get_redis()
        if not self.redis:
            self.error('Redis not found')
            return
        try:
            self.on_run()
        except BaseException as e:
            self.status['buject'] = 'error'
            text_error = '{0}.on_run(): {1}'.format(self.bubot['name'], e)
            self.status['action'] = text_error
            self.error(text_error)
            self.send_status()
            return
        try:
            self.send_config()
        except Exception as e:
            self.redis = None
            print('Redis: {0}'.format(str(e)))
            return
        self.subscribe()
        if not self.wait_depend_buject():
            self.on_terminate()  # если пользователь вырубил раньше чем мы запустились
            return
        try:
            self.on_ready()
        except BaseException as e:
            self.status['buject'] = 'error'
            text_error = '{0}.on_ready(): {1}'.format(self.param['name'], e)
            self.status['action'] = text_error
            self.error(text_error)
            self.send_status()
            return
        if self.param['debug'] > 0:
            self.log('Buject "{0}" started'.format(self.param['name']))
        fps = 0

        while True:
            if 'terminate' in self.status:
                break

            self.time = time.time()
            # читаем сообщения
            if self.pubsub:
                self.get_subscribe_message()

            # выполняем основной код
            try:
                self.main_loop()
            except BaseException as e:
                self.status['buject'] = 'error'
                self.status['action'] = '{0}.main_loop(): {1}'.format(self.param['name'], e)

            # счетчик FPS
            fps_time_delta = self.time - self.status['last_time']
            fps += 1

            if fps_time_delta > 1:
                if fps == 1:  # выполняется реже одного раза в секунду, пишем сколько секунда надо для одного раза
                    self.status['fps'] = round(fps_time_delta) * -1
                else:
                    self.status['fps'] = fps
                self.status['last_time'] = self.time
                fps = 0
                self.send_status()

            # расчитываем время сна исходя из ограничений max_fps
            sleep_time = 0
            elapsed_time = time.time() - self.status['last_time']
            if self.param['max_fps'] > 0:  # несклько раз в секунду
                time_left = 1 - elapsed_time
                if fps < self.param['max_fps']:
                    sleep_time = round(time_left / (self.param['max_fps'] - fps), 3)
                else:
                    sleep_time = time_left
            elif self.param['max_fps'] < 0:
                sleep_time = self.param['max_fps'] * -1 - elapsed_time
            if sleep_time > 0:
                time.sleep(sleep_time)
        self.on_terminate()

    def on_terminate(self):
        self.log('Buject "{0}" terminated'.format(self.param['name']))
        self.redis.delete("{0}:{1}".format(self.bubot["name"], self.param['name']),
                          "{0}:status".format(self.bubot["name"]))
        self.pubsub.unsubscribe()
        return

    def on_ready(self):
        self.status['buject'] = 'ready'
        return True

    def on_run(self):
        return True

    def get_subscribe_message(self):
        message = True
        last_message = {}
        while message:
            try:
                message = self.pubsub.get_message()
            except Exception as e:
                self.error('{0}.get_subscribe_message():{1}'.format(self.param['name'], e))
                self.status['terminate'] = True
                return
            if message and message['type'] == 'message':
                if self.param['debug'] > 2:
                    self.log('Buject "{0}" read message: {1}'.format(self.param['name'], message))
                method = self.subscribe_list[message['channel']]['method']
                method_param = self.subscribe_list[message['channel']]['param']
                if not last_message:
                    last_message['method'] = method
                    last_message['message'] = message
                    last_message['ignore'] = False
                # выполняем предыдущее если серия одинаковых закончилась и она не выполнялась
                if method != last_message['method'] and last_message['ignore']:
                    self.process_message(last_message['method'], last_message['message'])
                else:  # поступило новое сообщение
                    # оно такое же как и предыдущее, можно игнорировать
                    if 'ignore_same' in method_param and method_param['ignore_same']:
                        last_message['ignore'] = True
                    else:
                        self.process_message(method, message)
                        last_message['ignore'] = False
                last_message['method'] = method
                last_message['message'] = message

        if last_message and last_message['ignore']:
            self.process_message(last_message['method'], last_message['message'])

    def process_message(self, method, message):
        try:
            getattr(self, method)(message)
        except Exception as e:
            self.log('{0}.process_message({1}) error: {2}'.format(self.param['name'], method, e))

    def main_loop(self):  # Ваш основной цикл, переопределить его в Вашем Busject
        return True

    def get_config(self, _bubot, _buject):
        try:
            if self.redis is None:
                self.redis = self.get_redis()
            _res = self.redis.hget(_bubot, _buject)
            return json.loads(_res) if _res else {}
        except Exception as e:
            self.error(e, "get_config({0},{1})".format(_bubot, _buject))
            return False

    def send_config(self):
        # _redis = self.get_redis()
        self.redis.hset(self.bubot['name'], self.param['name'], json.dumps(self.config))

    def send_status(self):
        self.redis.hset("{0}:status".format(self.bubot['name']), self.param['name'], json.dumps(self.status))

    def get_status(self, bubot, _buject):
        # _redis = self.get_redis()
        _param = "{0}:status".format(bubot['name']['value'])
        _res = self.redis.hget(_param, _buject)
        if _res:
            _res = json.loads(_res)
        return _res

    def get_redis(self):  # получаем редис
        if self.redis:
            return self.redis
        _redis = redis.StrictRedis(host=self.bubot['redis_host'],
                                   port=self.bubot['redis_port'],
                                   db=self.bubot['redis_db'], decode_responses=True)
        try:
            _redis.info()
        except Exception as e:
            print('Buject.get_redis() error: {0}'.format(str(e)))
            return None
        return _redis

    def send_event(self, name, data):
        if 'outgoing_event' not in self.config or name not in self.config['outgoing_event']:
            self.error('{0}.{1} undeclared event: {2}'.format(self.bubot['name'], self.param['name'], name))
            return
        # event = self.config['outgoing_event'][event_name]
        # _buject = self.param['name'] if not 'buject' in event and event['buject'] else event['buject']
        _channel = '{0}:{1}:event:{2}'.format(self.bubot['name'], self.param['name'], name)
        _message = {'sender': {'bubot': self.bubot['name'],
                               'buject': self.param['name']},
                    'event': name, 'param': data}
        self.send_message(name, _channel, _message)

    def send_request(self, name, data, debug_info=None):
        if 'outgoing_request' not in self.config or name not in self.config['outgoing_request']:
            self.error('Error {0}: undeclared send_request({1})'.format(self.param['name'], name))
            return
        param = self.config['outgoing_request'][name]
        if 'name' not in param:
            self.error('{0}.send_request({1}) not request name'.format(self.param['name'], name))
            return

        _buject = param['buject'] if 'buject' in param else self.bubot['name']
        _bubot = param['bubot'] if 'bubot' in param else self.bubot['name']
        _channel = '{0}:{1}:request:{2}'.format(self.bubot['name'], _buject, param['name'])
        _message = {"sender": {'bubot': _bubot, 'buject': self.param['name']},
                    "receiver": {'bubot': _bubot, 'buject': _buject},
                    "name": param['name'], "param": data}
        self.send_message(name, _channel, _message, debug_info)

    def send_response(self, message_data, response_data):
        _sender = message_data['sender']
        _channel = '{0}:{1}:response:{2}'.format(_sender['bubot'], message_data['sender']['buject'],
                                                 message_data['name'])
        _message = {"sender": message_data['receiver'],
                    "receiver": message_data['sender'],
                    "name": message_data['name'], "param": response_data}
        self.send_message(message_data['name'], _channel, _message)

    def send_message(self, name, channel, message, debug_info=None):
        # if self.redis:
        self.redis.publish(channel, json.dumps(message))
        if self.param['debug'] > 0 and name != 'console':
            if self.param['debug'] > 2:
                self.log('Buject "{0}" send message: {1} message:{2}'.format(self.param['name'], channel, message))
            elif self.param['debug'] > 1:
                self.log(
                    'Buject "{0}" send message: {1}'.format(self.param['name'], debug_info if debug_info else channel))

    def log(self, message):
        print(message)
        self.send_request("console", {"time": time.time(), "message": message})

    def error(self, text, data=None):
        message = 'Error {0}:{1} - {2} ({3})'.format(self.bubot['name'],
                                                     self.param['name'] if 'name' in self.param else "", text, data)
        print(message)
        self.send_request("console", {"time": time.time(), "message": message})

    def incoming_event_system(self, message):
        data = json.loads(message['data'])
        if 'buject' in data['param'] and data['param']['buject'] != self.param['name']:
            return
        command = data['param']['command']
        if command == 'terminate':
            self.status['terminate'] = True
            return
        if command == 'update':
            config = json.loads(data['param']['config'])
            if self.param['buject'] == 'Bubot':  # это головной процесс
                self.read_config(config)
            else:
                if self.param['name'] not in config['depend_buject']:  # если в новом конфиге текущего модуля нет, то торможим его
                    self.status['terminate'] = True
                    return
                self.read_config(config['depend_buject'][self.param['name']])
            # self.subscribe()
            # self.wait_depend_buject()
            return

if __name__ == '__main__':
    buject = Buject()
    test = True