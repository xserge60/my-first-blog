import time
import json
# import quick2wire.i2c as i2c
from buject.Buject import Buject


class Motor(Buject):  # сервомотор без обратной связи
    def incoming_request_set_power(self, message):
        data = json.loads(message['data'])
        self.action_set_power(data['param']['value'])

    def action_set_power(self, power):
        if self.status['buject'] != 'ready':
            if self.param['debug'] > 1:
                self.log('Buject "{0}" has not yet started, the request is not executed'.format(self.param['name']))
            return
        if self.status["power"] != power:  # выставляем новую мощность
            self.status["power"] = power
        if power > 0:
            direction = 1  # вперед
            self.status['action'] = "forward {0}%".format(self.status["power"])
        elif power == 0:
            direction = 0  # стоп
            self.status['action'] = "stopped"
        else:
            direction = -1  # назад
            self.status['action'] = "backward {0}%".format(self.status["power"])
        # if self.status['direction'] > 0:
        #     if direction < 0:  # хотим ехать в другую сторону
        #     if direction == 0:  # отпустили газ
        # elif self.status['direction'] == 0:
        #     if direction < 0:  # хотим ехать в другую сторону
        #     if direction > 0:  # хотим ехать в другую сторону
        # else:
        #     if direction > 0:  # хотим ехать в другую сторону
        #     if direction == 0:  # отпустили газ

        self.status['direction'] = direction
        if self.param['debug'] > 1:
            self.log('Buject "{0}" {1}'.format(self.param['name'], self.status['action']))
        return
