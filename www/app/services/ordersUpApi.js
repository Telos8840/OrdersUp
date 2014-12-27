/**
 * Created by sguardado on 12/26/2014.
 */
(function () {
  'use strict'

  angular.module('ordersUpApp').factory('ordersUpApi', [ordersUpApi]);

  function ordersUpApi() {

    function getRestaurantInfo() {

    }
    return {
      getRestaurantInfo: getRestaurantInfo()
    }
  }
  
})();
