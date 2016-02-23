'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeController($scope, HomeService) {
  $scope.navOffset = ($scope.isMobile) ? 50 : 60;
  $scope.showModal = false;

  var promisse = HomeService.buscaPortfolios();
  promisse.success(function (portfolios) {
    $scope.portfolios = portfolios;
  });
  promisse.error(function (err) {
    console.log(err);
  });

  $scope.exibirPortfolio = function (portfolio) {
    $scope.portfolio = portfolio;
    // $scope.showModal = !$scope.showModal;
  };
}

controllersModule.controller('HomeController', HomeController);