import os

from engine.BubotWebSocket import BubotWebSocket


class scout(BubotWebSocket):
    def ui_get_playlist(self, param=None):
        _files = os.listdir("./playlist/")
        self.send_message_to_ui('on_get_play_list', _files)

    def on_close(self):
        self.send_event('change_motor_power', {'value': 0})
        super().on_close()