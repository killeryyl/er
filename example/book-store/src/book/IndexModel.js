define(
    function() {
        var Model = require('er/Model');

        IndexModel = function() {
            Model.apply(this, arguments);
        };

        IndexModel.prototype.getQuery = function() {
            return {
                page: this.get('page'),
                keywords: this.get('keywords'),
                author: this.get('author'),
                publisher: this.get('publisher'),
                order: this.get('order')
            };
        };

        require('er/util').inherits(IndexModel, Model);
                
        return IndexModel;
    }
);