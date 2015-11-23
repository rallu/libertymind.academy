var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');

gulp.task("sass", function() {
    return gulp.src("scss/style.scss")
    .pipe(sass())
    .pipe(pleeease())
    .pipe(gulp.dest("."));
});

gulp.task("default", ['sass'], function() {
    gulp.watch("scss/style.scss", ['sass']);
});
