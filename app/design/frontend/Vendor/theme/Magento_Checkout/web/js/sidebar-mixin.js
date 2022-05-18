define(['jquery'], function ($) {
    'use strict';

    var sidebarWidgetMixin = {
        _removeItem: function (elem) {
            var itemId = elem.data('cart-item');
            console.log('I am deleted from WIDGET')

            this._ajax(this.options.url.remove, {
                'item_id': itemId
            }, elem, this._removeItemAfter);
        },
    };

    return function (targetWidget) {
        $.widget('mage.sidebar', targetWidget, sidebarWidgetMixin);
        return $.mage.sidebar;
    };
});
