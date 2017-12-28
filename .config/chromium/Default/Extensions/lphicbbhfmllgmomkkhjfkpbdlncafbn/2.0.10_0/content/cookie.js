var Cookie = (function () {
    var self = this;

    self.checkUserCookie = function () {
        if (window.document.domain && (window.document.domain.indexOf(API.domain) + 1)) {
            var cookie = _.chain(window.document.cookie.split("; "))
                .map(function (cookie) {
                    return {
                        key: cookie.split("=")[0],
                        value: cookie.split("=")[1]
                    }
                })
                .findWhere({
                    key: API.cookieKey
                })
                .value();
            if (cookie && cookie.value) {
                framework.extension.fireEvent(ON_USER_LOGIN, {tabId: null, data: {cookie: cookie.value}});
            } else {
                framework.extension.fireEvent(ON_USER_LOGOUT, {tabId: null});
            }
        }
    };

    self.checkMerchantCookie = function () {
        if (window.document.domain) {
            framework.extension.fireEvent(CHECK_MERCHANT_COOKIES, {tabId: null}, function (data) {
                var merchant = data && data.merchant;
                if (merchant && merchant.isActivated) {
                    var checkCookieCollection = merchant.checkCookieParams;
                    var pageCookies = _.chain(window.document.cookie.split("; "))
                        .map(function (cookie) {
                            return [
                                cookie.split("=")[0],
                                cookie.split("=")[1]
                            ]
                        })
                        .object().value();
                    if (merchant.savedCookie) {
                        var cashbackCookie = merchant.savedCookie;
                        var rightSet = _.filter(checkCookieCollection, function (checkCookieSet) {
                            return _.isEqual(_.keys(checkCookieSet), _.keys(cashbackCookie));
                        });
                        _.each(rightSet[0], function (pattern, cookieName) {
                            console.warn(cashbackCookie[cookieName], pageCookies[cookieName]);
                            console.warn(cashbackCookie.length, pageCookies.length);
                            if (!new RegExp(pattern, "i").test(pageCookies[cookieName]) || (cashbackCookie[cookieName] != pageCookies[cookieName])) {
                                framework.extension.fireEvent(CASHBACK_DEACTIVATE, {tabId: null, data: {merchantId: merchant.id}});

                                var notification = new Notification({model: merchant}).render();
                                notification.addInfo();                               
                                notification.addWarning();
                                framework.extension.fireEvent(SEND_GOOGLE_ANALYTICS, {
                                    tabId: null,
                                    data: {
                                        type: 'pageview',
                                        page: gaPagePopup + 'activate-cashback-reactivate/' + merchant.title + '/'
                                    }
                                });
                                framework.extension.fireEvent(SAW_REWRITE, {
                                    tabId: null,
                                    data: {id: merchant.id}
                                });
                            }
                        });
                    } else {
                        var complete = false;
                        _.each(checkCookieCollection, function (checkCookieSet) {
                            if (complete) return;
                            var cookieValues = _.chain(checkCookieSet)
                                .map(function (pattern, cookieName) {
                                    if (_.has(pageCookies, cookieName) && new RegExp(pattern, "i").test(pageCookies[cookieName])) {
                                        return [cookieName, pageCookies[cookieName]];
                                    } else {
                                        return null;
                                    }
                                })
                                .compact()
                                .object()
                                .value();
                            if (_.keys(cookieValues).length == _.keys(checkCookieSet).length) {
                                framework.extension.fireEvent(SET_MERCHANT_COOKIES, {tabId: null, data: {merchantId: merchant.id, cookie: cookieValues}});
                                complete = true;
                            }
                        });
                    }
                }
            });
        }
    };

    return self;
})();
