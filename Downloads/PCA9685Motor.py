__author__ = 'Businka76'
# import time
# import json
from buject.Motor import Motor


class PCA9685Motor(Motor):  # сервомотор без обратной связи
    def action_set_power(self, power):

        if power > 0:
            direction = 1  # вперед
            self.status['action'] = "forward {0}%".format(self.status["power"])
            self.send_request("set_gpio", {"channel": self.param["gpio_backward"], "value": 0})
            self.send_request("set_gpio", {"channel": self.param["gpio_forward"], "value": 1})
        elif power == 0:
            direction = 0  # стоп
            self.status['action'] = "stopped"
            self.send_request("set_gpio", {"channel": self.param["gpio_forward"], "value": 0})
            self.send_request("set_gpio", {"channel": self.param["gpio_backward"], "value": 0})
        else:
            direction = -1  # назад
            self.status['action'] = "backward {0}%".format(self.status["power"])
            self.send_request("set_gpio", {"channel": self.param["gpio_forward"], "value": 0})
            self.send_request("set_gpio", {"channel": self.param["gpio_backward"], "value": 1})
        pwm_us = (self.param['max_pwm_us'] - self.param['min_pwm_us']) * power * direction / 100 + self.param['min_pwm_us']
        self.send_request('set_pwm_us', {"channel": self.param["PCA9685_channel"], "value": pwm_us})
        self.status["power"] = power

        self.status['direction'] = direction

if __name__ == '__main__':
    buject = PCA9685Motor()
    test = True