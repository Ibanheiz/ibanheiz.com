'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync');

gulp.task('images', function () {

  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest)) // Ignore unchanged files
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true
    })) // Optimize
    .pipe(gulp.dest(config.images.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});