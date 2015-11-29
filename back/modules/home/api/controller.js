(function () {
  'use strict';
  var fs = require('fs');

  function buscaPortfolios (req, res) {
    res.json(require('./../portfolios'));
  }

  var controller = {
    buscaPortfolios: buscaPortfolios
  };

  module.exports = controller;
}());