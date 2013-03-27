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
            var keywords = $('#keywords').val();
            this.fire('search', { keywords: keywords });
        }

        BookListView.prototype.template = 'bookList';

        BookListView.prototype.enterDocument = function() {
            var util = require('er/util');
            $('#book-list .buy').click(util.bind(buyBook, this));
            $('#submit-search').click(util.bind(search, this));
        };

        require('er/util').inherits(BookListView, View);

        return BookListView;
    }
)
;