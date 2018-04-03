const gulp = require('gulp');
const webserver = require('gulp-webserver');
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('webserver', function() {
  gulp.src('./src')
    .pipe(webserver({
      livereload: true,
      open: true,
      directoryListing: {
        enable:true,
        path: 'src'
      }
    }));
});


gulp.task('less', function () {
  gulp.src('./src/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src'));
});


gulp.task('watch', function() {
  gulp.watch('src/**/*.less', ['less']);
});

gulp.task('default', ['webserver', 'watch', 'less']);
