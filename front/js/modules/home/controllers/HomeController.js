'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeController($scope) {
  $scope.navOffset = ($scope.isMobile) ? 50 : 60;
}

controllersModule.controller('HomeController', HomeController);