/**
 * Created by sguardado on 12/18/2014.
 */
(function () {
  'use strict';

  angular.module('ordersUpApp').controller('homeCtrl', ['$scope', homeCtrl]);

  function homeCtrl($scope){

    $scope.images = [];
    for(var i = 0; i < 6; i++){
      $scope.images.push({
        id: i,
        src: 'http://lorempixel.com/150/150/food'});
    }


  };

})();