;
(function () {
 injectCSS();
})();

$(function init() {
    if (typeof framework === "undefined") {          
        setTimeout(init, 100);
        return;
    }     
    window.popup = new Popup({bg: framework.extension.getBackgroundPage()});     
});


window.Popup = Backbone.Model.extend({

    initialize: function () {
        var self = this;
        var bg = self.get("bg");

        if (BROWSER_NAME_FF == framework.browser.name) {
            var defaultWidth = $('#letyshops-content-container').css("width");
            $('#letyshops-content-container').attr('style', 'width: ' + (parseInt(defaultWidth) + 6) + 'px !important');
        }

        _.extend(this, _.object(
            [
                "app",
                "user",
                "merchants",
                "offers"
            ],
            [
                bg.application,
                bg.application.user,
                bg.application.merchants,
                bg.application.offers
            ]
        ));

        console.log(self.user, self.merchants, self.offers);

        // self.user.fetchFavorite(false, function (value) {
        //     self.user.set("favorites", value);
        // });

        self.user.fetch();

        self.app.onPopupFirstOpening();

        // create and render main components of popup           

        self.footer = new Footer().render();
        self.storesTab = new StoresTab({
            model: self.merchants,
            user: self.user
        }).render(null, null, true);
        self.offersTab = new OffersTab({
            app: self.app,
            model: self.merchants,
            user: self.user
        }).render();
        self.notificationTab = new NotificationTab();
        self.invitationTab = new InvitationTab();
        self.header = new Header().render(self.user);
        console.log('finish assign render');

        // Assign listeners for popup event
        // favorite listener
        self.storesTab.on(POPUP_TO_UPDATE_FAVORITE_STATUS, _.bind(self.onFavoriteClick, self));
        //self.offersTab.on(POPUP_TO_UPDATE_FAVORITE_STATUS, _.bind(self.onFavoriteClick, self));

        self.header.on(POPUP_TO_NOTIFICATION_TAB, _.bind(self.toNotificationTab, self));
        self.header.on(POPUP_TO_INVITATION_TAB, _.bind(self.toInvitationTab, self));
        self.storesTab.on(POPUP_TO_MERCHANT_CARD, _.bind(self.toStoreCard, self));
        self.header.on(POPUP_UPDATE_FOOTER, _.bind(self.onListScrolls, self));
        self.notificationTab.on(POPUP_PUSH_REVIEWED_NOTIFY, _.bind(self.user.pushReviewedNotifications, self.user));
        self.storesTab.on(POPUP_UPDATE_FOOTER, _.bind(self.onListScrolls, self));
        self.storesTab.on(POPUP_INITIALIZE_FOOTER_FOR_STORES, _.bind(self.onAppropriatingState, self));
        self.offersTab.on(POPUP_UPDATE_FOOTER, _.bind(self.onListScrolls, self));
        self.offersTab.on(POPUP_INITIALIZE_FOOTER_FOR_OFFERS, _.bind(self.onAppropriatingState, self));
        console.log('finish event handler');

        self.listenTo(self.user, "change:token", function (model, value, options) {
            self.header.render(model)
        });
        self.listenTo(self.user, "change:balance", function (model, value, options) {
            self.header.render(model)
        });
        self.listenTo(self.user, "change:notifications", function (model, value, options) {
            self.header.render(model)
        });
        self.listenTo(self.app, "change:currentMerchant", function (model, value, options) {
            self.toStoreCard(value);
        });
        console.log('finish listener handler');
        var currentMercantId = self.app.get("currentMerchant"),
            currentPopupTab = self.app.get("currentPopupTab");
        if (currentMercantId) {
            self.app.sendGoogleAnalyticsPageView(gaPageShops + self.app.merchants.selectById(currentMercantId).get('title') + '/');
            self.toStoreCard(currentMercantId);
        } else if (currentPopupTab == 'stores') {
            self.app.sendGoogleAnalyticsPageView(gaPageShops);
        }
        setInterval(function(){
            _.each($('.letyshops-stores-tab-item'), function(element){
                if($(element).find('.letyshops-store-cashback-default').text().replace('до ','') == $(element).find('.letyshops-store-cashback-user').text().replace('до ','') ) {
                    $(element).find('.letyshops-store-cashback-default').hide()
                }
            });
        }, 500);

        console.log('finish init');
    },

    toInvitationTab: function () {
        var self = this;
        self.invitationTab.render(self.user.toJSON());
        $('#letyshops-referral-box-link').bind('copy', function(e) {
            self.app.sendGoogleAnalyticsEvent('Extension', 'Invite friend', 'Copy Link Keyboard');
        });
    },

    toNotificationTab: function () {
        var self = this;
        self.notificationTab.render(self.user.get("notifications"));
    },

    toStoreCard: function (id) {
        var self = this;
        var merchant = self.merchants.selectById(id);
        if (self.storeCard == null) {
            self.storeCard = new StoreCard({
                app: self.app,
                user: self.user
            });
            self.storeCard.on(POPUP_TO_UPDATE_FAVORITE_STATUS, _.bind(self.onFavoriteClick, self));
            self.storeCard.on(POPUP_UPDATE_FOOTER, _.bind(self.onListScrolls, self));
        }
        if (merchant != null) {
            self.header.switchOffTabs(true);
            self.storeCard.render(merchant);
        }
    },

    onFavoriteClick: function (data) {
        // console.log('onfavoriteclick');
        var self = this;
        var merchant = self.merchants.selectById(data.id);
        merchant.set("isFavorite", !data.isFavorite);
        self.app.updateFavoriteStatusInContent(data);
    },

    onListScrolls: function (data) {
        var self = this;
        self.footer.render(data);
    },

    onAppropriatingState: function (data) {
        var self = this;
        self.header.toAppropriateOfferState(data)
    }
});













