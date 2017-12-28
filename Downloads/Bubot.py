from buject.Buject import Buject
from imp import reload
import uuid


class Bubot(Buject):
    def __init__(self, user_config=None):
        self.read_config(user_config)
        if not self.config['param']['cookie_secret']['value']:
            self.config['param']['cookie_secret']['value'] = str(uuid.uuid1())
        self.config['bubot'] = self.config['param']
        super(Bubot, self).__init__(self.config)
        self.daemon = True
        try:
            self.start_bujects = self.generate_manifest()
        except BaseException as e:
            raise RuntimeError('Bubot().generate_manifest(): {0}'.format(str(e)))

        # подчищаем хвосты в редисе если прадыдущий запуск закончился некорректно

        for buject in self.config['depend_buject']:
            if buject in self.start_bujects:
                self.config['depend_buject'][buject] = self.start_bujects[buject].config

    def start(self):
        for buject in self.start_bujects:
            try:
                self.start_bujects[buject].start()
            except Exception as e:
                self.error('Error: manifest.start_bujects[{0}]'.format(buject), str(e))
        super().start()

    def stop(self):
        self.send_event('system', {'command': 'terminate'})

    def generate_manifest(self):
        # генерируем манифест
        modules = {}
        str_bujects = ''
        for buject in self.config['depend_buject']:
            try:
                module = self.config['depend_buject'][buject]['param']['buject']['value']
            except Exception as e:
                raise RuntimeError('depend_buject({0}): no information about the Buject'.format(buject))
            full_path_module = 'buject.{0}'.format(module)
            modules[full_path_module] = None
            self.config['depend_buject'][buject]['bubot'] = self.config['bubot']
            self.config['depend_buject'][buject]['param']['name'] = {'value': buject}
            str_bujects += '    try:\n        '
            str_bujects += 'bujects["{0}"] = {1}.{2}({3})\n'.format(buject,
                                                                    full_path_module,
                                                                    module,
                                                                    self.config['depend_buject'][buject])
            str_bujects += '    except BaseException as e:\n'
            str_bujects += '        raise RuntimeError(\'{0}\' + str(e))\n'.format(buject)
        str_manifest = '# auto generate file\nfrom imp import reload\n'
        for module in modules:
            str_manifest += 'import {0} \n'.format(module)
        str_manifest += '\ndef get_bujects():\n    bujects = {}\n'
        for module in modules:
            str_manifest += '    reload({0})\n'.format(module)
        str_manifest += str_bujects
        str_manifest += '    return bujects\n\nif __name__ == \'__main__\':\n    get_bujects()'
        mod_import = open('./temp/temp_config.py', 'w', encoding='utf-8')
        mod_import.write(str_manifest)
        mod_import.close()
        try:
            import temp.temp_config

            reload(temp.temp_config)
        except Exception as e:
            raise RuntimeError('bubot.reload(temp.config): (0)'.format(str(e)))

        # запускаем сервисы
        try:
            start_bujects = temp.temp_config.get_bujects()
        except Exception as e:
            raise RuntimeError('get_bujects(): ', str(e))
        return start_bujects


if __name__ == '__main__':
    bubot = Bubot()
    bubot.start()
    bubot.join()