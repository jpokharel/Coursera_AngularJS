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
        Console.write("User first name is: ");
        firstname=user.firstname;
        lastname=user.lastname;
        phone=user.phone;
        email=user.email;
        shortname=user.shortname;
      }

      //Return registered user details
      service.getFirstName=function(){
        return firstname;
      };
      service.getLastName=function(){
        return lastname;
      };
      service.getPhoneNumber=function(){
        return phone = phone;
      };
      service.getEmailAddress=function(){
        return email;
      };
      service.getShortName=function(){
        return shortname;
      };
  }

})();
