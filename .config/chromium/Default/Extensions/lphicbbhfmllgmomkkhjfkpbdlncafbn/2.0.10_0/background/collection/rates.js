var Rates = Backbone.Collection.extend({
    model: Rate,
    url: API.userCodes(),

    initialize: function () {
        var self = this;
    },

    fetch: function (force) {
        var self = this,
            _callee = arguments.callee;
        if (!self.codesUpdated || _.now() - self.codesUpdated >  UPDATE_INTERVAL_CODES || force) {
            Backbone.Collection.prototype.fetch.call(self, {reset: true});
        } else {
            self.codesUpdated = _.now();
        }
        _.delay(_.bind(self.fetch, self), UPDATE_INTERVAL_CODES);
    },

    parse: function (response) {
        if (response != null) {
            console.log("RATES RESPONSE", response);
            return response;
        } else {
            return null;
        }
    }
});