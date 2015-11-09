'use strict';

var directivesModule = require('./_index');

var _media = 800;

/**
 * @ngInject
 */
function deviceDetector($window) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var w = angular.element($window);
      scope.getWindowDimensions = function () {
        return {
          'h': w[0].innerHeight,
          'w': w[0].innerWidth
        };
      };
      scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
        scope.windowHeight = newValue.h;
        scope.windowWidth = newValue.w;
        scope.device = _buildStringDevice(scope.windowWidth);
        scope.isMobile = isMobile(scope.windowWidth);
        scope.isDesktop = isDesktop(scope.windowWidth);
      }, true);

      w.bind('resize', function () {
        scope.$apply();
      });
    }
  };
}

function _buildStringDevice(width) {
  if (width < _media) {
    return 'mobile';
  } else {
    return 'desktop';
  }
}

function isMobile(width) {
  return (width < _media);
}

function isDesktop(width) {
  return (width >= _media);
}

directivesModule.directive('deviceDetector', deviceDetector);