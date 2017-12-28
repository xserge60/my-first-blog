var Merchant = Backbone.Model.extend({
    defaults: {
        "id": "",
        "title": "",
        "aliases": [],
        "cashback": "",
        "cashbackFloated": "",
        "domain": "",
        "pattern": "",
        "logo": "",
        "shortDesc": "",
        "longDesc": "",
        "url": "",
        "activateUrl": "",
        "promo": [],
        "settings": {
            "partnerList": false,
            "browserAction": false,
            "injectNotification": false,
            "injectSuccessNotification": false,
            "injectRewriteNotification": false
        },
        "checkUrlParams": null,
        "checkCookieParams": null,
        /* personal value */
        "isFavorite": false,
        "isRecommended": false,
        "isViewed": false,
        "isActivated": false,
        "isSuppressed": false,
        "userCashback": "",
        "hasPromoActivated": "",
        "rewrite": false,
        /*"savedCookie": null,*/
        "savedParams": [],
        "animated": '',
        'delayActivate' : null
    },

    initialize: function () {
        var self = this;
        self.on(CASHBACK_ACTIVATE, self.activate);
        self.on(PROMO_ACTIVATE, self.activatePromo);
        self.on(MERCHANT_SUPPRESSED, self.suppressed);
    },

    suppressed: function () {
        this.set("isSuppressed", true);
    },

    activate: function () {
        var self = this;
        self.set({"isActivated": true});
        //self.attributes.isActivated = true;
        //this.unset("savedParams");
        self.unset("isSuppressed");
        if(self.get('delayActivate')) {
            clearTimeout(self.get('delayActivate'));
            self.unset('delayActivate');
        }
        self.set('delayActivate', _.delay(_.bind(self.reset, self), UPDATE_INTERVAL_ACTIVATE));
    },

    activatePromo: function (promoId) {
        var self = this;
        //self.set("isActivated", true);
        self.set("hasPromoActivated", promoId + "");
        self.unset("isSuppressed");
        if(self.get('delayActivate')) {
            clearTimeout(self.get('delayActivate'));
            self.unset('delayActivate');
        }
        self.set('delayActivate', _.delay(_.bind(self.reset, self), UPDATE_INTERVAL_ACTIVATE));
        //_.delay(_.bind(self.reset, self), UPDATE_INTERVAL_ACTIVATE);
    },

    reset: function () {
        // console.log("RESET MERCH", this.get('domain'));
        this.unset("isActivated");
        this.unset("isSuppressed");
        //this.unset("savedParams");
        this.unset("savedCookie");
        framework.extension.fireEvent(BUTTON_UPDATE, {tabId: null});
    },

    resetSavedParams: function () {
        this.set("savedParams", []);
    }
});