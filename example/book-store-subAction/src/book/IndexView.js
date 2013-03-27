define(
    function(require) {
        require('er/tpl!./index.tpl');

        var View = require('er/View');
        var util = require('er/util');

        function IndexView() {
            View.apply(this, arguments);
        }

        IndexView.prototype.template = 'index';

        IndexView.prototype.showBoughtTip = function(isbn) {
            require('book/effect').showBoughtTip.call(this, isbn);
        };

        util.inherits(IndexView, View);

        return IndexView;
    }
);