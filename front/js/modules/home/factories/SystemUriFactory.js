'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function systemUri(SystemUriConfig) {
  return {
    getHome: function () {
      return SystemUriConfig.getHome;
    },
    getLocacao: function () {
      return SystemUriConfig.getLocacao;
    },
    getShowLocacao: function (id) {
      return SystemUriConfig.getShowLocacao.replace(':id', id);
    },
    getServicos: function () {
      return SystemUriConfig.getServicos;
    },
    getShowServicos: function (id) {
      return SystemUriConfig.getShowServicos.replace(':id', id);
    },
    getEventos: function () {
      return SystemUriConfig.getEventos;
    },
    getShowEventos: function (id) {
      return SystemUriConfig.getShowEventos.replace(':id', id);
    },
    getSobre: function () {
      return SystemUriConfig.getSobre;
    },
    getContato: function () {
      return SystemUriConfig.getContato;
    },
    get404: function () {
      return SystemUriConfig.get404;
    }
  };
}

factoriesModule.factory('systemUri', systemUri);
