(function (angular) {
  'use strict';

  var _site = {
  };

  // Functions
  function SiteController($scope, $http, $timeout, $location) {
  }

  // Controllers
  angular.module('app.modules.Site.controllers', ['duScroll'])
    .controller('SiteController', SiteController);

  // Inject
  SiteController.$inject = ['$scope', '$http', '$timeout', '$location'];

}(angular));


