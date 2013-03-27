define(
    function(require) {
        var Action = require('er/Action');

        function BookList() {
            Action.apply(this, arguments);
        }

        BookList.prototype.modelType = require('book/ListModel');

        BookList.prototype.viewType = require('book/ListView');

        function buyBook(e) {
            var book = this.model.find(e.isbn);
            this.fire('buy', {isbn: e.isbn, book: book});
        }

        function search(e) {
            var URL = require('er/url');
            console.log(this.redirect);
            this.redirect(URL.withQuery('/book/list',e).toString(), {force:true});
            /*var controller = require('er/controller');
            controller.renderChildAction('/book/list', this.view.container, e);*/
        }
        
        BookList.prototype.initBehavior = function() {
            var util = require('er/util');
            console.log('initBehavior');
            this.view.on('buy', util.bind(buyBook, this));
            this.view.on('search', util.bind(search, this));
        };

        require('er/util').inherits(BookList, Action);

        return BookList;
    }
);