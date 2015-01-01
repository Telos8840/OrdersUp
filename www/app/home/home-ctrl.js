/**
 * Created by sguardado on 12/18/2014.
 */
(function () {
  'use strict';

  angular.module('ordersUpApp').controller('homeCtrl', ['$scope', '$state', '$ionicPopup', homeCtrl]);

  function homeCtrl($scope, $state, $ionicPopup){

    $scope.restaurants = [];
    var stars = ['none', 'one', 'oneHalf', 'two', 'twoHalf', 'three', 'threeHalf', 'four', 'fourHalf', 'five'];
    for(var i = 0; i < 20; i++){
      $scope.restaurants.push({
        id: i,
        src: 'http://lorempixel.com/100/100/food',
        name: 'Restaurant ' + (i+1),
        reviews: Math.floor((Math.random() * 1000) + 1),
        stars: stars[Math.floor((Math.random() * 9) + 0)],
        distance: ((Math.random() * 10) + 0).toFixed(2)
      });
    }

    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
      $scope.order = {}

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="order.name">',
        title: 'Enter Restaurant Name',
        //subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.order.name) {
                //don't allow the user to close unless they enter name
                e.preventDefault();
              } else {
                console.log($scope.order.name);
                return $scope.order.name;
              }
            }
          }
        ]
      });
      /*myPopup.then(function(res) {
        console.log('Tapped!', res);
      });*/
    };

    $scope.goToDetails = function () {
      $state.go("app.restDetails");
    };






    /*$scope.getTimeStamp = function () {
      var httpMethod = 'GET',
        url = 'http://api.yelp.com/v2/search',
        params = {
          oauth_consumer_key : '-4fDBHtBlzsXWKwCqzcxww',
          oauth_nonce : 'a2',
          oauth_signature_method : 'HMAC-SHA1',
          oauth_timestamp : Math.round((new Date()).getTime() / 1000.0),
          oauth_token : 'aE-Cl-LvQDa7yA7IifiiEYzxVyhmXF_x',
          oauth_version : '1.0'
        },
        consumerSecret = 'YN7XXv9wPpNx4XdzawKfdUZGZOc',
        tokenSecret = 'q2DchA91cNCp3Uj3VDADjQlk2Ek',
      // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
        encodedSignature = oauthSignature.generate(httpMethod, url, params, consumerSecret, tokenSecret),
      // generates a BASE64 encode HMAC-SHA1 hash
        signature = oauthSignature.generate(httpMethod, url, params, consumerSecret, tokenSecret,
          { encodeSignature: false});

      console.log(Math.round((new Date()).getTime() / 1000.0));
      console.log(signature);

      console.log(params);

      var generatedUrl = createUrl(url, params, signature);
      generatedUrl += "term=food";
      console.log(generatedUrl);


      $http.get(generatedUrl)
        .success(function (data) {
          console.log(data);
        })
        .error(function (data) {
          console.log(data);
        });

    };

    function createUrl(url, params, signature){
      var paramString = "";
      for(var name in params) {
        if(name == "oauth_nonce"){
          paramString += name + "=" + params[name] + "&";
          paramString += "oauth_signature=" + signature + "&";
        } else {
          paramString += name + "=" + params[name] + "&";
        }
      }

      return url + "?location=Los+Angeles&" + paramString
    }*/


  };



})();

//http://api.yelp.com/v2/search?term=food&location=Los+Angeles&oauth_consumer_key=-4fDBHtBlzsXWKwCqzcxww&oauth_token=aE-Cl-LvQDa7yA7IifiiEYzxVyhmXF_x&oauth_signature_method=HMAC-SHA1&oauth_signature=q2DchA91cNCp3Uj3VDADjQlk2Ek&oauth_timestamp=1419372098&oauth_nonce=qwerty