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

        function search(e) {
            this.subAction['book/List'].fire('search', e);
        }

        Index.prototype.initBehavior = function() {
            var me = this;
            me.view.on('search', util.bindFn(search, this));
        };

        Index.prototype.loadSubAction = function(actionName, action, container, opts) {
            var me = this;
            var subAction = action;
            subAction = new subAction();
            if (opts) subAction = util.mix(subAction, opts);
            subAction.enter({supAction: me, container: container});
            if (!me.subAction) me.subAction = {};
            me.subAction[actionName] = subAction;
        };

        Index.prototype.onentercomplete = function() {
            var me = this;
            me.loadSubAction('book/List', require('book/List'), 'list-wrap', {
                onenter : function(){
                    //console.log('subAction enter!');
                },
                onentercomplete : function(){
                    console.log('subAction enter complete!');
                }
            });
            me.subAction['book/List'].on('buy', util.bindFn(buyBook, me));
        };

        util.inherits(Index, Action);

        return Index;
    }
);