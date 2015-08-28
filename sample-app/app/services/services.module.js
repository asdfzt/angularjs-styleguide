(function(){
	'use strict';
    var usersService = require('./usersService.js');

    module.exports = angular.module('services', [])
        .service('usersService', usersService)
        .name;
})();