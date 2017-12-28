# auto generate file
from imp import reload
import buject.SoundMPlayer 

def get_bujects():
    bujects = {}
    reload(buject.SoundMPlayer)
    try:
        bujects["SoundMPlayer"] = buject.SoundMPlayer.SoundMPlayer({'param': {'path': {'value': 'lib/mplayer/mplayer'}, 'name': {'value': 'SoundMPlayer'}, 'buject': {'value': 'SoundMPlayer'}}, 'bubot': {'redis_host': {'description': 'имя сервиса', 'value': 'localhost', 'readonly': 1, 'type': 'str'}, 'max_fps': {'description': 'пауза в основном цикле, ограничение fps', 'value': 3, 'type': 'int'}, 'debug': {'description': 'Уровень отладочных сообщений', 'value': 0, 'type': 'int'}, 'redis_db': {'description': 'БД redis', 'value': 0, 'readonly': 1, 'type': 'int'}, 'name': {'description': 'имя бубота к которому относится текущий buject', 'value': 'sound', 'type': 'str'}, 'web_port': {'description': '', 'value': 80, 'readonly': 1, 'type': 'int'}, 'buject': {'value': 'Bubot', 'readonly': 1}, 'redis_port': {'description': '', 'value': 6379, 'readonly': 1, 'type': 'int'}, 'parent': {'description': 'родительский buject', 'value': 'Buject', 'readonly': 1, 'type': ''}}})
    except BaseException as e:
        raise RuntimeError('SoundMPlayer' + str(e))
    return bujects

if __name__ == '__main__':
    get_bujects()