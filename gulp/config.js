'use strict';

module.exports = {

  'browserPort'  : 3002,
  'UIPort'       : 3001,
  'serverPort'   : 3000,

  'watch': {
    'scripts' : ['front/js/modules/*.js', 'front/js/moules/**/*.js'],
    'styles' : ['front/css/stylus/*.styl', 'front/css/stylus/**/**/*.styl'],
    'image' : 'front/image/*',
    'views' : ['back/modules/**/views/*.jade', 'back/modules/**/views/**/*.jade']
  },

  'nodemon': {
    'script': 'back/bin/www',
    'ext': 'js',
    'env': 'development',
    'watch': 'back/'
  },

  'styles': {
    'src' : 'front/css/stylus/*.styl',
    'dest': 'front/build/css'
  },

  'scripts': {
    'src' : ['front/js/**/*.js', 'front/js/**/**/*.js'],
    'dest': 'front/build/js'
  },

  'images': {
    'src' : ['front/image/*.*', 'front/image/**/*.*'],
    'dest': 'front/build/images'
  },

  'fonts': {
    'src' : 'front/css/fonts/*',
    'dest': 'front/build/css/fonts'
  },

  'gzip': {
    'src': 'front/build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'front/build/',
    'options': {}
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['front/js/app.js'],
    'bundleName': 'app.js',
    'sourcemap' : true
  },

  'test': {
    'source': [
      'front/js/test/modules/**/*Spec.js',
      'back/test/modules/**/*Spec.js'
    ],
    'jade': {
      'source': 'back/modules/**/views/*.jade',
      'dest': 'front/js/test/templates'
    }
  }

};
