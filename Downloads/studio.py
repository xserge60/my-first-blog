import json

from engine.BubotWebSocket import BubotWebSocket
from engine import BubotConfig


class studio(BubotWebSocket):

    def ui_stop(self, bubot_name):
        self.send_event('system', {'command': 'terminate'})
        self.redis.delete("{0}:{1}".format(self.bubot["name"], self.param['name']),
                          "{0}:status".format(self.bubot["name"]))

    def ui_restart(self, bubot_name):
        if 'bubot' in self.settings:
            del(self.settings['bubot'])
        try:
            self.settings['bubot'] = BubotWebSocket.get_bubot(bubot_name)
        except Exception as e:
            self.log('ui_restart({0}): {1}'.format(bubot_name, e))
            return False
        if not self.settings['bubot'] or not self.open():
            return False
        self.settings['bubot'].start()
        self.ui_get_bubot_config()  # обновляем бубота в ui
        return True

    def ui_get_bubot_config(self, param=None):
        self.send_message_to_ui('on_get_bubot_config', self.settings['bubot'].config)

    def ui_get_bubot_status(self, param=None):
        param = self.redis.hgetall("{0}:status".format(self.bubot['name']))
        self.send_message_to_ui('on_get_bubot_status', param)

    def ui_get_available_bujects(self, param=None):
        param = BubotConfig.get_available_buject()
        self.send_message_to_ui('on_get_available_bujects', param)

    def ui_save_config(self, param=None):
        config = json.loads(param, encoding='utf-8')
        new_name = config['param']['name']['value']
        user_config = BubotConfig.create_user_config(config, BubotConfig.get_available_buject())
        bubot_json = open('config/{0}.json'.format(new_name), 'w')
        user_config = json.dumps(user_config)
        bubot_json.write(user_config)
        bubot_json.close()
        self.send_event('system', {'command': 'update', 'config': user_config})
        self.log('config/{0}.json save completed'.format(new_name))
        self.ui_get_available_bubots()
        return

    def ui_send_message(self, param=None):
        if param['type'] == 'incoming_request':  # пока нельзя послать на другой бубот
            _channel = '{0}:{1}:request:{2}'.format(self.bubot['name'], param['buject'], param['name'])
            _message = {"sender": {'bubot': self.bubot['name'], 'buject': 'ui_studio'},
                        "receiver": {'bubot': self.bubot['name'], 'buject': param['buject']},
                        "name": param['name'], "param": param['data']}
            self.send_message(param['name'], _channel, _message)
            return
        if param['type'] == 'outgoing_request':
            bubot = self.settings['bubot'].start_bujects[param['buject']]
            bubot.send_request(param['name'], param['data'])
            return
        if param['type'] == 'incoming_event':  # пока нельзя послать на другой бубот
            bubot = self.settings['bubot']
            method = bubot.config['depend_buject'][param['buject']][param['type']][param['name']]
            _buject = method['buject'] if 'buject' in method else self.bubot['name']
            _bubot = method['bubot'] if 'bubot' in method else self.bubot['name']
            _channel = '{0}:{1}:event:{2}'.format(_bubot, _buject, param['name'])
            _message = {"sender": {'bubot': self.bubot['name'], 'buject': 'ui_studio'},
                        "name": param['name'], "param": param['data']}
            self.send_message(param['name'], _channel, _message)
            return
