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
            var me = this;
            var query = {
                page: 1,
                keywords: '',
                author: '',
                publisher: '',
                order: ''
            };
            var key = [];
            if (e.keywords) {
                key = ['keywords'];
            }
            else if (e.author) {
                key = ['keywords', 'author', 'order'];
            }
            else if (e.publisher) {
                key = ['keywords', 'publisher', 'order'];
            }
            else if (e.page || e.order) {
                key = ['page', 'keywords', 'author', 'publisher', 'order'];
            }
            var i = key.length;
            while (i--) {
                var tmpKey = key[i];
                query[tmpKey] = e[tmpKey] || me.model.get(tmpKey);
            }
            me.model.set(query);
            me.enter(me.model.valueOf());
        }

        BookList.prototype.initBehavior = function() {
            var util = require('er/util');
            if (!this.rendered){
                this.on('search', util.bindFn(search, this));
                this.rendered = true;
            }
            this.view.on('buy', util.bindFn(buyBook, this));
            this.view.on('search', util.bindFn(search, this));
            this.view.on('flip', util.bindFn(search, this));
        };

        require('er/util').inherits(BookList, Action);

        return BookList;
    }
);