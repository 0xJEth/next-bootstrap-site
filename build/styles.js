(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('styles',function() {
    return gulp.src('src/styles/*.scss')
      .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
      .pipe(gulp.dest('src/styles'))
      .pipe($.replace('../../bower_components','../bower_components'))
      .pipe(gulp.dest('dist/styles'));
  });

  //watch
  gulp.task('styles:watch', function () {
    gulp.watch('src/styles/*.scss', ['styles']);
  });

}());
