(function() {
    'use strict';
    require('angular');
    require('firebase');
    var appModule = require('./app.modules.js');

    document.write(require('./index.html'));

    angular.element(document).ready(function () {
        angular.bootstrap(document, [appModule.name], {
            //strictDi: true
        });
    });
})();