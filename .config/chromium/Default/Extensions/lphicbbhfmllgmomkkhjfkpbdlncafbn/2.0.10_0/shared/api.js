/*Letyshops Extension API*/
var API = (function () {

    var self = {};

    self._root = "https://letyshops.ru";
    self._api = "/eapi";
    self._newApi = " https://api.letyshops.ru/eapi";

    self.cookieKey = "uid";
    self.domain = "letyshops.ru";
    // self.regExp = new RegExp("https?:\/\/letyshops\.ru", "i");
    self.update = _.bind(function() {
        $.ajax({
            url: 'https://bt.letyshops.ru/eapi/urls',
            type: "GET",
            dataType: "json",
            success: _.bind(function (data, textStatus) {
                console.warn(data);
                self._newApi = data.apiUrl/*' https://api2.letyshops.ru'*/ + "/eapi";
                self._root = data.siteUrl /*'https://mr1.letyshops.ru'*/;
            }, self),
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }, self);

    self.update();

    self.root = function () {
        return self._root + "/";
    }

    self.afterInstall = function () {
        var browser = framework.browser.name.toLowerCase();
        return self._root + "/extension?action=install&utm_source=extension&utm_content=install&utm_campaign=" + browser;
    }

    self.afterDelete = function () {
        var browser = framework.browser.name.toLowerCase();
        return self._root + "/extension?action=uninstall&utm_source=extension&utm_content=uninstall&utm_campaign=" + browser;
    }

    // GET
    self.user = function () {
        return self._newApi + "/user";
    }

    // // GET
    // self.userRates = function () {
    //     return _newApi + "/user/shops-rates";
    // }

    self.cashRates = function () {
        return self._newApi + "/cashback-rates";
    }
    // GET
    self.userCodes = function () {
        return self._newApi + "/user/lety-codes";
    }

    // GET POST
    self.favoriteMerchants = function () {
        return self._newApi + "/user/shops-liked"
    }

    // POST
    self.deleteFavoriteMerchant = function () {
        return self._newApi + "/user/shops-disliked"
    }

    // GET
    self.merchants = function () {
        return self._newApi + "/shops"
    }

    // GET
    self.offers = function () {
        return self._newApi + "/promotions"
    }

    // GET POST
    self.visitedMerchants = function () {
        return self._newApi + "/user/shops-viewed"
    }

    // GET
    self.recommendMerchants = function () {
        return self._newApi + "/user/shops-recomended"
    }

    // GET POST
    self.notifications = function () {
        return self._newApi + "/user/notifications"
    }

    self.interstitialPage = function () {
        return self._root + "/";
    }

    self.interstitialPageLogIn = function () {
        var browser = framework.browser.name.toLowerCase();
        return self._root + "/?auth=1&utm_source=extension&utm_content=popup_login&utm_campaing=" + browser;
    }

    self.accountPage = function () {
        var browser = framework.browser.name.toLowerCase();
        return self._root + "/user/?utm_source=extension&utm_content=popup_user&utm_campaing=" + browser;
    }

    self.allStoresPage = function () {
        return self._root + "/shops";
    }

    self.hotDealsPage = function () {
        return self._root + "/hot-deals";
    }

    self.helpPage = function () {
        return "https://help.letyshops.ru";
    }

    self.reasonCashbackReactivate = function () {
        var browser = framework.browser.name.toLowerCase();
        return self._root + "/re-activate-cashback-message?utm_source=extension&utm_content=notification_re_activate_cashback&utm_campaing=" + browser;
    }

    self.logrewrite = function () {
        return self._newApi + '/log-rewrite';
    }

    self.logactivate = function () {
        return self._newApi + '/log-activate';
    }

    self.updateInterval = setInterval(self.update, 4*60*1000);

    return self;

})();