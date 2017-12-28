var socket;
var actions;
var _console;
$(function () {
    _console = $('#console');
    actions = {
        on_get_subscribe_message: function (params) {
            setTimeout(function () {
                bubot_send_message('get_subscribe_message', null)
            }, 1500);
        },
        console: function (data) {
            bubot_console(data.param.message, data.param.time * 1000);
        }
    };
    $.extend(actions, get_bubot_actions());
    $.extend({
        getUrlVars: function () {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function (name) {
            return $.getUrlVars()[name];
        }
    });
    function doConnect() {

//        var bubot_name = $.getUrlVar('bubot');
//        if(bubot_name==undefined)
//        var _path = location.pathname.split('/');
//        if(_path.length!=4) {
//            bubot_console('Bad url');
//            return false;
//        }
//        var url = "ws://" + location.host + "/ws/"+_path[2]+"/"+_path[3];
        var url = "ws://" + location.host + "/ws" + location.pathname;
        bubot_console('WebSocket сonnecting to '+ url);
        socket = new WebSocket(url);
        socket.onopen = function () {
            bubot_console('WebSocket connected');
            bubot_send_message('get_subscribe_message', null);
            bubot_on_open();
        };
        socket.onclose = function (event) {
            if (event.wasClean) {
                bubot_console('WebSocket close');
            } else {
                bubot_console('WebSocket close. Error (' + event.code + ')');
            }
            setTimeout(doConnect, 1000);
        };
        socket.onmessage = function (event) {
//        console.log('WebSocket: Получены данные ' + event.data);
            var data = $.parseJSON(event.data);
            if('method' in data && 'param' in data && typeof (actions[data.method]) == 'function') {
                actions[data.method](data.param);
            }
        };
        socket.onerror = function (error) {
            console.error('WebSocket error: ' + error.data);
        };
    }

    doConnect();

});
function bubot_send_message(method, param) {
    var data = {};
    if (socket && socket.readyState == 1) {
        data.method = method;
        data.param = param;
        socket.send(JSON.stringify(data));
    }
}
function bubot_console(message, time) {
    var dt = !time? (new Date()): (new Date(time));
    dt =  two_digit(dt.getHours()) + ':' + two_digit(dt.getMinutes()) + ':' + two_digit(dt.getSeconds());
    _console.prepend(dt+' '+ message + '<br\/>');
}
function two_digit(value) {
    if (value < 10)
        return '0' + value;
    return value;
}