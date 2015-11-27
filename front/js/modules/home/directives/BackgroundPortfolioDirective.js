'use strict';

var directivesModule = require('./_index');

function _gerarPosicaoBackground(size) {
  return Math.floor(Math.random() * size);
}

/**
 * @ngInject
 */
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

directivesModule.directive('backgroundPortfolio', backgroundPortfolio);