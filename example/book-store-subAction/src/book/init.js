define(
    function(require) {
        var actions = [
            {
                path: '/',
                type: 'book/Index'
            },
            {
                path: '/book/list',
                type: 'book/List'
            },
            {
                path: '/book/view',
                type: 'book/Read'
            }
        ];

        var controller = require('er/controller');
        actions.forEach(controller.registerAction);
    }
);