// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src('./sass/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .on('error', function(err) {
            console.log(err.message);
          })
        .pipe(gulp.dest('./css/'))
});
gulp.task('default', ['sass'], function() {
    gulp.watch('./sass/*.scss', ['sass']);
})