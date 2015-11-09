'use strict';

var angular = require('angular');

require('./modules/home/_index');
require('angular-route');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('angular-animate');
require('angular-scroll');
require('angular-messages');

var requires = [
  'ibanheiz.Home',
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ngCookies',
  'ngResource',
  'ngMessages',
  'duScroll'
];

angular.module('ibanheiz', requires);
angular.module('ibanheiz').config(require('./systemConfig'));
angular.module('ibanheiz').run(require('./systemRun'));
angular.module('ibanheiz').constant('SystemUriConfig', require('./systemConstants'));
