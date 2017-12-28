import json
import os
from buject.Buject import Buject
from gtts import gTTS


class Sound(Buject):  # сервомотор без обратной связи
    def __init__(self, user_config=None):
        super(Sound, self).__init__(user_config)
        self.player = None

    def incoming_event_get_playlist(self, message):
        return os.listdir("./playlist/")

    def action_play(self, file_name):
        return

    def action_stop(self):
        return

    def incoming_event_say_text(self, message):
        data = json.loads(message['data'])
        if self.param['debug'] > 0:
            self.log("Say: {0}".format(data['param']['value']))
        self.on_ready()
        tts = gTTS(text=data['param']['value'], lang=self.param['lang'])
        tts.save('./playlist/text_tts.mp3')
        self.status['action'] = "say text: {0}".format(data['param']['value'])
        self.action_play('./playlist/text_tts.mp3')

    def incoming_event_play(self, message):
        data = json.loads(message['data'])
        file_name = data['param']['value']
        status1 = "play {0}".format(file_name)
        status2 = "".format(file_name)
        if self.status['action'] == status1:  # если эта песня уже поет - выключаем
            self.status['action'] = status2
            self.action_stop()
            return
        elif self.status['action'] == status2:
            self.status['action'] = status1  # если ничего не поет
            self.action_play("./playlist/{0}".format(file_name))
        else:
            self.status['action'] = status1  # значит надо воспроизводим что то новое
            self.action_stop()
            self.action_play("./playlist/{0}".format(file_name))
