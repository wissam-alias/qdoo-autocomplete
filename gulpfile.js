var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babelify = require('babelify');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

gulp.task('js:build', function() {
    return browserify({
            entries: [
                'src/main.js'
            ],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react']
        })
        .transform(reactify)
        .bundle()
        .on('error', function (error) {
            console.log(error);
        })
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/build'));
});
gulp.task('js:watch', function() {
    gulp.watch('src/**/*.js', ['js:build']);
    gulp.watch('src/**/*.jsx', ['js:build']);
});

gulp.task('sass', function() {
    return gulp
        .src('src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/build'));
});
gulp.task('sass:watch', function() {
    gulp.watch('src/styles/*.scss', ['sass']);
});

gulp.task('default', [
    'js:build',
    'js:watch',
    'sass',
    'sass:watch'
]);