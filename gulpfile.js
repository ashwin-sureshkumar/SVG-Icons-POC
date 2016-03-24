var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var rename = require('gulp-rename');

gulp.task('svg-min', function() {

    return gulp.src('./svgs/**/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest('./assets'));

});
