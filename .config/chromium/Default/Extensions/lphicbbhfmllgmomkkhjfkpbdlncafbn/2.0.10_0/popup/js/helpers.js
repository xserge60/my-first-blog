Handlebars.registerHelper('pickNum', function () {
    if (arguments.length > 0 && arguments[0]) {
        try {
            var numChar = (parseFloat(arguments[0].replace(",", ".")) + "").length;
            return arguments[0].substring(0, numChar);
        } catch (e) {
            framework.extension.log("pickNum - " + arguments[0]);
            return arguments[0];
        }
    }
});

Handlebars.registerHelper('pickUnit', function () {
    if (arguments.length > 0) {
        try {
            var excess = (parseFloat(arguments[0].replace(",", ".")) + "").length;
            var unit = arguments[0].substring(excess);
            if (unit.length > 6)
                unit = unit.substring(0, 6);
            return unit;
        } catch (e) {
            framework.extension.log("pickUnit - " + arguments[0]);
            return arguments[0];
        }
    }
});

Handlebars.registerHelper('cashbackConverter', function () {
    if (arguments.length > 0) {
        if (arguments[0].cashbackFloated) {
            return "+ до " + arguments[0].cashback + " кэшбэк";
        } else {
            return "+ " + arguments[0].cashback + " кэшбэк";
        }
    }
});

Handlebars.registerHelper('getHtml', function () {
    if (arguments.length > 0) {
        if (!arguments[0].indexOf("<") + 1) {
            return $(arguments[0]);
        } else {
            return arguments[0];
        }
    }
});

Handlebars.registerHelper('getTypeSpecBtn', function () {
    if (arguments.length > 0) {
        if (arguments[0] == FOOTER_ALL_STORES) {
            return "ВСЕ МАГАЗИНЫ";
        } else if (arguments[0] == FOOTER_ALL_OFFERS) {
            return "ВСЕ МАГАЗИНЫ С АКЦИЯМИ";
        }
    }
});

Handlebars.registerHelper('isUnread', function () {
    if (arguments.length > 0) {
        if (arguments[0] == "1") {
            return "letyshops-notification-markup-special";
        } else {
            return "";
        }
    }
    return ""
});

Handlebars.registerHelper('haveActiveNotify', function (conditional, options) {
    if (conditional && conditional.length) {
        if (_.findWhere(conditional, {status: "1"}))
            return options.fn(this);
    }
    return options.inverse(this);
});






