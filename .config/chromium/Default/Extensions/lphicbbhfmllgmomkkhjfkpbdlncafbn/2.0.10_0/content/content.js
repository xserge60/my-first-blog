;
$(function () {
        _.delay(function () {
            (function initContent() {
                if (typeof framework == "undefined") {
                    _.delay(initContent, 1000);
                } else {
                    Cookie.checkMerchantCookie();
                    Cookie.checkUserCookie();

                    framework.extension.attachEvent(SEND_EXTENSION_INFO, function (event) {
                        addMetaTags(event.data.name, framework.browser.name, event.data.version || EXTENSION_VERSION, location.href, EXTENSION_OWNER_PAGE);
                    });
                    framework.extension.fireEvent(GET_EXTENSION_INFO, {tabId: null});

                    framework.extension.fireEvent(SEND_PAGE_INFO, {
                        tabId: null,
                        data: {referer: document.referrer, url: document.location.href, date: JSON.stringify(new Date())}
                    });

                    if (location.href.match(EXTENSION_OWNER_PAGE)) {
                        var sci = document.cookie.match(new RegExp("(?:^|; )" + 'sci'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                        if (sci) {
                            framework.extension.fireEvent(SEND_GA_CID, {tabId: null, data: decodeURIComponent(sci[1])});
                        }
                    }

                    _.delay(function () {
                        framework.extension.fireEvent(NOTIFICATION_GET_INFO, {tabId: null}, function (data) {
                            // _.delay(function () {
                            if (data && verificationWindow()) {
                                injectCSS();
                                if (data.merchant && !data.merchant.isSuppressed) {
                                    framework.extension.attachEvent(TAB_WAS_CHANGED, function (event) {
                                            console.log('check cookie');
                                            Cookie.checkMerchantCookie();
                                        }
                                    );
                                    var merchant = data && data.merchant,
                                        tab = data && data.tab;
                                    console.log('got merch', merchant);
                                    if (merchant.isActivated && merchant.settings.injectSuccessNotification) {
                                        if (merchant.hasPromoActivated) {
                                            new NotificationPromo({model: merchant, promo: data.promo}).render();
                                            framework.extension.fireEvent(SEND_GOOGLE_ANALYTICS, {
                                                tabId: null,
                                                data: {
                                                    type: 'pageview',
                                                    page: gaPagePopup + 'activate-cashback-sale-done/' + merchant.title + '/'
                                                }
                                            });
                                        } else {
                                            new NotificationActivated({model: merchant}).render();
                                            framework.extension.fireEvent(SEND_GOOGLE_ANALYTICS, {
                                                tabId: null,
                                                data: {
                                                    type: 'pageview',
                                                    page: gaPagePopup + 'activate-cashback-done/' + merchant.title + '/'
                                                }
                                            });
                                            Cookie.checkMerchantCookie();
                                            framework.extension.fireEvent(SEND_ACTIVATION_DATA, {
                                                tabId: null,
                                                data: {
                                                    tab: tab,
                                                    merchant: merchant
                                                }
                                            });
                                        }
                                    } else if (!merchant.isActivated && merchant.settings.injectNotification) {
                                        /* if(merchant.rewrite == true) {
                                         framework.extension.fireEvent(SAW_REWRITE, {
                                         tabId: null,
                                         data: {id: merchant.id}
                                         });
                                         var notification = new Notification({model: merchant}).render();
                                         notification.addWarning();
                                         notification.addInfo();
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
                                         } else {*/
                                        var notification = new Notification({model: merchant}).render();
                                        if (merchant.checkUrlParams.length > 0) {
                                            notification.addInfo();
                                        }
                                        if (merchant.rewrite == true) {
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
                                        } else {
                                            framework.extension.fireEvent(CLEAR_COOKIES, {
                                                tabId: null,
                                                data: {merchant: merchant}
                                            });
                                            framework.extension.fireEvent(SEND_GOOGLE_ANALYTICS, {
                                                tabId: null,
                                                data: {
                                                    type: 'pageview',
                                                    page: gaPagePopup + 'activate-cashback/' + merchant.title + '/'
                                                }
                                            });
                                        }

                                        // }
                                    }
                                } else if (data.merchant) {
                                    //new NotificationSuppressed({model: data.merchant}).render();
                                }
                            }
                            //}, 500);
                        });
                    }, 1000);

                    /*framework.extension.fireEvent(USER_NOTIFY_GET_INFO, {tabId: null}, function (data) {
                     if (data && data.notifications && data.notifications.length) {
                     _.each(data.notifications, function (notification, index) {
                     new UserNotification().render(index, notification);
                     });
                     }
                     });*/

                    /*framework.extension.attachEvent(SHOW_NOTIFICATION_BY_FORCE, function (event) {
                     var merchant = event.data && event.data.merchant;
                     if (merchant) {
                     if (!merchant.isActivated && merchant.settings.injectNotification) {
                     var notification = new Notification({model: merchant}).render();
                     notification.addWarning();
                     notification.addInfo();
                     framework.extension.fireEvent(SEND_GOOGLE_ANALYTICS, {
                     tabId: null,
                     data: {
                     type: 'pageview',
                     page: gaPagePopup + 'activate-cashback-reactivate/' + merchant.title + '/'
                     }
                     });
                     }
                     }
                     });*/

                    framework.extension.attachEvent(CLOSE_ALL_NOTIFICATION, function (event) {
                        if (location.host.indexOf(event.data.pattern) > -1) {
                            $('body #letyshops-notification-container').fadeOut(400);
                        }
                    });

                    function verificationWindow() {
                        if ($(window).width() < 700) return false;
                        if (framework.browser.name === 'Chrome') {
                            if (location.href.indexOf('http') === 0 && (window.locationbar && window.locationbar.visible) || !window.locationbar) {
                                return true;
                            }
                        } else if ((window.menubar && window.menubar.visible) || !window.menubar) {
                            return true;
                        }
                        return false;
                    }
                }
            })();
        }, 200);
    }
);