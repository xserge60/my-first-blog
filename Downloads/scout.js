function bubot_on_open() {
    bubot_send_message('get_playlist', null);
}
function get_bubot_actions() {
    return {
        on_get_play_list: function (data) {
            var pl = $("#playlist");
            pl.empty();
            for (var elem in data) {
                pl.append("<div id='PL_" + elem + "' class='playlist ui-widget-content'>" + data[elem] + "</div>");
            }
            $(".playlist").mousedown(function(){
                bubot_send_message('send_event', {'event': "play", 'data': {'value': $(this).text()}});
            });
        }
    }
}
var key_pressed = {};
var motor_power=50;
var angle=100;
var tts_text;
var hot_keys = {
    87: function (key_down) {
        bubot_send_message('send_event', {'event': "set_motor_power", 'data': {'value': key_down?motor_power:0}});
    },  // W
    83: function (key_down) {
        bubot_send_message('send_event', {'event': "set_motor_power", 'data': {'value': key_down?motor_power*-1:0}});
    }, // S
    65: function (key_down) {
        bubot_send_message('send_event', {'event': "set_angle", 'data': {'value': key_down?Math.round(angle*key_down*-1/100):0}});
    },     // A
    68: function (key_down) {
        bubot_send_message('send_event', {'event': "set_angle", 'data': {'value': key_down?Math.round(angle*key_down/100):0}});
    },     // D
    82: function (key_down) {
        if(key_down){
            var power = $("#change_move_power");
            power.slider( "option", "value", Math.min(100, power.slider( "option", "value") + 15 ));
            power.trigger("change");
        }
    },     // R
    70: function (key_down) {
        if(key_down){
            var power = $("#change_move_power");
            power.slider( "option", "value", Math.max(1, power.slider( "option", "value") - 15 ));
            power.trigger("change");
        }
    },     // F
    16: function (key_down) {
        bubot_send_message('send_event', {'event': "all_light", 'data': {'value': key_down?1:0}});
    }     // Shift
};
$(function () {
    tts_text = $("#tts_text");
    $(document).keyup(function (event) {
        var key = event.keyCode;
        if(tts_text.is( ":focus" )){ // курсок находится в поле ввода текста сообщения
  //          console.log(event.keyCode);
            return;
        }
        if (key in key_pressed) delete key_pressed[key];
        if (event.keyCode in hot_keys)
            hot_keys[event.keyCode](false);
//        else
 //           console.log(event.keyCode);
//        console.log(event.keyCode);
    });
    $(document).keydown(function (event) {
        var key = event.keyCode;
        if(tts_text.is( ":focus" )){ // курсок находится в поле ввода текста сообщения
            if(key==13) //enter
                bubot_send_message('send_event', {'event': "say_text", 'data': {'value': $("#tts_text").val()}});
            return;
        }
        if (key in hot_keys){
            if (key in key_pressed)  // имтируем инерцию нажатия, чтобы можно было нажать чуть чуть.
                if(key_pressed[key]==100)
                    return;
                else
                    key_pressed[key]= Math.min(100, key_pressed[key]+30);
            else
                key_pressed[key] = 25;
            hot_keys[key](key_pressed[key]);
        }
//        else
    //        console.log(key);
    });
    $("#video").append('<img src="http://'+location.host+':8080/?action=stream"/>'
    ).position({
        my: "left top"
    });
    $("#say").position({
        my: "left top",
        at: "right+2 top",
        of: "#video"
    });
    $("#playlist").position({
        my: "left top",
        at: "left bottom+2",
        of: "#say"
    });
    $("#camera-wrapper").position({
        my: "left bottom",
        at: "right+2 bottom",
        of: "#video"
    });
    $("#move").position({
        my: "left bottom",
        at: "left top-2",
        of: "#camera-wrapper"
    });
    $("#console").position({
            my: "left top",
            at: "left bottom",
            of: "#video"
    });
    $("#command_turn_left").button({
        icons: {
            primary: "ui-icon-circle-arrow-w"
        },
        text: false
    }).position({
        my: "left bottom",
        at: "left bottom-5",
        of: "#move"
    }).mousedown(function () {
        bubot_send_message('send_event', {'event': "set_angle", 'data': {'value': angle*-1}});
    }).mouseup(function () {
        bubot_send_message('send_event', {'event': "set_angle", 'data': {'value': 0}});
    });
    $("#command_move_backward").button({
        icons: {
            primary: "ui-icon-circle-arrow-s"
        },
        text: false
    }).position({
        my: "left bottom",
        at: "right+5 bottom",
        of: "#command_turn_left"
    }).mousedown(function () {
        bubot_send_message('send_event', {'event': "set_motor_power", 'data': {'value': motor_power*-1}});
    }).mouseup(function () {
        bubot_send_message('send_event', {'event': "set_motor_power", 'data': {'value': 0}});
    });
    $("#command_move_forward").button({
        icons: {
            primary: "ui-icon-circle-arrow-n"
        },
        text: false
    }).position({
        my: "center bottom",
        at: "center top-5",
        of: "#command_move_backward"
    }).mousedown(function () {
        bubot_send_message('send_event', {'event': "set_motor_power", 'data': {'value': motor_power}});
    }).mouseup(function () {
        bubot_send_message('send_event', {'event': "set_motor_power", 'data': {'value': 0}});
    });
    $("#command_turn_right").button({
        icons: {
            primary: "ui-icon-circle-arrow-e"
        },
        text: false
    }).position({
        my: "left+5 bottom",
        at: "right bottom",
        of: "#command_move_backward"
    }).mousedown(function () {
        bubot_send_message('send_event', {'event': "set_angle", 'data': {'value': angle}});
    }).mouseup(function () {
        bubot_send_message('send_event', {'event': "set_angle", 'data': {'value': 0}});
    });
    $("#change_move_power").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: motor_power,
        change: function (event, ui) {
            motor_power = ui.value
            var data = {};
            data.event = 'change_motor_power';
            data.data = {'value': ui.value};
            bubot_send_message('send_event', data);
        }
    }).position({
        my: "left+10 bottom",
        at: "right bottom",
        of: "#command_turn_right"
    });
    $("#command_light").button({
        icons: {
            primary: "	ui-icon-radio-on"
        },
        text: false
    }).position({
        my: "left+5 bottom",
        at: "right bottom",
        of: "#change_move_power"
    }).mousedown(function () {
        bubot_send_message('send_event', {'event': "all_light", 'data': {'value': 1}});
    }).mouseup(function () {
        bubot_send_message('send_event', {'event': "all_light", 'data': {'value': 0}});
    });
    $("#camera_position").draggable({
        containment: "#camera-wrapper",
//        revert: true,
        scroll: false
    }).position({
        my: "center center",
        of: "#camera-wrapper"
    }).on("drag", function (event, ui) {
        cameraChagePosition(this, ui);
    }).on("click", function (event, ui) {
        var camera = $("#camera-wrapper").offset();
        $("#camera_position").offset({top:camera.top+100, left:camera.left+150}).trigger("dragstop");
    }).on("dragstop", function (event, ui) {
//        var data = {};
//        data.event = 'change_camera_position';
//        data.data = {'powerZ': 0, 'powerX': 0};
//        bubot_send_message('send_event', data);
        cameraChagePosition(this, ui);
    });
    function cameraChagePosition(context, ui) {
        var powerX, powerZ;
        var parent = context.parentElement;
        var deflectionH = ui==undefined?0:ui.position.left - 150;
        var deflectionV = ui==undefined?0:ui.position.top - 100;
        if (deflectionH < 0) // поворачиваем камеру влево
            powerZ = Math.round(deflectionH * 100 / 150);
        else
            powerZ = Math.round(deflectionH * 100 / (parent.clientWidth - context.clientWidth - 2 - 150));
        if (deflectionV < 0) // поворачиваем камеру влево
            powerX = Math.round(deflectionV * 100 / 100);
        else
            powerX = Math.round(deflectionV * 100 / (parent.clientHeight - context.clientHeight - 2 - 100));
        var data = {};
//        console.log(powerX, deflectionH, parent.clientHeight);
        data.event = 'change_camera_position';
        data.data = {'powerZ': powerZ, 'powerX': powerX * -1};
        bubot_send_message('send_event', data);
    }
    function cameraChagePosition2(context, ui) {
        var powerX, powerZ;
        var parent = context.parentElement;
        var deflectionH = ui.position.left - ui.originalPosition.left;
        var deflectionV = ui.position.top - ui.originalPosition.top;
        if (deflectionH < 0) // поворачиваем камеру влево
            powerZ = Math.round(deflectionH * 100 / ui.originalPosition.left);
        else
            powerZ = Math.round(deflectionH * 100 / (parent.clientWidth - context.clientWidth - 2 - ui.originalPosition.left));
        if (deflectionV < 0) // поворачиваем камеру влево
            powerX = Math.round(deflectionV * 100 / ui.originalPosition.top);
        else
            powerX = Math.round(deflectionV * 100 / (parent.clientHeight - context.clientHeight - 2 - ui.originalPosition.top));
        var data = {};
        console.log(powerX, deflectionH, parent.clientHeight);
        data.event = 'change_camera_position';
        data.data = {'powerZ': powerZ, 'powerX': powerX * -1};
        bubot_send_message('send_event', data);
    }

});
