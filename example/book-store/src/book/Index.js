define(
    function(require) {

        var Action = require('er/Action');
        var util = require('er/util');
        require('book/List');
        var listAction = 'book/List';

        function Index() {
            Action.apply(this, arguments);
        }

        Index.prototype.viewType = require('book/IndexView');

        function buyBook(e) {
            var cart = require('cart/init');
            cart.add(e.book);
            this.view.showBoughtTip(e.isbn);
        }

        function search(e) {
            this.subAction['book/List'].fire('search', e);
        }

        Index.prototype.initBehavior = function() {
            var me = this;
            me.view.on('search', util.bindFn(search, this));
        };

        Index.prototype.loadSubAction = function(action, container, opts) {
            var me = this;
            var subAction = window.require(action);
            subAction = new subAction();
            if (opts) subAction = util.mix(subAction, opts);
            subAction.enter({supAction: me, container: container});
            if (!me.subAction) me.subAction = {};
            me.subAction[action] = subAction;
        };

        Index.prototype.onentercomplete = function() {
            var me = this;
            me.loadSubAction(listAction, 'list-wrap', {
                onenter : function(){
                    console.log('subAction enter!');
                },
                onentercomplete : function(){
                    console.log('subAction enter complete!');
                }
            });
            me.subAction[listAction].on('buy', util.bindFn(buyBook, me));
        };

        util.inherits(Index, Action);

        return Index;
    }
);