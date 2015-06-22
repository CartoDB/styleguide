var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var zip = require('gulp-zip');


var scriptsPath = 'css/';
var scriptsOutput = 'output/';

gulp.task('concat-minimize', function() {
  return gulp.src('css/*.css')
    .pipe(concatCss('styleguide.css'))
    .pipe(gulp.dest(scriptsOutput))
    .pipe(minifyCss())
    .pipe(rename('styleguide.min.css'))
    .pipe(gulp.dest(scriptsOutput));
});

gulp.task('zip', function () {
    return gulp.src('output/*')
        .pipe(zip('styleguide.zip'))
        .pipe(gulp.dest('output/'));
});

gulp.task('default', ['concat-minimize', 'zip']);
