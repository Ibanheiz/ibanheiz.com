'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var homeModule = [
  'ibanheiz.Home.controllers',
  'ibanheiz.Home.directives',
  'ibanheiz.Home.factories'
];

module.exports = angular.module('ibanheiz.Home', homeModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);