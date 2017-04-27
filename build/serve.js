(function () {

  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  var browserSync = require('browser-sync');
  // Static server
  gulp.task('serve', ['build'], function () {
    browserSync.init({
      server: {
        baseDir: path.join(config.path.dist),
        routes: {
          '/bower_components': path.join(config.path.root, 'bower_components'),
          '/styles': path.join(config.path.root, 'src/styles'),
          '/scripts': path.join(config.path.root, 'src/scripts'),
          '/images': path.join(config.path.root, 'src/images')
        }
      }
    });


    gulp.watch(['src/**'],['watch']).on("change", function () {
      browserSync.reload();
    });
  });


}());
