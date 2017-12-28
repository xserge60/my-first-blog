var Tab = Backbone.Model.extend({

    defaults: {
        id: "",
        domain: "",
        url: "",
        history: [],
        interstitialPageId: "",
        animation: false
    },

    initialize: function () {
        var self = this;
        this.reset = _.debounce(this.immediateReset, 20 * 1000);
    },

    immediateReset: function () {
        console.log('reset');
        var self = this;
        _.delay(function() {
            self.unset('state');
            self.unset('interstitialPageId');
            self.unset('activatingMerchantId');
        },1500);
    }
});