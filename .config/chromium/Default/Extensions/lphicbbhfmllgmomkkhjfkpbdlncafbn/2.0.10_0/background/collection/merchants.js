var Merchants = Backbone.Collection.extend({
    model: Merchant,
    flag: "merchants",
    updateFlag: "merchantsLastUpdated",

    updateFlagRates: "updateFlagRates",
    timerRates: null,

    url: API.merchants,

    initialize: function () {
        var self = this;
        self.on("reset", function () {
            self.save();
        });
    },

    resetAll: function () {
        var self = this;
        _.each(self.models, function (merchant) {
            merchant.reset();
        });
    },

    toJSON: function (models) {
        if (models && models.length > 0) {
            return _.map(models, function (model) {
                    return model && model.toJSON();
                }
            );
        } else {
            if (this.models && this.models.length > 0) {
                return _.map(this.models, function (model) {
                        return model && model.toJSON();
                    }
                );
            } else {
                return null;
            }
        }
    },

    setPersonalCashback: function (rates) {
        var self = this;

        if (!self.ratesAdded) {
            setTimeout(_.bind(function () {
                self.setPersonalCashback(rates);
            }, self), 100);
        } else {

            if (rates && rates[0] && _.isArray(rates[0])) {
                rates = rates[0];
            }

            if (self.models.length == 0) return;

            var flag = true;
            _.each(self.models, function(merchat){
                if(!merchat.get('rate') && merchat.get('rate') !== 0) {
                    flag = false;
                    console.log("FLAG FLASE", merchat);
                }
            });

            if(!flag) {
                console.warn('setPersonalCashback failed');
                self.fetchRates(true);
            } else {
                // console.log('setPersonalCashback', rates);
                _.each(rates, function (code) {
                    // console.info(code);
                    if (code.shop_ids && (code.shop_ids.length > 0 || Object.keys(code.shop_ids).length > 0)) {
                        // console.info('HAVE shops.ids', code);

                        _.each(self.models, function (merchant) {
                            if (((!_.contains(code.shop_ids, merchant.get('id')) && code.exclude_shop_ids) || (_.contains(code.shop_ids, merchant.get('id')) && !code.exclude_shop_ids)) && (!merchant.get('bonus') || merchant.get('bonus') < code.bonus)) {
                                // console.info(code);
                                var cashback = ((+merchant.get('rate')) * (((+code.bonus) + 100) / 100)).toFixed(2);
                                // console.log(cashback);
                                var formatted = (((+cashback * 100) / 100) + '' + merchant.get('suffix')).replace('.', ',');
                                // console.info(formatted);
                                merchant.set("userCashback", formatted);

                                merchant.set({bonus: code.bonus});
                                console.warn("BINGO", merchant)
                            }
                        });

                    } else if (code.bonus) {
                        // console.info('doesnt HAVE shops.ids', code);

                        _.each(self.models, function (merchant) {
                            if (!merchant.get('bonus') || merchant.get('bonus') < code.bonus) {
                                // console.info(code);
                                var cashback = ((+merchant.get('rate')) * (((+code.bonus) + 100) / 100)).toFixed(2);
                                // console.log(cashback);
                                var formatted = (((+cashback * 100) / 100) + '' + merchant.get('suffix')).replace('.', ',');
                                // console.info(formatted);
                                merchant.set("userCashback", formatted);

                                merchant.set({bonus: code.bonus});
                            }
                        });

                    }
                });

                // console.info('CLEAN');
                _.each(self.models, function (merchant) {
                    if (!merchant.get('bonus')) {
                        merchant.set({userCashback: merchant.get('cashback')});
                    }
                });
            }
        }

        // _.each(rates, function (code) {
        //     if (code.shop_ids && (code.shop_ids.length > 0 || Object.keys(code.shop_ids).length > 0)) {
        //         _.each(self.models, function (merchant) {
        //             if (((!_.contains(code.shop_ids, merchant.get('id')) && code.exclude_shop_ids) || (_.contains(code.shop_ids, merchant.get('id')) && !code.exclude_shop_ids)) && merchant.get('bonus') < code.bonus) {
        //                 var cashback = (+merchant.get('rate') + (+merchant.get('rate') * (+code.bonus) / 100)).toFixed(2);
        //                 merchant.set("userCashback", (((+cashback * 100) / 100) + '' + merchant.get('suffix')).replace('.', ','));
        //
        //                 merchant.set({bonus: code.bonus});
        //
        //                 console.warn("BINGO", merchant)
        //             } else {
        //                 // merchant.set("userCashback", merchant.get("cashback"));
        //             }
        //         });
        //     } else if (code.bonus) {
        //         console.warn("PREMIUM", code.bonus);
        //         _.each(self.models, function (merchant) {
        //             if (merchant.get('bonus') < code.bonus) {
        //                 var cashback = (+merchant.get('rate') + (+merchant.get('rate') * (+code.bonus) / 100)).toFixed(2);
        //                 console.log(cashback);
        //                 merchant.set("userCashback", (((+cashback * 100) / 100) + '' + merchant.get('suffix')).replace('.', ','));
        //
        //                 merchant.set({bonus: code.bonus});
        //             }
        //         });
        //     }
        // });
        //
        // _.each(self.models, function (merchant) {
        //     if (merchant.get('userCashback').indexOf('NaN') !== -1) {
        //         merchant.set("userCashback", merchant.get("cashback"));
        //     }
        // });

        // _.each(self.models, function (merchant) {
        //     var rate = _.findWhere(rates, {mId: merchant.id + ""});
        //     if (rate) {
        //         merchant.set("userCashback", rate.cashback || rate.cashbackDefault);
        //         merchant.set("cashbackFloated", rate.cashbackFloated);
        //     } else {
        //         merchant.set("userCashback", merchant.get("cashback"));
        //     }
        // })
    },

    setFavorites: function (ids) {
        var self = this;
        if (self.models.length == 0) return;
        _.each(self.models, function (merchnat) {
            merchnat.set("isFavorite", false);
        });
        _.each(ids, function (id) {
            self.get(id + "") && self.get(id + "").set("isFavorite", true);
        })
        self.trigger(POPUP_MERCHANTS_UPDATE);
    },

    setRecommended: function (ids) {
        var self = this;
        if (self.models.length == 0) return;
        _.each(self.models, function (merchnat) {
            merchnat.set("isRecommended", false);
        });
        _.each(ids, function (id) {
            self.get(id + "") && self.get(id + "").set("isRecommended", true);
        })
        self.trigger(POPUP_MERCHANTS_UPDATE);
    },

    setViewed: function (ids) {
        var self = this;
        if (self.models.length == 0) return;
        _.each(self.models, function (merchnat) {
            merchnat.set("isViewed", false);
        });
        _.each(ids, function (id) {
            self.get(id + "") && self.get(id + "").set("isViewed", true);
        })
        self.trigger(POPUP_MERCHANTS_UPDATE);
    },

    save: function () {
        Storage.set(this.flag, this.toJSON());
    },

    fetch: function () {
        if (!arguments[0]) {
            arguments[0] = {};
            arguments.length = 1;
        }
        var self = this,
            _arguments = arguments,
            _options = arguments[0],
            _callee = arguments.callee;  // it is reference on the function

        Storage.get(self.updateFlag, function (timeLastUpdated) {
                if (!timeLastUpdated || _.now() - timeLastUpdated > UPDATE_INTERVAL_MERCHANT) {
                    var _success = _options.success;
                    var _error = _options.error;
                    _options.success = function () {
                        Storage.set(self.updateFlag, _.now());
                        self.fetchRates();
                        _success && _success.apply(self, arguments);
                    };
                    _options.reset = true;
                    Backbone.Collection.prototype.fetch.apply(self, _arguments).always(function () {
                        _options.success = _success;
                        _options.error = _error;
                    });
                } else {
                    Storage.get(self.flag, function (merchants) {
                        if (merchants && _.isString(merchants)) {
                            merchants = JSON.parse(merchants);
                        }
                        if (_.isObject(merchants)) {
                            self.reset(merchants);
                            self.fetchRates();
                        } else if (!merchants) {
                            Storage.set(self.updateFlag, 0);
                            _callee.apply(self, _arguments);
                        }
                    });
                }
                if (!!self.fetchTimeout) {
                    window.clearTimeout(self.fetchTimeout);
                    self.fetchTimeout = null;
                }
                self.fetchTimeout = window.setTimeout(function () {
                    _callee.apply(self, _arguments);
                }, UPDATE_INTERVAL_MERCHANT);
            }
        );
    },

    fetchRates: function (force) {
        var self = this;
        if (!self.timerRates || _.now() - self.timerRates > UPDATE_INTERVAL_MERCHANT || force) {
            $.ajax({
                    url: API.cashRates(),
                    type: "get",
                    success: _.bind(function (data, textStatus) {
                        Storage.set(self.updateFlagRates, data);
                        self.addRates(data);
                    }, self),
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.error(jqXHR, textStatus, errorThrown);
                    }
                }
            );
        } else {
            Storage.get(self.updateFlagRates, function (data) {
                self.addRates(data);
            });
        }
    },

    addRates: function (data) {
        var self = this;
        _.each(data, function (rate) {
            var merchant = self.findWhere({id: rate.id});
            // console.log(merchant);
            if (merchant) {
                merchant.set(
                    rate.renameProperty('a', 'rate')
                        .renameProperty('b', 'rate_formated')
                        .renameProperty('c', 'is_floating')
                        .renameProperty('d', 'suffix')
                        .renameProperty('e', 'type')
                );
                merchant.set({cashback: rate.rate_formated});
                if (rate.is_floating && rate.is_floating > 0) {
                    merchant.set({cashbackFloated: true});
                }
            }
            self.timerRates = _.now();
        });
        self.ratesAdded = true;
        self.save()
    },

    parse: function (response) {
        response = _.filter(response, function (merchant) {
            return !!merchant.id && !!merchant.c;
        })
        return _.map(response, function (merchant) {
            return _.object(
                [
                    "id",
                    "title",
                    "aliases",
                    "cashback",
                    "cashbackFloated",
                    "domain",
                    "pattern",
                    "logo",
                    "shortDesc",
                    "longDesc",
                    "url",
                    "activateUrl",
                    "promo",
                    "checkUrlParams",
                    "checkCookieParams",
                    "countDomainLevel",
                    "settings"
                ],
                [
                    merchant.id,
                    merchant.a,
                    merchant.h,
                    merchant.i,
                    merchant.j,
                    merchant.c,
                    merchant.c,
                    merchant.d,
                    merchant.e,
                    merchant.f,
                    merchant.b,
                    merchant.m,
                    merchant.k,
                    merchant.l,
                    merchant.n,
                    merchant.c.match(/\./gi) != null ? merchant.c.match(/\./gi).length : 0,
                    // merchant.check_cookie_params,
                    _.isArray(merchant.g) ? _.object([
                        "partnerList",
                        "browserAction",
                        "injectNotification",
                        "injectSuccessNotification",
                        "injectRewriteNotification"
                    ], [
                        _.indexOf(merchant.g, "partner_list") != -1,
                        _.indexOf(merchant.g, "browser_action") != -1,
                        _.indexOf(merchant.g, "inject_notification") != -1,
                        _.indexOf(merchant.g, "inject_success_notification") != -1,
                        _.indexOf(merchant.g, "inject_rewrite_notification") != -1
                    ]) : {}
                ]
            );
        });
    },

    /*METHODS FOR SELECT BY CONDITION*/

    selectByDomain: function (domain) {
        var self = this;
        var regExp = new RegExp(domain);
        var merchants = self.find(function (merchant) {
            return regExp.test(merchant.get("pattern"));
        });
        if (!merchants) {
            var sortedMerchants = self.sortBy(function (merchant) {
                var countDomainLevel = merchant.get("countDomainLevel");
                return 10 - countDomainLevel;
            });
            merchants = _.find(sortedMerchants, function (merchant) {
                return (domain.lastIndexOf(merchant.get("pattern")) == 0 && domain.length == merchant.get("pattern").length) ||
                    (domain.lastIndexOf(merchant.get("pattern")) > 0 && domain.charAt(domain.lastIndexOf(merchant.get("pattern")) - 1) == ".");
            });
        }
        return merchants;
    },

    selectById: function (id) {
        return this.findWhere({"id": +id});
    },

    getInfoForOffer: function (id) {
        var merchant = this.findWhere({"id": +id});
        if (!merchant) return null;
        return {
            mId: merchant.get("id"),
            logo: merchant.get("logo"),
            cashback: merchant.get("userCashback") ? merchant.get("userCashback") : merchant.get("cashback"),
            cashbackFloated: merchant.get("cashbackFloated"),
            isFavorite: merchant.get("isFavorite"),
            url: merchant.get("url"),
            activateUrl: merchant.get("activateUrl")
        }
    },

    selectFavorites: function () {
        var self = this;
        return this.where({"isFavorite": true});
    },

    selectRecommended: function () {
        var self = this;
        var recommendedList = self.where({"isRecommended": true});
        return recommendedList.length > 0 ? self.toJSON(recommendedList) : [];
    },

    selectViewed: function () {
        var self = this;
        var viewedList = self.where({"isViewed": true});
        return viewedList.length > 0 ? self.toJSON(viewedList) : [];
    },

    select50First: function (exceptIds) {
        var models = _.filter(this.models, function (merchant) {
            return merchant.get("settings").partnerList && !_.contains(exceptIds, merchant.id);
        });
        if (models && models.length) {
            if (models.length > 50) models.length = 50;
            return this.toJSON(models);
        } else {
            return null;
        }
    },

    selectRandom50: function (exceptIds) {
        var models = _.filter(this.models, function (merchant) {
            return merchant.get("settings").partnerList && !_.contains(exceptIds, merchant.id);
        });
        if (models && models.length) {
            models = _.shuffle(models);
            if (models.length > 50) models.length = 50;
            return this.toJSON(models);
        } else {
            return null;
        }
    },

    selectByAlias: function (value) {
        var self = this;
        if (_.isString(value)) {
            var models = self.filter(function (merchant) {
                var equals = false;
                merchant.get("aliases") && merchant.get("aliases").length > 0 && _.each(merchant.get("aliases"), function (alias) {
                    if (alias.toLowerCase().indexOf(value.toLowerCase()) != -1) {
                        equals = true;
                    }
                });
                return equals;
            });
            if (models && models.length)
                return self.toJSON(models);
            else
                return null;
        } else
            return null;
    },

    selectByAliasNew: function (value) {
        var self = this;
        if (_.isString(value)) {
            var models = self.filter(function (merchant) {
                var equals = false;
                merchant.get("aliases") && merchant.get("aliases").length > 0 && _.each(merchant.get("aliases"), function (alias) {
                    if (alias.toLowerCase().indexOf(value.toLowerCase()) != -1) {
                        equals = true;
                    }
                });
                return equals;
            });
            if (models && models.length) {
                models = self.toJSON(models);
                models = _.sortBy(models, function (merchant) {
                    var orderIndex = 100;
                    _.each(merchant.aliases, function (alias) {
                        var currentIndex = alias.toLowerCase().indexOf(value.toLowerCase());
                        if (orderIndex > currentIndex && currentIndex != -1) orderIndex = currentIndex;
                    });
                    return orderIndex;
                });
                return models;
            }
            else
                return null;
        } else
            return null;
    }
});