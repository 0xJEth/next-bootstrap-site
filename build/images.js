(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  gulp.task('images', function () {
    return gulp.src('src/images/*.*')
      .pipe(gulp.dest('dist/images'));
  });


  //watch
  gulp.task('images:watch', function () {
    gulp.watch('src/images/*.*', ['images']);
  });



}());
