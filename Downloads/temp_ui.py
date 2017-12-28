from engine.BubotWebSocket import BubotWebSocket

from ui.studio.studio import studio as ui_studio
from ui.scout.scout import scout as ui_scout
def get_ui_handler():
    application = []
    application.append((r"/ws/ui/scout_easy", BubotWebSocket))
    application.append((r"/ws/ui/studio", ui_studio))
    application.append((r"/ws/ui/scout", ui_scout))
    return application

if __name__ == '__main__':
    test = get_ui_handler()