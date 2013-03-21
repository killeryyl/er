define(
    function(require) {
        require('er/tpl!./index.tpl');

        var View = require('er/View');
        var util = require('er/util');

        function IndexView() {
            View.apply(this, arguments);
        }

        function search() {
            var keywords = document.getElementById('keywords').value;
            this.fire('search', { keywords: keywords });
        }
        
        function order(e) {
            var orderField = e.target.getAttribute('data-order');
            this.fire('search', { order: orderField });
        }

        IndexView.prototype.template = 'index';

        IndexView.prototype.enterDocument = function() {
            $('#book-list-order').on('click', 'a', util.bindFn(order, this));
            $('#submit-search').click(util.bindFn(search, this));
        };

        IndexView.prototype.showBoughtTip = function(isbn) {
            require('book/effect').showBoughtTip.call(this, isbn);
        };

        util.inherits(IndexView, View);

        return IndexView;
    }
);