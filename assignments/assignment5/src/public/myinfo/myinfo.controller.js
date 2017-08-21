(function(){
  'use strict';

  angular.module('public')
  .controller('MyInfoController',MyInfoController);

  MyInfoController.$inject=['UserInfoService'];
  function MyInfoController(UserInfoService){
    var info = this;
    
    info.firstname=UserInfoService.getFirstName();
    info.lastname=UserInfoService.getLastName();
    info.phone=UserInfoService.getPhoneNumber();
    info.email=UserInfoService.getEmailAddress();
    info.shortname=UserInfoService.getShortName();
  }
})();
