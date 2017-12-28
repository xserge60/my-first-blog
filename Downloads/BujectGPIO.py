import RPi.GPIO as GPIO
import json
from buject.Buject import Buject


class BujectGPIO(Buject):
    def on_terminate(self):
        GPIO.cleanup()

    def on_ready(self):
        GPIO.setmode(self.param["mode"])
        GPIO.setwarnings(False)
        super().on_ready()

    def incoming_request_set_gpio(self, message):
        data = json.loads(message['data'])
        try:
            GPIO.setup(data['param']['channel'], GPIO.OUT, initial=data['param']['value'])
            # GPIO.output(data['param']['channel'], data['param']['value'])
        except Exception as e:
            self.error(
                'incoming_request_set_gpio({0},{1},{2}) error: {3}'.format(self.param['name'], data['param']['channel'],
                                                                           data['param']['value'], e))