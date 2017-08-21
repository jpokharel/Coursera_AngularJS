(function(){
  "use strict";

  angular.module('public')
  .controller('SignUpFormController', SignUpFormController);

  SignUpFormController.$inject=['UserInfoService'];
  function SignUpFormController(UserInfoService) {
    var reg = this;

    reg.submit = function (user) {
      //Service call to store the user details
      console.log("Clicked inside this");
      UserInfoService.storeUserDetails(user);
      reg.completed = true;
    };

  }

})();
