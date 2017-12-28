import time
import json
# import quick2wire.i2c as i2c
from buject.Buject import Buject


class Servo(Buject):  # сервомотор без обратной связи
    def on_ready(self):
        self.set_pwm_us(self.param['def_pwm_us'])
        super().on_ready()


    def main_loop(self):
        if self.param['sleep_timer'] and self.status["last_changes"] and self.status["pwm_us"] and\
                (self.time - self.status["last_changes"]) > self.param['sleep_timer']:
            self.status['action'] = '{0} (sleep on pwm {1})'.format(self.status['action'], self.status["pwm_us"])
            self.set_pwm_us(0)

    # def incoming_request_set_angle(self, message):
    # if self.status['mode'] == 'starting':
    #         if self.param['debug'] > 1:
    #             print('Buject "{0}" has not yet started, the request is not executed'.format(self.param['name']))
    #         return
    #     data = json.loads(message['data'])
    #     if 'angle' in data[4]:
    #         self.status['last_changes'] = self.time
    #         self.action_set_angle(data[4]['angle'])
    #
    # def incoming_request_continue_rotation(self, message):
    #     if self.status['mode'] == 'starting':
    #         if self.param['debug'] > 1:
    #             print('Buject "{0}" has not yet started, the request is not executed'.format(self.param['name']))
    #         return
    #     data = json.loads(message['data'])
    #     if 'rotate_speed' in data[4]:  # скорость поворота (град/сек), увеличивает или уменьшает угол
    #         self.status['last_changes'] = self.time
    #         rotate_speed = data[4]['rotate_speed']
    #         if self.param['max_speed']:
    #             rotate_speed = max(self.param['max_speed'] * -1, rotate_speed)
    #             rotate_speed = min(self.param['max_speed'], rotate_speed)
    #         self.status['mode_param'] =  rotate_speed
    #         self.status['mode'] = 'action_continue_rotation'
    #
    # def outgoing_event_set_angle(self):
    #     self.send_event('set_angle', json.dumps({'angle': self.status['angle']}))
    #
    # def outgoing_event_stop_rotation(self):
    #     self.status['mode'] = None
    #     self.send_event('stop_rotation', json.dumps({'angle': self.status['angle']}))
    #
    # def main_loop(self):
    #     if self.status['mode']:
    #         getattr(self, self.status['mode'])()

    def set_pwm_us(self, pwm_t_us):  # эту функцию нужно переопределить под конкретный интерфейс сервы
        self.status["last_changes"] = self.time
        self.status["pwm_us"] = pwm_t_us
        return True

    # def action_set_angle(self, angle):
    #     if 0 <= angle <= self.param['angle_max']:
    #         pwm_t_us = (angle * (self.param['pwm_t_max_us'] - self.param['pwm_t_min_us']) / self.param[
    #         'angle_max']) + self.param['pwm_t_min_us']
    #         self.set_pwm_us(pwm_t_us)
    #         self.status['angle'] = angle
    #         self.outgoing_event_set_angle()
    #         if self.param['debug'] > 1:
    #             print('Buject "{0}" set angle to: {1}'.format(self.param['name'], self.status['angle']))
    #         return angle
    #     else:
    #         if self.param['debug'] > 1:
    #             print('Buject "{0}" don\'t set angle to: {1}'.format(self.param['name'], angle))
    #
    # def action_continue_rotation(self):
    #     rotate_speed = self.status['mode_param']
    #     if not self.status['last_changes']:
    #         self.status['last_changes'] = self.time
    #     elif rotate_speed:
    #         # считаем новое положение за истекшее время
    #         time_since_last_update = self.time - self.status['last_changes']
    #         if self.param['update_speed'] and time_since_last_update < self.param['update_speed']:
    #             return
    #         new_angle = self.status['angle'] + time_since_last_update * rotate_speed
    #         self.status['last_changes'] = self.time
    #         if new_angle > self.param['angle_max']:
    #             new_angle = self.param['angle_max']
    #             self.outgoing_event_stop_rotation()
    #         if new_angle < 0:
    #             self.status['angle'] = 0
    #             self.outgoing_event_stop_rotation()
    #         if new_angle != self.status['angle']:
    #             self.action_set_angle(new_angle)

    def incoming_request_set_power(self, message):
        data = json.loads(message['data'])
        self.action_set_power(data['param']['value'])

    def action_set_power(self, power):
        if self.status['buject'] != 'ready':
            if self.param['debug'] > 1:
                self.log('Buject "{0}" has not yet started, the request is not executed'.format(self.param['name']))
            return

        if power > 0:
            power = min(power, 100)
            self.status['action'] = "power {0}%".format(power)
            pwm_us = (self.param['max_pwm_us'] - self.param['def_pwm_us']) * power / 100 + self.param['def_pwm_us']
        elif power == 0:
            self.status['action'] = ""
            pwm_us = self.param['def_pwm_us']
        else:
            power = max(power, -100)
            self.status['action'] = "power {0}%".format(power)
            pwm_us = (self.param['def_pwm_us'] - self.param['min_pwm_us']) * (100 + power) / 100 + self.param[
                'min_pwm_us']
        if self.status["pwm_us"] != pwm_us:  # выставляем новую мощность
            self.set_pwm_us(pwm_us)

        if self.param['debug'] > 1:
            self.log('Buject "{0}" {1}'.format(self.param['name'], self.status['action']))
        return

