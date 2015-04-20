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

  angular.module('app.modules.Site.directives', []).
    directive('showMenu', showMenu);

}(angular));
