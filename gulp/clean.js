'use strict';

var gulp = require('gulp');
var paths = gulp.config.paths;

var del = require('del');

gulp.task('clean:dist', function(cb) {
    del([paths.dist], cb);
});

gulp.task('clean:tmp', function(cb) {
    del([paths.tmp], cb);
});

gulp.task('clean', ['clean:dist', 'clean:tmp']);