'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function HomeService($http) {
  var URL = 'api/portfolio';

  this.buscaPortfolios = function () {
    return $http.get(URL);
  };
}

servicesModule.service('HomeService', HomeService);