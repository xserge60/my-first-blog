from buject.Servo import Servo


class PCA9685Servo(Servo):  # сервомотор без обратной связи
    def set_pwm_us(self, pwm_us):
        self.send_request('set_pwm_us', {"channel": self.param["PCA9685_channel"], "value": pwm_us})
        super().set_pwm_us(pwm_us)
        return True