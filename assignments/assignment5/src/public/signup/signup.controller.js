(function(){
  "use strict";

  angular.module('public')
  .controller('SignUpFormController', SignUpFormController);

  SignUpFormController.$inject=['$scope','UserInfoService'];
  function SignUpFormController($scope,UserInfoService) {
    var reg = this;
    $scope.user={};

    reg.submit = function () {
      UserInfoService.storeUserDetails($scope.user);
      reg.completed = true;
    };

  }

})();
