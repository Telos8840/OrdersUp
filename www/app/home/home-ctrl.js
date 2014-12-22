/**
 * Created by sguardado on 12/18/2014.
 */
(function () {
  'use strict';

  angular.module('ordersUpApp').controller('homeCtrl', ['$scope', homeCtrl]);

  function homeCtrl($scope){
    $scope.fbLogin = function() {
      $state.go('app.home');
      /*openFB.login(
       function(response) {
       if (response.status === 'connected') {
       console.log('Facebook login succeeded');
       $scope.closeLogin();
       } else {
       alert('Facebook login failed');
       }
       },
       {scope: 'email,publish_actions'});*/
    }
  };

})();