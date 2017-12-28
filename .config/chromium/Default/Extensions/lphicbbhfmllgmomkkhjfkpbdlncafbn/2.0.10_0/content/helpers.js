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
            return arguments[0].substring(excess);
        } catch (e) {
            framework.extension.log("pickUnit - " + arguments[0]);
            return arguments[0];
        }
    }
});

Handlebars.registerHelper('href', function () {
    if (arguments.length > 0) {
        return API.root() + arguments[0].activateUrl + PARAMETER_DEEP_LINK + encodeURIComponent(window.location.href) + '&utm_source=extension&utm_content=notification_re_activate_cashback&utm_campaing=' + framework.browser.name.toLowerCase();
    }
});