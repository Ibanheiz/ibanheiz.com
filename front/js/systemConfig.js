'use strict';

/**
 * @ngInject
 */
function routerConfig($routeProvider, $locationProvider, SystemUriConfig) {
  $routeProvider.
    when(SystemUriConfig.getHome, {
      templateUrl: 'expose/home/home',
      controller: 'HomeController'
    }).
    otherwise({
      redirectTo: SystemUriConfig.get404
    });
  $locationProvider.html5Mode(true);
}

module.exports = routerConfig;