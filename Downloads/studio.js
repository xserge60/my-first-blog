var bubot_config;
var bubot_status;
//var bujects;
var current_buject;
var available_bujects;
//var socket;
var dialog_method, form;


function bubot_on_open() {
    bubot_send_message('get_bubot_config', null);
    bubot_send_message('get_bubot_status', null);
    bubot_send_message('get_available_bujects', null);
    bubot_send_message('get_available_bubots', null);
    showBuject(null);
}
function get_bubot_actions() {
    return {
        on_get_available_bujects: function (data) {
            available_bujects = data;
            var ab = $("#AvailableBujects");
            ab.empty();
            for (var buject in available_bujects) {
                ab.append("<div id='AB_" + buject + "' class='available-bujects ui-widget-content'>" + buject + "</div>");
            }
            $(".available-bujects").draggable({
                scroll: false, helper: "clone", zIndex: 999, appendTo: "body"
            });
        },
        on_get_available_bubots: function (data) {
            var ab = $("#AvailableBubots");
            ab.empty();
            for (var bubot in data) {
                ab.append("<div class='available-bubots ui-widget-content'>" + bubot + "</div>");
            }
            $(".available-bubots").click(function () {
                if ($("#stop").text() === "bubot start") {
                    bubot_send_message('restart', $(this).text());
                } else {
                    bubot_console('Is required to stop the current robot');
                }
            })
        },
        on_get_bubot_config: function (data) {
            bubot_config = data;
            $('#Bubot').find("tbody").empty();
            $('#BujectProperties').empty();
        },
        on_get_bubot_status: function (data) {
            bubot_status = {};
            for (var elem in data)
                if (data.hasOwnProperty(elem)) {
                    bubot_status[elem] = $.parseJSON(data[elem]);
                }
            if ('param' in bubot_config && bubot_status[bubot_config['param']['name']['value']]) { // bubot started
                //$("#bubot_name").text(bubot_config['param']['name']['value']);
                $("#stop").button({
                    label: "bubot stop",
                    icons: {primary: "ui-icon-stop"}
                });
            }
            else {
                $("#stop").button({
                    label: "bubot start",
                    icons: {primary: "ui-icon-play"}
                });
            }
            updateStatus();
        }
    }
}
$(function () {
    dialog_method = $("#dialog-method").dialog({
        autoOpen: false,
        height: 400,
        width: 300,
        modal: true,
        buttons: {
            "Run": function () {
                var param = {};
                var title = dialog_method.dialog("option", "title").split(":");
                var buject = title[0],
                    group = title[1],
                    name = title[2],
                    method = bubot_config['depend_buject'][buject][group][name];
                dialog_method.find("tr").each(function () {
                    var elem = $("input", this).first();
                    if (elem.length > 0) {
                        param[elem.attr('name')] = check_value(method['param'][elem.attr('name')], elem.val());
                    }
                });
                bubot_send_message("send_message", {
                    'buject': title[0],
                    'type': title[1],
                    'name': title[2],
                    'data': param
                });
            },
            Cancel: function () {
                dialog_method.dialog("close");
            }
        },
        close: function () {
//            form[ 0 ].reset();
//            allFields.removeClass("ui-state-error");
        }
    });
    var heightR = $(document).height();// высота экрана
//    var widthR = $(window).width();// ширина экрана
    $("#stop").button({
        text: false,
        label: "bubot stop",
        icons: {primary: "ui-icon-stop"}
    })
        .click(function () {
            var options;
            if ($(this).text() === "bubot start") {
                bubot_send_message('restart', bubot_config['param']['name']['value']);
            } else {
                bubot_send_message('stop', null);
            }
            $(this).button("option", options);
        });
    $("#save").button({
        text: false,
        icons: {
            primary: "ui-icon-arrowthickstop-1-n"
        }
    })
        .click(function () {
            bubot_send_message('save_config', JSON.stringify(bubot_config));
        });
    $('#Bubot').selectable({
        filter: 'tr',
        stop: function () {
//            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                if (this.id)
                    showBuject(this.id);
            });
        }
    });
    $("#sidebar_left").css({
        'height': heightR * 0.7
    })
        .tabs();
    $("#sidebar_right").css({
        'height': heightR * 0.7
    });
    $("#BujectProperties").accordion({
        heightStyle: "content",
        collapsible: true
    });
    $("#content").css({
        'height': heightR * 0.7
    }).droppable({
        drop: function (event, ui) {
            add_depend_buject(ui.draggable.text());
            //updateStatus();
        }
    });
    $("#console").css({
        'height': heightR * 0.27 - $("#toolbar").height()
    });
});
{
    function format_value(buject, group, name, value) {
        var value_type = get_type_value(buject, group, name);
        if (!value_type) return value;
        if (value_type == 'int')
            return +value
        if (value_type == 'unixtime') {
            var dt = new Date(value * 1000);
            return two_digit(dt.getHours()) + ':' + two_digit(dt.getMinutes()) + ':' + two_digit(dt.getSeconds());
        }
        return value;
    }

    function get_type_value(buject, group, name) {
        var config = get_config(buject);
        if (config && config[group] && config[group][name] && config[group][name]['type'])
            return config[group][name].type;
        return false;
    }

    function check_value(param, value) {
        var type = param['type'] ? param['type'] : undefined;
        if (type == 'int') return +value;
        return value;
    }

    function get_config(id) {
        if (id in bubot_config.depend_buject)
            return bubot_config.depend_buject[id];
        else if (id == bubot_config.bubot.name.value)
            return bubot_config;
        return false;
    }

    function show_method_list(config, BujectProperties, group, id) {
        if (config && config[group] && !$.isEmptyObject(config[group])) {
            BujectProperties.append("<tr class='ui-widget-header '><th colspan='2'>" + group + "</th></tr>");
            for (var elem in config[group])
                if (config[group].hasOwnProperty(elem)) {
                    BujectProperties.append('<tr><td colspan=2><div class="BujectMethod" id="' + id + ':' + group + ':' + elem + '">' + elem + '</td></tr>');
                }
        }
    }

    function appendParam(element, config, id, prefix) {
//    BujectProperties.append('<h3>param</h3>');
//
        element.append('<tr class=\'ui-widget-header \'><th colspan=\'2\'>param</th></tr>');
        if (config && config.param)
            for (elem in config.param)
                if (config.param.hasOwnProperty(elem)) {
                    var elem_html = "<tr>" + "<td style='overflow-x: hidden'>" + elem + "</td>" + "<td>";
                    var elem_value = config.param[elem].value == undefined ? "" : config.param[elem].value;
                    if('readonly' in config.param[elem] && config.param[elem]['readonly'])
                        elem_html += elem_value;
                    else
                        elem_html += '<input id=' + prefix + id + ' name=' + elem + ' class=\'text ui-widget-content ui-corner-all BujectParam\' type=\'text\' value=\'' + elem_value + '\'/>';
                    elem_html += '</td></tr>';
                    element.append(elem_html);
                }

    }
}
function showBuject(id) {
    var BujectProperties = $("#BujectProperties");
    BujectProperties.empty();
    if (!id) return;
    id = id.substr(7);
    current_buject = id;
    var config = get_config(id);
    var status = bubot_status[id];
    BujectProperties.append('<tr class=\'ui-widget-header \'><th colspan=\'2\'>status</th></tr>');
    for (var elem in status)
        if (status.hasOwnProperty(elem)) {
            var value = format_value(id, 'status', elem, status[elem]);
            BujectProperties.append("<tr>" + "<td style='overflow-x: hidden'>" + elem + "</td>" +
            "<td id='status_" + elem + "'>" + value + "</td></tr>");
        }
    appendParam(BujectProperties, config, id, 'param_');
    show_method_list(config, BujectProperties, 'incoming_request', id);
    show_method_list(config, BujectProperties, 'outgoing_request', id);
    show_method_list(config, BujectProperties, 'incoming_event', id);
    show_method_list(config, BujectProperties, 'outgoing_event', id);


    $(".BujectParam").change(function () {
        var value = this.value;
        var buject = this.id.substr(6);
        value = format_value(buject, 'param', this.name, value);
        if (this.name == 'name'){ // изменилось имя у сервиса, создаем копию текущего buject но с новым именем
            if (buject in bubot_config.depend_buject) { //это buject
                bubot_config.depend_buject[value] = clone(bubot_config.depend_buject[buject]);
                bubot_config.depend_buject[value]['param']['name']['value'] = value;
                delete bubot_config.depend_buject[buject];
                $('#buject_'+buject).remove();
                showBuject('buject_' + value); // показывем новый buject
                return;
            }
            else if (buject == bubot_config.bubot.name.value) // это сам bubot
                bubot_console('PLEASE SAVE THIS BUBOT AND START NEW BUBOT');
        }
        var config = get_config(buject);
        config.param[this.name].value = value;
    });
    $(".BujectMethod").on("click", function () {
        var method = this.id.split(":");
        dialog_method.dialog("option", "title", method[0] + ':' + method[1] + ':' + method[2]);
        var method_param = dialog_method.find("#MethodParam");
        method_param.empty();
        appendParam(method_param, config[method[1]][method[2]], method[0], "method_param:")
        dialog_method.dialog("open");
    });
}
function updateStatus() {
    if (bubot_config == undefined) return false;
    var thisBubot = $('#Bubot'),
        elemTbody = thisBubot.find("tbody"),
        buject,
        status = {};

    var elemTR = thisBubot.find('tr');
    elemTR.each(function () {  // update buject
        var elemTD = $("td", this);
        if (elemTD.length > 1) {
            var elem_name = elemTD.first().text();
            status[elem_name] = 1;
            if (elem_name in bubot_status) {
                elemTD.eq(2).text(bubot_status[elem_name].buject);
                elemTD.eq(3).text(bubot_status[elem_name].action);
            }
            else {
                elemTD.eq(2).text('');
                elemTD.eq(3).text('');
            }
        }
    });
    if ('depend_buject' in  bubot_config)  // add buject
        for (buject in bubot_config['depend_buject'])
            if(!(buject in status)){
                add_bubot_status(elemTbody, buject, bubot_config['depend_buject'][buject]['param']['buject']['value']);
                status[buject] = 1;
            }
    buject = bubot_config.bubot.name.value; // add bubot, имя специально берется с бубота, чтобы было корректное поведение при переименовании.
    if(!(buject in status)){
        add_bubot_status(elemTbody, buject, 'Bubot');
        status[buject] = 1;
    }



    for (buject in bubot_status)  // обновляем статусы
        if (bubot_status.hasOwnProperty(buject)) {
            if(!(buject in status)){
                if(buject in bubot_config['depend_buject'])
                    elemTbody.append('<tr id=\'buject_' + buject + '\'><td>' + buject +
                    '</td><td>'+bubot_config['depend_buject'][buject]['param']['buject']['value']+'</td>' +
                    '<td>' + bubot_status[buject].buject + '</td><td>' + bubot_status[buject].action + '</td></tr>');
                else
                    bubot_console('bad bubot config in depend: ' + buject);
            }
            if (current_buject == buject) // update active buject
                for (var param in bubot_status[buject])
                    if (bubot_status[buject].hasOwnProperty(param)) {
                        $("#status_" + param).text(format_value(buject, 'status', param, bubot_status[buject][param]));
                    }
        }
    setTimeout(function () {
        bubot_send_message('get_bubot_status', null)
    }, 1500);
}
function add_bubot_status(elemTbody, name, buject){
    if (name in bubot_status) {
        elemTbody.append('<tr id=\'buject_' + name + '\'><td>' + name + '</td>' +
        '<td>' + buject + '</td><td>' + bubot_status[name].buject + '</td><td>' + bubot_status[name].action + '</td></tr>');
        bubot_status[name]['ui_update'] = 1;
    }
    else elemTbody.append('<tr id=\'buject_' + name + '\'><td>' + name + '</td><td>'+buject+'</td><td></td><td></td></tr>');
}
function add_depend_buject(buject){
    if (buject in bubot_config['depend_buject'])
        bubot_console('buject ' + buject + 'уже добавлен. Если требуется добавить ещё один - измените имя имеющегося.');
    else {
        bubot_config['depend_buject'][buject] = available_bujects[buject];
        for(var depend_buject in  available_bujects[buject]['depend_buject'])
            if(depend_buject in available_bujects)
                add_depend_buject(depend_buject);
            else
                bubot_console('for buject ' + buject + ' not found depend buject \''+depend_buject+'\'');

    }
}
function clone(obj){
    if(!obj || typeof obj !== 'object')
        return obj;
    var c = (typeof obj.pop === 'function') ? [] : {};
    var p, v;
    for(p in obj){
        if(obj.hasOwnProperty(p)){
            v = obj[p];
            if(v && typeof v === 'object')
                c[p] = clone(v);
            else
                c[p] = v;
        }
    }
    return c;
}