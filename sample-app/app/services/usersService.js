(function(){
	'use strict';

    module.exports = function() {
        var usersService = this;
        var myDataRef = new Firebase('https://brilliant-heat-1213.firebaseio.com/');

        usersService.submitName = function(name) {
            myDataRef.set(name);
        }
    }
})();
