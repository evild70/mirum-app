const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');

gulp.task('sass', function () {
    return gulp.src('./src/styles/*.{scss,sass}')
        .pipe(sass({
          outputStyle: 'expanded',
          includePaths: ['node_modules/susy/sass']
        }).on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
        .pipe(gulp.dest('./src/styles'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch(['./src/**/*.{scss,sass}'], ['sass']);
});

gulp.task('default', ['sass', 'watch'], function () {

});
