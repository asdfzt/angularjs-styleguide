(function() {
    'use strict';
    var components = require('./components/components.module.js');
    var services = require('./services/services.module.js');

    module.exports = angular.module('app', [components]);
})();