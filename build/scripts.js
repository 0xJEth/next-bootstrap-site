(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });
  var browserSync = require('browser-sync');

  gulp.task('scripts', function () {
    return gulp.src('src/scripts/*.js')
      // .pipe($.uglify())
      .pipe(gulp.dest('dist/scripts'))
      .pipe($.size({title: '[ minimize size ]:'}));
  });

  //watch
  gulp.task('scripts:watch', function () {
    gulp.watch('src/scripts/**', ['scripts']);
  });


}());
