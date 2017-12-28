var StoresTab = Backbone.View.extend({
    el: "#letyshops-content-container-store",
    template: Handlebars.templates.stores_tab,
    isRenderedSearchRequest: false,

    initialize: function (options) {
        var self = this;
        self.app = framework.extension.getBackgroundPage().application;
        self.options = options;
        self.events = {
            "click #letyshops-stores-tab-item": "onStoreClick",
            "click #letyshops-stores-tab-item-special": "onSpecialClick",
            "click #letyshops-store-heart": "onFavoriteClick",
            "click #letyshops-search-bar-btn": "onSearch",
            "input #letyshops-search-bar": "onSearch"
            // "keyup #letyshops-search-bar": function (e) {
            //     var searchTerm = $(e.currentTarget).val().trim();
            //     if (e.which == '13' || (searchTerm.length >= 1 && !e.ctrlKey && e.which != '17')) {
            //         self.onSearch(e.currentTarget);
            //         return false;
            //     } else if (!searchTerm.length) {
            //         self.onSearch(e.currentTarget);
            //     }
            // }
        };
        self.listenTo(self.model, "reset", function () {
            if (!self.isRenderedSearchRequest)
                self.render(null, null, false)
        });
        self.listenTo(self.model, POPUP_MERCHANTS_UPDATE, function (isFavorite) {
            if (!self.isRenderedSearchRequest)
                self.render(null, null, false)
        });
    },

    delegateEvents: function () {
        return Backbone.View.prototype.delegateEvents.apply(this, arguments);
    },

    /*HANDLER SEARCH REQUEST*/

    onSearch: function (target) {
        //console.log('onSearch');
        var self = this;
        var matchedModels;
        var searchEvent = {
            term: self.$el.find('#letyshops-search-bar').val().trim(),
            caretStart: target.target.selectionStart || 0,
            caretEnd: target.target.selectionEnd || 0
        };
        if (self.lastTerm == searchEvent.term) return;
        if (searchEvent.term.length >= 1) {
            $('#letyshops-search-bar').val(searchEvent.term);
            matchedModels = self.model.selectByAliasNew(searchEvent.term);
            if (matchedModels && matchedModels.length && matchedModels.length > 0) {
                self.render({
                    merchants: matchedModels
                }, searchEvent, true);
            } else {
                self.render({
                    merchants: null
                }, searchEvent, true);
            }
            $('#letyshops-search-bar').val(searchEvent.term).on('focusout', function(event){
                self.app.sendGoogleAnalyticsEvent('Extension', 'Search', searchEvent.term, matchedModels ? matchedModels.length : '0');
            });
         } else {
            self.render(null, searchEvent, true);
            self.$el.find('#letyshops-search-bar').attr('placeholder', 'Искать магазины');
        }
    },

    /*CLICK ON ITEM STORE LIST*/

    onStoreClick: function (e) {
        var self = this;
        var $targetElement = $(e.target);
        if (!$targetElement.hasClass("letyshops-store-heart"))
            if (!($targetElement.prop("tagName") == "I")) {
                var $clickedElement = $(e.currentTarget);
                if ($clickedElement.attr("store-id") != null) {
                    self.app.sendGoogleAnalyticsPageView(gaPageShops + self.app.merchants.selectById($clickedElement.attr("store-id")).get('title') + '/');
                    self.trigger(POPUP_TO_MERCHANT_CARD, $clickedElement.attr("store-id"));
                }
            }
    },

    /*CLICK ON FLOATING BUTTON*/

    onSpecialClick: function () {
        framework.browser.navigate({
                tabId: framework.browser.NEWTAB,
                url: API.allStoresPage()
            }
        );
        window.close();
    },

    /*CLICK ON HEART*/

    onFavoriteClick: function (e) {
        // console.log('on favorite');
        var self = this;
        var user = self.options.user;
        var $clickedElement = $(e.currentTarget);
        if (user && user.isLogin()) {
            var id = $clickedElement.attr("store-id"),
                merchant = self.app.merchants.selectById(id);
            var isFavorite = $clickedElement.attr('favorite') == "true";
            var allHeartElements = $("i[store-id='" + id + "']");
            self.trigger(POPUP_TO_UPDATE_FAVORITE_STATUS, {id: id, isFavorite: isFavorite});
            //isFavorite ? user.pushDisliked(id) : user.pushLiked(id);
            if (isFavorite) {
                self.app.sendGoogleAnalyticsEvent('Extension', 'Favorite reset', merchant.get('title'));
                //user.pushDisliked(id);
            } else {
                self.app.sendGoogleAnalyticsEvent('Extension', 'Favorite set', merchant.get('title'));
                //user.pushLiked(id);
            }
            _.each(allHeartElements, function (element) {
                $(element).toggleClass("red grey");
                $(element).attr("favorite", isFavorite ? "false" : "true");
                $(element).text(isFavorite ? "favorite_border" : "favorite");
            });
        }
    },

    /*HANDLER LOGIC OF FLOATING BUTTON*/

    onScrollList: function () {
        // console.log('on scroll');
        var self = this;
        var listHeight = 40;
        var verticalPosition = self.$el.find("#letyshops-scroll-list").scrollTop();
        _.each(self.$el.find(".letyshops-stores-tab-wrapper"), function (wrapper) {
            listHeight += $(wrapper).height();
        });
        // console.log(verticalPosition);
        if (listHeight - verticalPosition > 300) {
            self.trigger(POPUP_UPDATE_FOOTER, {
                stateSpecBtn: FOOTER_ALL_STORES
            });
        } else if (listHeight - verticalPosition < 300) {
            self.trigger(POPUP_UPDATE_FOOTER, {
                stateSpecBtn: FOOTER_LABEL
            });
        }
    },

    /*RENDER*/

    render: function (data, searchEvent, updateFooterNow) {        
        var self = this;
        var isLogin = self.options.user.isLogin();
        if (!data) {
            if (!isLogin) {
                data = {
                    merchants: self.model.select50First()
                }
            } else {
                var viewed = self.model.selectViewed(),
                    order = self.options.user.get('viewed'),
                    sortedViewed = [];
                _.each(order, function(id) {
                    _.each(viewed, function(model) {
                        if(model.id == id) {
                            sortedViewed.push(model)
                        }
                    })
                });
                var recommended = self.model.selectRecommended(),
                    order = self.options.user.get('recommended'),
                    sortedRecommended = [];
                //console.log(recommended);
                //console.log(order);
                _.each(order, function(id) {
                    _.each(recommended, function(model) {
                        if(model.id == id) {
                            sortedRecommended.push(model);
                            //console.log(sortedRecommended);
                        }
                    })
                });
                if (sortedViewed || sortedRecommended) {
                    data = {
                        merchants: {
                            viewed: sortedViewed,
                            recommended: sortedRecommended
                        }
                    }                    
                } else {
                    data = {
                        merchants: self.model.select50First()
                    };
                }
            }
            self.isRenderedSearchRequest = false;
        } else {
            self.isRenderedSearchRequest = true;
        }
        console.log("RENDER STORES", data);
        // if((data.merchants[0] && data.merchants[0].userCashback  == '') || (data.merchants.viewed[0] && data.merchants.viewed[0].userCashback == '')) {
        //     console.log('SMTH WRONG');
        //     self.model.setPersonalCashback(self.user.rates.toJSON());
        //     self.render(arguments);
        //     return self;
        // }

        data = _.extend(data, {isFilled: data.merchants && (data.merchants.length > 0 || data.merchants.recommended.length > 0)},
            {isLogin: isLogin},
            {isRenderedSearchRequest: self.isRenderedSearchRequest});
        /*if(searchEvent) {

        } else {*/
            self.$el.empty().html(self.template(data));

            // handlers search bar and footer bar behaviour after update tab
            searchEvent && self.renderSearchBar(searchEvent);
        /*}*/
        self.renderFooterState(updateFooterNow);
        return self;
    },

    renderSearchBar: function (searchEvent) {
        var self = this;
        self.lastTerm = searchEvent.term;
        var searchBar = document.getElementById('letyshops-search-bar');
        //$(searchBar).focus();
        if (searchEvent.term && searchEvent.term.length >= 1) self.$el.find('#letyshops-search-bar').val(searchEvent.term);
        if(searchBar.createTextRange) {
            // console.log('textrange');
            var range = searchBar.createTextRange();
            range.collapse(true);
            range.moveEnd('character', searchEvent.caretEnd);
            range.moveStart('character', searchEvent.caretStart);
            range.select();
        } else {
            // console.log('selection');
            //if(framework.browser.name == 'Firefox') {
                searchBar.focus();
            //}
            _.delay(function(){
                searchBar.selectionStart = searchEvent.caretStart;
                searchBar.selectionEnd = searchEvent.caretEnd;
            },0);
        }
    },

    /*HANDLER OF FOOTER CONTENT*/

    renderFooterState: function (updateNow) {
        var self = this;
        var listHeight = 40;
        _.each(self.$el.find(".letyshops-stores-tab-wrapper"), function (wrapper) {
            listHeight += $(wrapper).height();
        });
        if (listHeight > 500) {
            self.$el.find("#letyshops-scroll-list").on("scroll", _.bind(self.onScrollList, self));
            if (updateNow)
                self.trigger(POPUP_UPDATE_FOOTER, {
                    stateSpecBtn: FOOTER_ALL_STORES
                });
            setTimeout(_.bind(function () {
                self.trigger(POPUP_INITIALIZE_FOOTER_FOR_STORES, {
                    tab: "stores",
                    stateSpecBtn: FOOTER_ALL_STORES
                });
            }, self),0);
        } else {
            if (updateNow)
                self.trigger(POPUP_UPDATE_FOOTER, {
                    stateSpecBtn: FOOTER_LABEL
                });
            setTimeout(_.bind(function() {
                self.trigger(POPUP_INITIALIZE_FOOTER_FOR_STORES, {
                    tab: "stores",
                    stateSpecBtn: FOOTER_LABEL
                })
            },self), 0);
        }
    }
});