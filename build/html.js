(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('html', function() {
    return gulp.src('src/*.html')
      // .pipe($.replace('bower_components', 'bower_components'))
      .pipe(gulp.dest('dist'));
  });


  //watch
  gulp.task('html:watch', function () {
    gulp.watch('src/*.html', ['html']);
  });


}());
