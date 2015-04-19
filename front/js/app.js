(function (angular) {
  'use strict';

  function checkUser($q, $http, cb) {
    // Inicializa a promisse
    var deferred = $q.defer();
    // Verifica se existe um usuário autenticado
    $http.get('/api/login/loggedin').success(function (user) {
      cb(deferred, user);
    });
    return deferred.promise;
  }
  var auth = {
    checkLoggedin: ['$q', '$http', '$location', function ($q, $http, $location) {
      checkUser($q, $http, function (deferred, user) {
        if (user !== '0') {
          deferred.resolve();
        } else {
          deferred.reject();
          $location.url('/mean-seed/login');
        }
      });
    }],
    checkLoggedOut: ['$q', '$http', '$location', function ($q, $http, $location) {
      checkUser($q, $http, function (deferred, user) {
        if (user !== '0') {
          deferred.reject();
          $location.url('/mean-seed/client');
        } else {
          deferred.resolve();
        }
      });
    }]
  };

  angular.module('app', [
    'app.controllers',
    'app.directives',
    'app.filters',
    'app.services',
    'ngSanitize',
    'ngRoute',
    'ngResource',
    'ngAnimate'
  ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider.
        when('/site', {
          templateUrl: 'expose/site/home',
          controller: 'SiteController'
        }).
        when('/404', {
          templateUrl: 'expose/main/404',
          controller: 'UserController'
        }).
        otherwise({
          redirectTo: '/mean-seed/404'
        });
      $locationProvider.html5Mode(true);
    }]);
}(angular));

