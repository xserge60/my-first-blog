import os
from imp import reload
import tornado.ioloop
import tornado.escape
import tornado.web
import tornado.websocket
import tornado.httpserver
from engine import BubotConfig


def web_server_start(settings):
    application = generate_manifest_ui()  # подключаем обработчики ui
    if application == False:
        return
    application.append((r"/", MainHandler))
    application.append((r"/(.*[.](?=ico$|js$|css$).*$)", tornado.web.StaticFileHandler, {"path": "."}))
    application.append((r"/ui/(.+)", UserInterface))
    application.append((r"/login", LoginHandler))
    settings.update({
        "static_path": "./static",
        "template_path": ".",
        "cookie_secret": settings['bubot'].bubot['cookie_secret'],
        "login_url": "/login",
        # "xsrf_cookies": True,
    })

    application = tornado.web.Application(application, **settings)

    import socket
    print('Bubot web-server started {0}:{1}'.format(socket.gethostbyname_ex(socket.gethostname())[2], settings['port']))
    try:
        http_server = tornado.httpserver.HTTPServer(application)
        http_server.listen(settings['port'])
        tornado.ioloop.IOLoop.instance().start()
    except BaseException as e:
        print('Bubot web-server error: {0}'.format(str(e)))


def generate_manifest_ui():
    ui = BubotConfig.get_available_ui()
    # генерируем манифест
    str_import = "from engine.BubotWebSocket import BubotWebSocket\n\n"
    str_def = 'def get_ui_handler():\n    application = []\n'
    for elem in ui:
        if os.path.isfile('./ui/{0}/{0}.py'.format(elem)):
            str_import += 'from ui.{0}.{0} import {0} as ui_{0}\n'.format(elem)
            str_def += "    application.append((r\"/ws/ui/{0}\", ui_{0}))\n".format(elem)
        else:
            str_def += "    application.append((r\"/ws/ui/{0}\", BubotWebSocket))\n".format(elem)

    str_def += '    return application\n'
    str_import += str_def
    str_import += '\nif __name__ == \'__main__\':\n    test = get_ui_handler()'
    mod_import = open('./temp/temp_ui.py', 'w', encoding='utf-8')
    mod_import.write(str_import)
    mod_import.close()
    try:
        import temp.temp_ui
        reload(temp.temp_ui)
        return temp.temp_ui.get_ui_handler()
    except Exception as e:
        print('Error import temp.temp_ui: ', str(e))
        return False


class BaseHandler(tornado.web.RequestHandler):
    def get_current_user(self):
        return self.get_secure_cookie("user")


class LoginHandler(BaseHandler):
    def get(self):
        self.render("./static/login.html", title="login", next=self.request.arguments['next'][0].decode("utf-8"))

    def post(self):
        name = self.get_argument("name")
        password = self.get_argument("password")
        next_url = self.get_argument("next") if self.get_argument("next") else '/'
        bubot = self.settings['bubot']
        if "user" not in bubot.config or not bubot.config['user']:
            self.set_secure_cookie("user", name if name else 'bubot')
            self.redirect(next_url)
            return
        if name in bubot.config['user']:
            if "password" not in bubot.config['user'][name] or bubot.config['user'][name]['password'] == password:
                self.set_secure_cookie("user", name)
                self.redirect(next_url)
                return
        self.render("./static/login.html", title="login", next=next_url)

class MainHandler(BaseHandler):
    # @tornado.web.authenticated
    def get(self):
        ui = BubotConfig.get_available_ui()
        # name = tornado.escape.xhtml_escape(self.current_user)
        self.render("./static/main.html", title="login", ui=ui)


class UserInterface(BaseHandler):
    @tornado.web.authenticated
    def get(self, ui_name):
        self.render("./ui/{0}/{0}.html".format(ui_name))


class BubotHandler(BaseHandler):
    def initialize(self, bubot):
        self.bubot = bubot

    @tornado.web.authenticated
    def get(self, command):
        try:
            res = getattr(self.bubot, command)(*self.request.arguments)
            self.write(res)
        except Exception as e:
            self.write('Error: ' + str(e))

    @tornado.web.authenticated
    def post(self, command):
        try:
            res = getattr(self.bubot, command)(self.request.arguments)
            self.write(res)
        except Exception as e:
            self.write('Error: ' + str(e))

