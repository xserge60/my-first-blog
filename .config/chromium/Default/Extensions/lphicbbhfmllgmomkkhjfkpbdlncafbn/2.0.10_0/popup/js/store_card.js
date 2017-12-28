var StoreCard = Backbone.View.extend({
    el: "#letyshops-content-container-certain-store",
    template: Handlebars.templates.store_card,

    initialize: function (options) {
        var self = this;
        self.options = options;
        self.events = {
            "click #letyshops-store-heart": "onFavoriteClick",
            "click #letyshops-cashback-activate": "onActivate"
            //"click #letyshops-cashback-activated": "onMoveTo"
        };

        $( "body" ).on( "click", "a", function() {
            framework.browser.navigate({
                    tabId: framework.browser.NEWTAB,
                    url:  $( this ).attr('href')
                }
            );
            window.close();
        });
    },

    delegateEvents: function () {
        return Backbone.View.prototype.delegateEvents.apply(this, arguments);
    },

    onActivate: function () {
        var self = this,
            user = self.options.user;
        framework.extension.fireEvent(CLOSE_ALL_NOTIFICATION, {tabId: framework.browser.ALLTABS, data: self.merchant});
        self.options.app.sendGoogleAnalyticsEvent('Extension', (user && user.isLogin()) ? 'Click activate cashback' : 'Click on login', self.merchant.get('title'));
        self.options.app.trigger(CASHBACK_ACTIVATE, self.merchant.id, function () {
            window.close();
        });
    },

    onMoveTo: function () {
        var self = this;
        framework.browser.navigate({
                tabId: framework.browser.NEWTAB,
                url: "http://" + self.merchant.get("domain")
            }
        );
        window.close();
    },

    /*CLICK ON HEART*/

    onFavoriteClick: function (e) {
        //console.log('on fav');
        var self = this;
        var user = self.options.user;
        var $clickedElement = $(e.currentTarget);
        if (user && user.isLogin()) {
            var id = $clickedElement.attr("store-id");
            var isFavorite = $clickedElement.attr('favorite') == "true";
            var allHeartElements = $("i[store-id='" + id + "']");
            self.trigger(POPUP_TO_UPDATE_FAVORITE_STATUS, {id: id, isFavorite: isFavorite});
            if (isFavorite) {
                self.options.app.sendGoogleAnalyticsEvent('Extension', 'Favorite reset', self.merchant.get('title'));
               // user.pushDisliked(id);
            } else {
                self.options.app.sendGoogleAnalyticsEvent('Extension', 'Favorite set', self.merchant.get('title'));
               // user.pushLiked(id);
            }
            _.each(allHeartElements, function (element) {
                $(element).toggleClass("red grey");
                $(element).attr("favorite", isFavorite ? "false" : "true");
                $(element).text(isFavorite ? "favorite_border" : "favorite");
            });
        }
    },

    render: function (merchant) {
        var self = this;
        this.merchant = merchant;
        merchant = merchant.toJSON();
        // if (self.options.app.get('currentMerchant') != (merchant.id)){
        //     //this.merchant.attributes.isActivated = false;
        //     merchant.isActivated = false;
        // }
        self.$el.empty().html(self.template(
            _.extend(
                {merchant: merchant},
                {isLogin: self.options.user.isLogin()}
            ))
        );
        self.$el.parents().find("#letyshops-content-container").css("left", "-1893px");
        self.$el.parent().find("#letyshops-content-container-store").css("opacity", "0.2").animate({
            opacity: 1
        }, 500, "swing", null);
        self.renderFooterState();
        return self;
    },

    renderFooterState: function () {
        var self = this;
        self.trigger(POPUP_UPDATE_FOOTER, {
            stateSpecBtn: FOOTER_LABEL
        });
    }
});