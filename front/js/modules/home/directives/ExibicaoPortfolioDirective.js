'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function exibicaoPortfolio($timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/home/modal-portfolio',
    scope: {
      showModal: "=",
      portfolio: "="
    },
    link: function (scope, element, attrs) {
      var ESC = 27;

      $timeout(function () {
        element.removeAttr('style');
      }, 1000);

      var container = angular.element(document.getElementsByClassName('modal-portfolio-container'));
      container.bind('keyup', function (event) {
        if (event.keyCode === ESC) {
          scope.fecharModal();
          scope.$apply();
        }
      });

      scope.fecharModal = function () {
        scope.showModal = !scope.showModal;
      };

      scope.$watch('showModal', function (newValue, oldValue) {
        if (newValue) {
          angular.element(document.getElementsByTagName('body')).addClass('hide-body-scroll');
        } else {
          angular.element(document.getElementsByTagName('body')).removeClass('hide-body-scroll');
        }
      });
    }
  };
}

directivesModule.directive('exibicaoPortfolio', exibicaoPortfolio);