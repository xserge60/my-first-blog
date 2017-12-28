var User = Backbone.Model.extend({
        urlRoot: API.user,
        updateFlag: "userLastAuthorization",
        timerUpdate: null,

        defaults: {
            "token": null,
            "name": "",
            "balance": "",
            "image": "",
            "partnerUrl": "",
            "partnerPercent": "",
            "rates": new Rates(),
            "notifications": [],
            "favorites": [],
            "recommended": [],
            "viewed": []
        },

        /*CREATE OBJECT*/

        initialize: function () {
            var self = this;
            self.rates = self.get("rates");
            framework.extension.attachEvent(ON_USER_LOGIN, function (event) {
                console.log("LOGIN", event);
                self.logIn(event.data.cookie);
            });
            framework.extension.attachEvent(ON_USER_LOGOUT, function (event) {
                console.log("LOGOUT", event);
                self.logOut();
            });
            Storage.get(LOGIN_TOKEN, function (cookie) {
                if (cookie && cookie.length && typeof cookie == "string") {
                    self.logIn(cookie);
                }
            });
            Storage.set(OFFLINE_LIKES, []);            
        },

        /*LOG(IN, OUT, IS) METHODS*/

        logIn: function (cookie) {
            var self = this;
            if (cookie && cookie != self.get("token")) {
                Storage.get(POPUP_FIRST_OPENING_TOKEN, function (token) {
                    if (!token)
                        Button.setBadge("");
                });
                console.log("logIn", cookie, self.get("token"));

                self.userUpdated = false;
                self.notifUpdated = false;
                self.favUpdated = false;
                self.recomUpdated = false;
                self.viewUpdated = false;
                if(self.rates.codesUpdated) {
                    self.rates.codesUpdated = false;
                }

                clearInterval(self.mainInterval);

                self.fetch({
                    success: function (model, data) {
                        if (data.name) {
                            self.response = data;

                            self.set("token", cookie || '');
                            Storage.set(LOGIN_TOKEN, cookie || '');

                            self.fetchNotifications(false, function (value) {
                                self.set("notifications", value);
                                if (_.findWhere(value, {status: "1"})) {
                                    Button.setBadge(_.where(value, {status: "1"}).length);
                                    framework.extension.fireEvent(SET_NOTIFICATIONS_POPUP, {tabId: null});
                                    Storage.set(POPUP_FIRST_OPENING_TOKEN, "Wow!");
                                } else {
                                    Button.clearCounter();
                                }
                            });
                            self.fetchFavorite(false, function (value) {
                                self.set("favorites", value);
                            });
                            self.fetchRecommended(false, function (value) {
                                self.set("recommended", value);
                            });
                            self.fetchViewed(false, function (value) {
                                self.set("viewed", value);
                            });

                            clearInterval(self.mainInterval);
                            self.mainInterval = setInterval(_.bind(function(){
                                console.log('USER MAIN UNTERVAL');
                                self.fetchNotifications(false, function (value) {
                                    self.set("notifications", value);
                                    if (_.findWhere(value, {status: "1"})) {
                                        Button.setBadge(_.where(value, {status: "1"}).length);
                                        framework.extension.fireEvent(SET_NOTIFICATIONS_POPUP, {tabId: null});
                                        Storage.set(POPUP_FIRST_OPENING_TOKEN, "Wow!");
                                    } else {
                                        Button.clearCounter();
                                    }
                                });
                                self.fetchFavorite(false, function (value) {
                                    self.set("favorites", value);
                                });
                                self.fetchRecommended(false, function (value) {
                                    self.set("recommended", value);
                                });
                                self.fetchViewed(false, function (value) {
                                    self.set("viewed", value);
                                });
                            }, self), 5*60*1000);

                        } else {
                            console.error('USER IS NOT LOGGED');
                            self.logOut();
                        }
                    }
                });
                if (self.rates == null) {
                    _.delay(function () {
                        self.rates.fetch();
                    }, 2000);
                } else {
                    self.rates.fetch();
                }
            }
            Storage.get(OFFLINE_LIKES, function (data) {
                _.each(data, function (id) {
                    self.pushLiked(id)
                }, self);
            });

        },

        logOut: function () {
            var self = this;
            if (self.get("token") != null)
                self.set("token", null);
            Storage.set(LOGIN_TOKEN, "");

            self.userUpdated = false;
            self.notifUpdated = false;
            self.favUpdated = false;
            self.recomUpdated = false;
            self.viewUpdated = false;
            if(self.rates.codesUpdated) {
                self.rates.codesUpdated = false;
            }

            clearInterval(self.mainInterval);

            _.each(self.attributes, function (attributeVal, attributeName) {
                self.unset(attributeName);
            });
            if (!!self.timerUpdate) {
                window.clearTimeout(self.timerUpdate);
                self.timerUpdate = null;
            }
        },

        isLogin: function () {
            return this.get("token");
        },

        /*FETCH COMMON USERS DATA*/

        fetch: function () {
            if (!arguments[0]) {
                arguments[0] = {};
                arguments.length = 1;
            }
            var self = this,
                _arguments = arguments,
                _options = arguments[0],
                _callee = arguments.callee;

            var _success = _options.success;
            var _error = _options.error;
            if (!self.userUpdated || _.now() - self.userUpdated > UPDATE_INTERVAL_USER) {
                self.userUpdated = _.now();
                console.log('FETCH USER FROM SERVER');
                Backbone.Model.prototype.fetch.apply(self, _arguments);
            } else {
                // _success({}, self.response);
            }
            // if (!!self.timerUpdate) {
            //     window.clearTimeout(self.timerUpdate);
            //     self.timerUpdate = null;
            // }
            // self.timerUpdate = window.setTimeout(function () {
            //     _callee.apply(self, _arguments);
            // }, UPDATE_INTERVAL_USER);
        },

        /* FETCH AND SEND User Notification */

        fetchNotifications: function (forceUpdate, callback, force) {
            var self = this;
            if (!self.isLogin()) return;

            if (!self.notifUpdated || _.now() - self.notifUpdated > UPDATE_INTERVAL_USER_NOTIFICATION || force) {

                $.ajax({
                    url: API.notifications(),
                    type: "GET",
                    dataType: "json",
                    success: function (data, textStatus) {
                        self.notifUpdated = _.now();

                        if (data && data.length > 0) {
                            var value = _.map(data, function (notif) {
                                return {
                                    "id": notif.id + "",
                                    "status": notif.status, // 1 - unread 2- read
                                    "markup": notif.markup,
                                    "showed": !notif.status == 1,
                                    "date": self.convertDate(notif.date)
                                }
                            })
                            callback && callback(value);
                        } else {
                            callback && callback([]);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == '403' || jqXHR.statusText == "Forbidden") {
                            framework.extension.log("fetchNotify - Forbidden");
                        }
                    }
                });
            } else {

            }
            if (forceUpdate)
                _.delay(_.bind(self.fetchNotifications, self), UPDATE_INTERVAL_USER_NOTIFICATION, true, callback);
        },

        pushReviewedNotifications: function (id) {
            var self = this;
            var notifications = self.get("notifications");
            var certainNotify = _.findWhere(notifications, {id: id + ""});
            if (certainNotify) {
                $.ajax({
                        url: API.notifications(),
                        type: "POST",
                        data: {"notification_ids": [id]},
                        processData: true,
                        success: function (data, textStatus) {
                            /*numUpdated is return incorrect value, not more 0*/
                            if (data && data.numUpdated > 0) {
                                framework.extension.log(data + ", " + data.numUpdated);
                                self.fetchNotifications(false, function (value) {
                                    self.set("notifications", value);
                                    if (_.findWhere(value, {status: "1"})) {
                                        Button.setBadge(_.where(value, {status: "1"}).length);
                                    } else {
                                        Button.clearCounter();
                                    }
                                }, true);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            if (jqXHR.status == '400' || jqXHR.statusText == "Bad Request") {
                                framework.extension.log("pushNotify - Forbidden");
                            }
                        }
                    }
                );
            }
        },

        /* FETCH AND SEND Favorite */

        fetchFavorite: function (forceUpdate, callback) {
            var self = this;
            if (!self.isLogin()) return;
            if (!self.favUpdated || _.now() - self.favUpdated >  UPDATE_INTERVAL_FAVORITE) {
                $.ajax({
                    url: API.favoriteMerchants(),
                    type: "GET",
                    dataType: "json",
                    success: function (data, textStatus) {
                        self.favUpdated = _.now();

                        if (data && data.length > 0) {
                            callback && callback(data);
                        } else {
                            callback && callback([]);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == '403' || jqXHR.statusText == "Forbidden") {
                            framework.extension.log("fetchNotify - Forbidden");
                        }
                    }
                });
            } else {

            }
            if (forceUpdate)
                _.delay(_.bind(self.fetchFavorite, self), UPDATE_INTERVAL_FAVORITE, true, callback);
        },

        pushLiked: function (id) {
            //console.log('push liked');
            var self = this;
            $.ajax({
                    url: API.favoriteMerchants(),
                    type: "POST",
                    data: {
                        "shops_liked": [
                            {
                                "shop_id": id + "",
                                "date": self.currentDate()
                            }
                        ]
                    },
                    processData: true,
                    success: function (data, textStatus) {
                        if (data && (data.numInserted > 0 || data.numUpdated > 0)) {
                            if (data.numInserted > 0) {
                                framework.extension.log(data + ", " + data.numInserted + ", " + data.numUpdated);
                            }
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == '400' || jqXHR.statusText == "Bad Request") {
                            framework.extension.log("pushLiked - ​Missing parameters");
                        } else if (jqXHR.status == '403') {
                            framework.extension.log("pushLiked -  ​Access Denied");
                            Storage.get(OFFLINE_LIKES, function (data) {
                                data.push(id);
                                Storage.set(OFFLINE_LIKES, data);
                            });
                        }
                    }
                }
            );
        },

        pushDisliked: function (id) {
            //console.log('push disliked');
            var self = this;
            $.ajax({
                    url: API.deleteFavoriteMerchant(),
                    type: "POST",
                    data: {"shops_disliked": [id + ""]},
                    processData: true,
                    success: function (data, textStatus) {
                        if (data && data.numUpdated > 0) {
                            if (data.numDeleted > 0) {
                                framework.extension.log(data + ", " + data.numDeleted);
                            }
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == '400' || jqXHR.statusText == "Bad Request") {
                            framework.extension.log("pushDisliked - ​Missing parameters");
                        } else if (jqXHR.status == '403') {
                            framework.extension.log("pushDisliked -  ​Access Denied");
                            Storage.get(OFFLINE_LIKES, function (data) {
                                var dislikeIndex = data.indexOf(id);
                                if (dislikeIndex > -1) {
                                    data.splice(dislikeIndex, 1);
                                    Storage.set(OFFLINE_LIKES, data);
                                }
                            });
                        }
                    }
                }
            );
        },

        /* FETCH Recommended */

        fetchRecommended: function (forceUpdate, callback) {
            var self = this;
            if (!self.isLogin()) return;
            if (!self.recomUpdated || _.now() - self.recomUpdated >  UPDATE_INTERVAL_FAVORITE) {
                $.ajax({
                    url: API.recommendMerchants(),
                    type: "GET",
                    dataType: "json",
                    success: function (data, textStatus) {
                        self.recomUpdated = _.now();

                        if (data && data.length > 0) {
                            callback && callback(data);
                        } else {
                            callback && callback([]);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == '403' || jqXHR.statusText == "Forbidden") {
                            framework.extension.log("fetchRecommended - Forbidden");
                        }
                    }
                });
            } else {

            }
            if (forceUpdate)
                _.delay(_.bind(self.fetchRecommended, self), UPDATE_INTERVAL_RECOMMENDED, true, callback);
        },

        /* FETCH AND SEND Viewed */

        fetchViewed: function (forceUpdate, callback) {
            var self = this;
            if (!self.isLogin()) return;
            if (!self.viewUpdated || _.now() - self.viewUpdated >  UPDATE_INTERVAL_FAVORITE) {

                $.ajax({
                    url: API.visitedMerchants(),
                    type: "GET",
                    dataType: "json",
                    success: function (data, textStatus) {
                        self.viewUpdated = _.now();

                        if (data && data.length > 0) {
                            callback && callback(data);
                        } else {
                            callback && callback([]);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == '403' || jqXHR.statusText == "Forbidden") {
                            framework.extension.log("fetchNotify - Forbidden");
                        }
                    }
                });
            } else {

            }
            if (forceUpdate)
                _.delay(_.bind(self.fetchViewed, self), UPDATE_INTERVAL_VIEWED, true, callback);
        },

        pushViewedMerchant: function (id) {
            var self = this;
            //post
            /*$.ajax({
                    url: API.visitedMerchants(),
                    type: "POST",
                    data: {
                        "shops_viewed": [
                            {
                                "shop_id": id + "",
                                "date": self.currentDate()
                            }
                        ]
                    },
                    processData: true,
                    success: function (data, textStatus) {
                        if (data && data.numInserted > 0) {
                            framework.extension.log(data + ", " + data.numInserted);
                            _.delay(_.bind(self.fetchViewed, self), 10000, false, function (value) {
                                self.set("viewed", value);
                            });
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == '400' || jqXHR.statusText == "Bad Request") {
                            framework.extension.log("pushViewedMerchant - Forbidden");
                        }
                    }
                }
            );*/
        },

        /*PARSE common request*/

        parse: function (rawResponse) {
            return _.object(
                [
                    "name",
                    "balance",
                    "image",
                    "partnerUrl",
                    "partnerPercent"],
                [
                    rawResponse.name,
                    rawResponse.balance,
                    rawResponse.image,
                    rawResponse.partner_url,
                    rawResponse.partner_percent]
            )
        },

        /*CONVERT timestamp to readable format*/

        convertDate: function (str) {
            if (framework.browser.name == 'Safari') {
                str = str.slice(0, -5);
            }
            var date = new Date(str);
            var allMonth = ["янв.", "фев.", "мар.", "апр.", "май", "июн.", "июл.", "авг.", "сен", "окт.", "ноя.", "дек."];
            var month = date.getMonth();
            return date.getDate() + " " + allMonth[month];
        },

        currentDate: function () {
            var date = new Date();
            return date.toISOString();
        }
    })
    ;