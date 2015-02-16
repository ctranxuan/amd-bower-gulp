'use strict';

/**
 * https://github.com/scalableminds/amd-optimize
 * https://www.npmjs.com/package/gulp-amd-optimizer
 **/

//var gulp = require("gulp");
//var amdOptimize = require("amd-optimize");
//var concat = require('gulp-concat');
//
//gulp.task("amd1", function () {
//
//  return gulp.src("src/**/*.js")
//    // Traces all modules and outputs them in the correct order.
//    .pipe(amdOptimize("hello"))
//    .pipe(concat("index.js"))
//    .pipe(gulp.dest("dist"));
//
//});

var gulp = require("gulp");
var amdOptimize = require('gulp-amd-optimizer');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap-amd');

gulp.task('wrap', function() {
  gulp.src(['./bower_components/cryptojslib/components/core.js', './bower_components/cryptojslib/components/enc-base64.js'])
    .pipe(wrap())
    .pipe(gulp.dest('./dist/amd-wrap'));
});

var requireConfig = {
  baseUrl: __dirname + '/..'
};
var options = {
  umd: false
};

gulp.task('amd2', function () {
  return gulp.src('src/*.js', {base: requireConfig.baseUrl})
    .pipe(amdOptimize(requireConfig, options))
    .pipe(concat('modules.js'))
    .pipe(gulp.dest('dist'));
});