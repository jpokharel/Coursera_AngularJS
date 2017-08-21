(function(){
  'use strict';

  angular.module('public')
  .service('UserInfoService',UserInfoService);

  function UserInfoService(){
      var service = this;
      var firstname='firstname';
      var lastname='lastname';
      var phone='phone';
      var email = 'email';
      var shortname = 'shortname';

      //Store the registered user details
      service.storeUserDetails=function(user){
        service.firstname=user.firstname;
        service.lastname=user.lastname;
        service.phone=user.phone;
        service.email=user.email;
        service.shortname=user.shortname;
      }

      //Return registered user details
      service.getFirstName=function(){
        return service.firstname;
      };
      service.getLastName=function(){
        return service.lastname;
      };
      service.getPhoneNumber=function(){
        return service.phone;
      };
      service.getEmailAddress=function(){
        return service.email;
      };
      service.getShortName=function(){
        return service.shortname;
      };
  }

})();
