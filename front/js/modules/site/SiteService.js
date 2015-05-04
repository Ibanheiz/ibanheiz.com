(function (angular) {
  // Functions
  function SiteService($http) {
  }

  // Services
  angular.module('app.modules.Site.services', [])
    .service('SiteService', SiteService);

  // Inject
  SiteService.$inject = ['$http'];
}(angular));


