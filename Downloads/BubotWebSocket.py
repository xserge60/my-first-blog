import json
import time

import tornado.ioloop
import tornado.escape
import tornado.web
import tornado.websocket

from buject.Bubot import Bubot
from buject.Buject import Buject
from engine import BubotConfig


class BubotWebSocket(tornado.websocket.WebSocketHandler, Buject):

    def open(self):
        ui_name = self.request.path[7:]
        bubot = self.settings['bubot']
        if not bubot:
            self.log('open websocket: bubot not defined')
            return False
        self.param = bubot.param
        self.bubot = bubot.bubot

        # check support ui
        # if 'ui' not in bubot.config or ui_name not in bubot.config['ui']:
        #     self.log(
        #         'open websocket: bubot \'{0}\' not supported this ui ({1})'.format(self.param['name'], ui_name))
        #     return False

        # check redis
        self.redis = self.get_redis()
        if not self.redis:
            self.log('open websocket: redis not found')
            return False

        # load ui config
        try:
            self.config = BubotConfig.get_config('./ui/{0}/'.format(ui_name), ui_name)
        except Exception as e:
            self.log('open ui_config ./ui/{0}/{0}.json: {1}'.format(ui_name, e))
            return False
        if not self.config:
            self.log('open websocket: ui_config not found(./ui/{0}/{0}.json)'.format(ui_name))
            return False
        self.subscribe()
        try:
            self.on_open()
        except Exception as e:
            self.error('ui/{0} on_open(): {1}'.format(ui_name, e))
            return False

        return True

    def on_open(self):
        return

    def get_bubot_config(self, bubot_name):
        config = self.redis.hgetall("{0}".format(self.bubot))
        return config

    def on_message(self, message):
        if not self.redis:
            return
        message = json.loads(message, encoding='utf-8')
        if "method" in message and "param" in message:
            if self.param['debug'] > 3:
                self.log("WebSocket on_message({0})".format(message['method']))
            if hasattr(self, "ui_{0}".format(message['method'])):
                try:
                    getattr(self, "ui_{0}".format(message['method']))(message['param'])
                except Exception as e:
                    self.error('socket method ui_{0}: {1}'.format(message['method'], e))
            else:
                self.error('socket method not found ({0})'.format(message['method']))

    def on_close(self):
        if self.pubsub:
            self.pubsub.unsubscribe()
            print("WebSocket closed")

    def ui_get_available_bubots(self, param=None):
        param = BubotConfig.get_available_bubot()
        # config = {}
        # _files = os.listdir("./config/")
        # _files = filter(lambda x: x.endswith('.json'), _files)
        # for _file in _files:
        #     config[_file[0:len(_file) - 5]] = _file
        # result = {'method': 'on_get_available_bubots', 'param': config}
        # result = json.dumps(result)
        # self.write_message(result)
        self.send_message_to_ui('on_get_available_bubots', param)

    def ui_get_subscribe_message(self, param=None):
        self.get_subscribe_message()
        self.send_message_to_ui('on_get_subscribe_message', True)

    def ui_send_event(self, param=None):
        try:
            self.send_event(param['event'], param['data'])
        except Exception as e:
            self.error('Error ui_send_event: {0}'.format(e), json.loads(param))

    def ui_send_request(self, param=None):
        try:
            self.send_request(param['name'], param['data'])
        except Exception as e:
            raise RuntimeError('Error ui_send_request({0},{1})'.format(e, json.loads(param)))

    @staticmethod
    def get_bubot(bubot_name):
        try:
            # читаем файл конфигурации - config/bubot.json по умолчанию
            config = open('config/{0}.json'.format(bubot_name), encoding='utf-8').read()
            config = json.loads(config)
        except Exception as e:
            raise RuntimeError('BubotWebSocket.get_bubot({0}) open config (config/{0}.json): {1}'.format(bubot_name, str(e)))
        try:
            config = BubotConfig.get_buject_config('Bubot', config)
        except Exception as e:
            raise RuntimeError('BubotWebSocket.get_bubot({0}) get_buject_config (config/{0}.json): {1}'.format(bubot_name, str(e)))
        try:
            bubot = Bubot(config)
        except Exception as e:
            raise RuntimeError('BubotWebSocket.get_bubot({0}) Bubot.init: {1}'.format(bubot_name, str(e)))
        return bubot

    # заглушки
    def start(self):
        return

    def run(self):
        return

    def read_config(self, user_config=None):
        return

    def log(self, message):
        print(message)
        self.send_message_to_ui('console', {'param': {"time": time.time(), "message": message}})

    def error(self, text, data=None):
        message = 'Error {0}:{1} - {2} ({3})'.format(self.bubot['name'],
                                                     self.param['name'] if 'name' in self.param else "", text, data)
        print(message)
        self.send_message_to_ui('console', {'param': {"time": time.time(), "message": message}})

    def send_message_to_ui(self, method, param):
        self.write_message(json.dumps({'method': method, 'param': param}, sort_keys=True))

    def incoming_request_console(self, message):
        data = json.loads(message['data'])
        self.send_message_to_ui('console', data)
