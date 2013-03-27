define(
    function(require) {

        var Action = require('er/Action');
        var util = require('er/util');

        function Index() {
            Action.apply(this, arguments);
        }

        Index.prototype.viewType = require('book/IndexView');

        function buyBook(e) {
            var cart = require('cart/init');
            cart.add(e.book);
            this.view.showBoughtTip(e.isbn);
        }

        Index.prototype.onentercomplete = function() {
            var me = this;
            var controller = require('er/controller');
            controller
                .renderChildAction('/book/list', 'list-wrap')
                .done(function(action, args) {
                    action.onentercomplete = function(){
                        console.log('/book/list onentercomplete');
                    };
                    action.on('buy', util.bind(buyBook, me));
                });
        };

        util.inherits(Index, Action);

        return Index;
    }
);