import json
from buject.Buject import Buject
import RPi.GPIO as GPIO

class MotorTest(Buject):  # сервомотор без обратной связи
    def on_ready(self):
        GPIO.setmode(self.param["GPIO_mode"])
        GPIO.setwarnings(False)

    def incoming_request_set_power(self, message):
        data = json.loads(message['data'])

        if data['param']['value'] > 0:
            GPIO.setup(self.param['GPIO_backward'], GPIO.OUT, 0)
            GPIO.setup(self.param['GPIO_forward'], GPIO.OUT, 1)
            self.status['action'] = "power 100%"
        elif data['param']['value'] == 0:
            GPIO.setup(self.param['GPIO_forward'], GPIO.OUT, 0)
            GPIO.setup(self.param['GPIO_backward'], GPIO.OUT, 0)
            self.status['action'] = "stopped"
        else:
            GPIO.setup(self.param['GPIO_forward'], GPIO.OUT, 0)
            GPIO.setup(self.param['GPIO_backward'], GPIO.OUT, 1)
            self.status['action'] = "power = -100%"

        if self.param['debug'] > 1:
            self.log('Buject "{0}" {1}'.format(self.param['name'], self.status['action']))
        return