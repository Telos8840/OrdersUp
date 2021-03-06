// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ordersUpApp', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    openFB.init({appId: '366024533579880'});
    $stateProvider

      .state("login", {
        url: "/login",
        templateUrl: "app/login/login.html"
      })

      .state("app", {
        abstract: true,
        url: "/app",
        templateUrl: "app/layout/menu-layout.html"
      })

      .state('app.home', {
        url: "/home",
        views: {
          'mainContent': {
            templateUrl: "app/home/home.html"
          }
        }
      })

      .state('app.restDetails', {
        url: "/restaurant-details",
        views: {
          'mainContent': {
            templateUrl: "app/restaurant-details/restaurant-details.html"
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });