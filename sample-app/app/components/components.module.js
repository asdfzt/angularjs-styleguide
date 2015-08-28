(function() {
    'use strict';
    var users = require('./usersDirective.js');
    var usersController = require('./usersController.js');
    var services = require('../services/services.module.js');

    module.exports = angular.module('components', [services])
        .controller('usersController', usersController)
        .directive('users', users)
        .name;
})();