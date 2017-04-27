(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  gulp.task('favicon', function () {
    return gulp.src('src/favicon.ico')
      .pipe(gulp.dest('dist'));
  });


}());
