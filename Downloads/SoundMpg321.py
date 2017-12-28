import subprocess
from buject.Sound import Sound


class SoundMpg321(Sound):  # сервомотор без обратной связи
    def action_stop(self):
        if self.player and self.player.poll() is None:
            self.player.kill()

    def action_play(self, file_name):
        self.player = subprocess.Popen(["mpg321", file_name], stdin=subprocess.PIPE,
                                       stdout=subprocess.PIPE, stderr=subprocess.PIPE)
