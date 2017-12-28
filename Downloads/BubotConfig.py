import os
import json
import copy


def get_buject_config(name, user_config=None):
    path = "./buject/" if os.curdir == "." else ""
    return get_config(path, name, user_config)


def get_config(path, name, user_config=None):
    config = {}
    buject_config = read_buject_config(path, name)
    config = update_config(path, name, config, buject_config)
    if user_config:
        config = update_config(path, name, config, user_config)
    if name in config:
        return config[name]
    return {}


def get_available_buject():
    return get_available_config("./buject/" if os.curdir == "." else "")


def get_available_ui():
    return get_available_config("./ui/")


def get_available_bubot():
    return get_available_config("./config/")


def get_available_config(path):
    config = {}
    _files = os.listdir(path)
    for _file in _files:
        full_name = "{0}{1}".format(path, _file)
        if os.path.isdir(full_name):
            _config = get_available_config(full_name + "/")
            config.update(_config)
        if full_name.endswith('.json'):
            name = _file[0:len(_file) - 5]
            try:
                buject_config = read_buject_config(path, name)
                if name not in config:
                    config = update_config(path, name, config, buject_config)
            except Exception as e:
                raise RuntimeError(str(e))
    return config


def read_buject_config(path, name):
    try:
        _json = open("{0}{1}.json".format(path, name), encoding='utf-8').read()
        _json = json.loads(_json)
        return _json
    except Exception as e:
        raise RuntimeError('BubotConfig.read_buject_config({0},{1}): {2}'.format(path, name, str(e)))

def update_config(path, buject_name, config, data):
    if not data:
        return config
    if 'param' in data and 'parent' in data['param'] and data['param']['parent']['value']:
        _parent = data['param']['parent']['value']
        if not _parent in config:
            parent_config = read_buject_config(path, _parent)
            config = update_config(path, _parent, config, parent_config)
        config[buject_name] = copy.deepcopy(config[_parent])
        # if parent_config:
        # config = update_config(buject_name, config, parent_config)
    if buject_name in config:
        for _group in data:
            if _group in config[buject_name]:  # устанавливаем параметры только в регламентрированные разделы
                for _property in data[_group]:
                    if _property in config[buject_name][_group]:
                        if isinstance(data[_group][_property], dict):
                            config[buject_name][_group][_property].update(data[_group][_property])
                        else:
                            config[buject_name][_group][_property] = data[_group][_property]
                    else:
                        config[buject_name][_group][_property] = copy.deepcopy(data[_group][_property])
            else:
                config[buject_name][_group] = copy.deepcopy(data[_group])
    else:
        config[buject_name] = copy.deepcopy(data)
    return config


def create_user_config(new_bubot_config, available_buject):
    res = {}
    for _group in ['param', 'outgoing_event', 'incoming_event', 'incoming_request', 'outgoing_request']:
        if _group in new_bubot_config:
            _res = compare_dict(available_buject['Bubot'][_group], new_bubot_config[_group])
            if _res:
                res[_group] = copy.deepcopy(_res)

    if 'depend_buject' in new_bubot_config:
        res['depend_buject'] = {}
        for _buject in new_bubot_config['depend_buject']:
            _depend_buject = new_bubot_config['depend_buject'][_buject]
            if 'bubot' in _depend_buject:
                _depend_buject.pop('bubot')  # убираем параметры бубота из каждого объекта
            _base_buject = _depend_buject['param']['buject']['value']
            res['depend_buject'][_buject] = compare_dict(available_buject[_base_buject], _depend_buject)
            if 'param' not in res['depend_buject'][_buject]:
                res['depend_buject'][_buject]['param'] = {}
            res['depend_buject'][_buject]['param']['buject'] = {'value': _base_buject}
            # res['depend_buject'][_buject]['param']['name'] = {'value': _depend_buject['param']['name']['value']}

    return res


def compare_dict(old, new):
    res = {}
    for elem in new:
        if elem in old:
            if isinstance(new[elem], dict):
                _res = compare_dict(old[elem], new[elem])
                if _res:
                    res[elem] = copy.deepcopy(_res)
            else:
                if new[elem] != old[elem]:
                    res[elem] = new[elem]
        else:
            res[elem] = new[elem]
    return res


if __name__ == '__main__':
    # a = get_available_config()
    # b = get_config('CameraGimbalXZ', {"buject": {"name": {"value": "XXX"}}})
    a = {"param": {"name": {"value": "XXX"}}}
    b = {"param": {"name": {"value": "XXX"}}}
    c = compare_dict(a, b)
    test = True