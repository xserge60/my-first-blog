from buject.Sound import Sound
import mplayer
import subprocess

class SoundMPlayer(Sound):  # сервомотор без обратной связи

    def on_ready(self):
        if self.player is not None:
            self.player.quit()
        try:
            mplayer.Player.exec_path = self.param['path']
            mplayer.Player.introspect()
            self.player = mplayer.Player()
            self.player.args = ['-really-quiet']
        except Exception as e:
            self.status['action'] = 'Sound.on_ready(): {0}'.format(e)
            self.status['buject'] = 'Error'
            self.error(self.status['action'])

            return False
        super().on_ready()
        return True

    def action_stop(self):
        self.on_ready()

    def action_play(self, file_name):
        self.player.loadfile(file_name)
        self.player.pause()
        return