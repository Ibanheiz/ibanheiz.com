(function (angular) {
  'use strict';

  function showMenu() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          var menuPrincipal = element.parent().parent().find('nav');
          if (menuPrincipal.hasClass('show-menu-principal')) {
            menuPrincipal.removeClass('show-menu-principal');
          } else {
            menuPrincipal.addClass('show-menu-principal');
          }
        });
      }
    };
  }

  function portfolio() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/site/portfolio',
      link: function (scope, element, attrs) {

      }
    };
  }

  function backgroundPortfolio() {
    return {
      restrict: 'A',
      replace: true,
      link: function (scope, element, attrs) {
        var backgrounds = [
          "portfolio-color-red",
          "portfolio-color-green",
          "portfolio-color-blue",
          "portfolio-color-yellow"
        ];

        element.on('mouseover', function () {
          var portfolioBackground = element.next();
          var randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)];
          portfolioBackground.removeClass(randomBackground);
          portfolioBackground.addClass(randomBackground);

          element.on('mouseleave', function () {
            portfolioBackground.removeClass(randomBackground);
          });
        });
      }
    };
  }

  angular.module('app.modules.Site.directives', [])
    .directive('showMenu', showMenu)
    .directive('portfolio', portfolio)
    .directive('backgroundPortfolio', backgroundPortfolio);

}(angular));
