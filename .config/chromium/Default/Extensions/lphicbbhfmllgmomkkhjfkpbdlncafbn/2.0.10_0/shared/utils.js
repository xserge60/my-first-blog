var Utils = (function () {

    var self = {};

    self.getDomain = function (url) {
        var match;

        if (url) {
            match = /^(?:https?:\/\/)?(?:www[1-9]*\.)?([^:\/\n]+)/i.exec(url);
        }

        return match && ('www.' + match[1].toLowerCase());
    };

    self.getStyle = function (element, cssProperty) {
        if (element.currentStyle) {
            return element.currentStyle[cssProperty];
        } else if (window.document.defaultView && window.document.defaultView.getComputedStyle) {
            var style = window.document.defaultView.getComputedStyle(element, '');
            return style ? style[cssProperty] : null;
        } else if (element.style) {
            return element.style[cssProperty];
        }
    };

    self.getListOfAbsoluteElements = function (parent, deep, opt_parentIsAbsolute) {
        var list = [];

        for (
            var i = 0
            ; i < parent.childNodes.length
            ; ++i
        ) {
            if (
                parent.childNodes[i]
                && 1 === parent.childNodes[i].nodeType
            ) {
                var pos = this.getStyle(parent.childNodes[i], 'position');

                if (!opt_parentIsAbsolute && 'absolute' === pos || 'fixed' === pos) {
                    if ('auto' !== this.getStyle(parent.childNodes[i], 'top')) {
                        list.push(parent.childNodes[i]);
                    }
                }

                var abs = ('absolute' === pos || 'fixed' === pos || 'relative' === pos) || opt_parentIsAbsolute;
                if (parent.childNodes[i].childNodes && 0 < deep) {
                    var res = this.getListOfAbsoluteElements(
                        parent.childNodes[i]
                        , deep - 1
                        , abs
                    );

                    if (res && res.length) {
                        list = list.concat(res);
                    }
                }
            }
        }

        return list;
    };

    self.guid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    self.fixedEncodeURIComponent = function (str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    };

    Number.prototype.pad = function (size) {
        var a = String(this).substring(0, 1);
        var s = String(Math.abs(this));
        while (s.length < (size || 2)) {
            s = "0" + s;
        }
        return a == '-' ? '+' + s + ':00' : '-' + s + ':00';
    };

    Object.defineProperty(
                Object.prototype,
                'renameProperty',
                {
                    writable : false, // Cannot alter this property
                    enumerable : false, // Will not show up in a for-in loop.
                    configurable : false, // Cannot be deleted via the delete operator
                    value : function (oldName, newName) {
                        // Do nothing if the names are the same
                            if (oldName == newName || this[oldName] == null) {
                                return this;
                            }
                        // Check for the old property name to
                            // avoid a ReferenceError in strict mode.
                                if (this.hasOwnProperty(oldName)) {
                                this[newName] = this[oldName];
                                delete this[oldName];
                            }
                        return this;
                    }
            }
        );

    return self;

})();
