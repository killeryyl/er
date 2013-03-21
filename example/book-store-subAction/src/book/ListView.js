define(
    function(require) {
        require('er/tpl!./list.tpl');

        var View = require('er/View');

        function BookListView() {
            View.apply(this, arguments);
        }

        function buyBook(e) {
            var isbn = $(e.target).closest('.book-info').attr('data-isbn');
            this.fire('buy', { isbn: isbn });
        }

        function search(e) {
            var query = {};
            query[e.target.getAttribute('data-filter')] = e.target.innerHTML;
            this.fire('search', query);
        }

        function flip(e) {
            var page = e.target.getAttribute('data-page');
            if (/(\+|\-)/.test(page)) {
                page = parseInt(page) + (RegExp.$1 === '+' ? 1 : -1);
            }
            this.fire('flip', { page: page });
        }

        BookListView.prototype.template = 'bookList';

        BookListView.prototype.enterDocument = function() {
            var util = require('er/util');
            $('#book-list')
                .on('click', '.buy', util.bindFn(buyBook, this))
                .on('click', '.summary a', util.bindFn(search, this));
            $('#list-page').on('click', ':not(.disable)'
                , util.bindFn(flip, this));
            $('#all-list').click(util.bindFn(search, this));
        };

        require('er/util').inherits(BookListView, View);

        return BookListView;
    }
)
;