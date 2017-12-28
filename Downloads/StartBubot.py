#!/usr/bin/python3
# import time
import sys

from engine.BubotWebSocket import BubotWebSocket
from engine import BubotWebServer
from buject.Bubot import Bubot


if __name__ == '__main__':
    bubot = None
    if len(sys.argv) == 2:  # запускаем робота указанного в коммандной строке
        try:
            bubot = BubotWebSocket.get_bubot(sys.argv[1])
            bubot.start()
        except Exception as e:
            print(e)
            bubot = None
    if not bubot:
        try:
            bubot = Bubot({})
        except Exception as e:
            print('Error: {0}'.format(e))
    settings = {'port': bubot.bubot['web_port'], 'bubot': bubot}
    BubotWebServer.web_server_start(settings)