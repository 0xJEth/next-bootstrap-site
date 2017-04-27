(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });
  var browserSync = require('browser-sync');

  gulp.task('watch', function() {
    //console.log('Your task goes here!');
    gulp.start([
      'images:watch',
      'scripts:watch',
      'styles:watch',
      'html:watch'
    ]);
  });



}());
