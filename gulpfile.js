'use strict';

var gulp = require('gulp');

gulp.config = {
    paths: {
        source: ['src/**/*.js'],
        dist: 'dist/',
        test: 'src/test/javascript/**/*.js',
        tmp: '.tmp/',
        bower_components: 'bower_components/'
    }
};

require('require-dir')('./gulp');


gulp.task('default', ['build']);