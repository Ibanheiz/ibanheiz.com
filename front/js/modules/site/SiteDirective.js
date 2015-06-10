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

  function _gerarPosicaoBackground(size) {
    return Math.floor(Math.random() * size);
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
          var posicao,
          portfolioBackground = element.next();

          // Gera nova posição até ser diferente da última
          do {
            posicao = _gerarPosicaoBackground(backgrounds.length);
          } while (scope.ultimaPosicao === posicao);

          scope.ultimaPosicao = posicao;
          var randomBackground = backgrounds[posicao];
          portfolioBackground.addClass(randomBackground);

          element.on('mouseleave', function () {
            portfolioBackground.removeClass(randomBackground);
          });
        });
      }
    };
  }

  function pageScroll($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var windowEl = angular.element($window);
        var handler = function () {
          scope.scroll = windowEl[0].pageYOffset;
        };
        windowEl.on('scroll', scope.$apply.bind(scope, handler));
        handler();
      }
    };
  }

  angular.module('app.modules.Site.directives', [])
    .directive('showMenu', showMenu)
    .directive('portfolio', portfolio)
    .directive('backgroundPortfolio', backgroundPortfolio)
    .directive('pageScroll', pageScroll);

  // Inject
  pageScroll.$inject = ['$window'];

}(angular));
