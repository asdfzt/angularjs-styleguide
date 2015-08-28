(function () {
    'use strict';
    function usersController(usersService) {
        var usersController = this;
        usersController._ = {}; //For Private members and functions
        usersController.currentName = '';

        usersController.displayName = function(){
            return 'zack' + 'taylor';
        };

        usersController.submitName = function() {
            usersService.submitName(usersController.currentName);
        }
    }

    usersController.$inject = ['usersService'];
    
    module.exports = usersController;
})();