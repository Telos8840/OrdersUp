/**
 * Created by sguardado on 12/22/2014.
 */
(function () {
  'use strict';

  angular.module('ordersUpApp').controller('loginCtrl', ['$scope', '$state', loginCtrl]);

  function loginCtrl($scope, $state){
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