__author__ = 'Businka76'
from buject.Buject import Buject
import math
import json
# import time


class PCA9685(Buject):  # сервомотор без обратной связи
    def __init__(self, user_config=None):
        super(PCA9685, self).__init__(user_config)
        # PCA9685 constant
        self.MODE1 = 0x00
        self.MODE2 = 0x01
        self.SUBADR1 = 0x02
        self.SUBADR2 = 0x03
        self.SUBADR3 = 0x04
        self.PRESCALE = 0xFE
        self.LED0_ON_L = 0x06
        self.LED0_ON_H = 0x07
        self.LED0_OFF_L = 0x08
        self.LED0_OFF_H = 0x09
        self.ALL_LED_ON_L = 0xFA
        self.ALL_LED_ON_H = 0xFB
        self.ALL_LED_OFF_L = 0xFC
        self.ALL_LED_OFF_H = 0xFD
        # Bits
        self.RESTART = 0x80
        self.SLEEP = 0x10
        self.ALLCALL = 0x01
        self.INVRT = 0x10
        self.OUTDRV = 0x04
        self.OCH = 0x04

        self.pwm_T_us = round(1000000 / self.param['pwm_freq'])

    def on_ready(self):
        self.status['buject'] = 'wait starting pca9685'
        self.send_status()
        self.set_all_pwm(0, 0)
        message = [
            ('write', self.param['address'], self.MODE2, self.OUTDRV),
            ('write', self.param['address'], self.MODE1, self.ALLCALL),
            ('wait', 0.005)
        ]
        self.send_request('i2c_transaction', message, 'init pca9685')
        self.set_prescale(self.param['pwm_freq'])

    def set_pwm_us(self, channel, pwm_t_us):
        pwm_t = round(pwm_t_us * 4096 / self.pwm_T_us)
        self.set_pwm(channel, 0, pwm_t)
        return True

    def set_prescale(self, freq):
        # "Sets the PWM frequency in PCA9685"
        prescale = 25000000.0  # 25MHz
        prescale /= 4096.0  # 12-bit
        prescale /= float(freq)
        prescale -= 1.0
        self.param['pca9685_prescale'] = int(math.floor(prescale + 0.5))
        if self.param['debug'] > 0:
            self.log("PCA9685 {0}: Setting PWM frequency to {1} Hz".format(self.param['address'], self.param['pwm_freq']))
            self.log("PCA9685 {0}: Estimated pre-scale: {1}, Final pre-scale: {2}".format(self.param['address'], prescale,
                                                                                       self.param['pca9685_prescale']))
        self.status['mode'] = 'action_wait_check_prescale'
        message = [
            ('read', self.param['address'], self.PRESCALE),
            ('read', self.param['address'], self.MODE1)
        ]
        self.send_request('i2c_transaction', message, 'check prescale')
        self.status['last_changes'] = self.time

    def set_pwm(self, channel, on, off):
        message = [
            ('write', self.param['address'], self.LED0_ON_L + 4 * channel, on & 0xFF),
            ('write', self.param['address'], self.LED0_ON_H + 4 * channel, on >> 8),
            ('write', self.param['address'], self.LED0_OFF_L + 4 * channel, off & 0xFF),
            ('write', self.param['address'], self.LED0_OFF_H + 4 * channel, off >> 8)
        ]
        self.send_request('i2c_transaction', message,
                          'set_pwm({1},{2},{3})'.format(self.param['name'], channel, on, off))

    def set_all_pwm(self, on, off):
        message = [
            ('write', self.param['address'], self.ALL_LED_ON_L, on & 0xFF),
            ('write', self.param['address'], self.ALL_LED_ON_H, on >> 8),
            ('write', self.param['address'], self.ALL_LED_OFF_L, off & 0xFF),
            ('write', self.param['address'], self.ALL_LED_OFF_H, off >> 8)
        ]
        self.send_request('i2c_transaction', message, 'set all pwm on {0} off {1}'.format(on, off))

    # def action_wait_check_prescale(self):
    #     # if self.time - self.status['last_changes'] > 3:  # если нет ответа более 3 секунд посылаем запрос повторно
    #     # self.pca9685_set_prescale()
    #     return True

    def incoming_request_set_pwm_us(self, message):
        data = json.loads(message['data'])
        self.set_pwm_us(data['param']['channel'], data['param']['value'])

    def incoming_request_set_pwm(self, message):
        data = json.loads(message['data'])
        self.set_pwm(data['param']['channel'], data['param']['on'], data['param']['off'])

    def incoming_request_set_prescale(self, message):
        data = json.loads(message['data'])
        self.set_prescale(data['param']['value'])

    def incoming_response_i2c_transaction(self, message):
        data = json.loads(message['data'])["param"]
        data_count = len(data)
        if data_count == 2:
            req_prescale = '{0}:{1}'.format(hex(self.param['address']), hex(self.PRESCALE))
            req_mode1 = '{0}:{1}'.format(hex(self.param['address']), hex(self.MODE1))
            if req_prescale in data and req_mode1 in data:  # request PRESCALE
                if data[req_prescale] != self.param['pca9685_prescale']:  # set PRESCALE
                    if self.param['debug'] > 1:
                        print('Buject "{0}" current prescale {1}'.format(self.param['name'], data[req_prescale]))

                    old_mode = data[req_mode1]
                    new_mode = (old_mode & 0x7F) | 0x10  # sleep
                    message = [
                        ('write', self.param['address'], self.MODE1, new_mode),  # go to sleep
                        ('write', self.param['address'], self.PRESCALE, self.param['pca9685_prescale']),
                        ('write', self.param['address'], self.MODE1, old_mode),
                        ('wait', 0.005),
                        ('write', self.param['address'], self.MODE1, old_mode | 0x80)
                    ]
                    self.send_request('i2c_transaction', message, 'set new prescale')
                else:
                    new_mode = data[req_mode1] & self.SLEEP  # wake up (reset sleep)
                    message = [
                        ('write', self.param['address'], self.MODE1, new_mode),
                        ('wait', 0.005)]
                    self.send_request('i2c_transaction', message, 'wake up')

                self.status['buject'] = "ready"

if __name__ == '__main__':
    buject = PCA9685()
    buject.start()
    buject.join()
    test = True