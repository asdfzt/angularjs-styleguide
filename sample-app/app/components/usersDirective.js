(function () {
    'use strict';
    module.exports = function () {
        return {
            replace: true,
            restrict: 'E',
            template: '<div><ul><li>{{usersController.displayName()}}</li><li>Pete</li><li>Joel</li></ul><input ng-model="usersController.currentName"></input> <button ng-click="usersController.submitName()">Click Me!</button></div>',
            scope: {},
            bindToController: true,
            controller: 'usersController',
            controllerAs: 'usersController'
        };
    }
})();