var Jujitsu = angular.module('Jujitsu', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: '/views/home.html',
          controller: 'HomeController'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }]);