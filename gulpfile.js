var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babelify = require('babelify');
var sass = require('gulp-sass');

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
        .on('error', function() {
            var msg = error.codeFrame.replace(/\n/g, '\n    ');
            gutil.log('|- ' + gutil.colors.bgRed.bold('Build Error in ' + error.plugin));
            gutil.log('|- ' + gutil.colors.bgRed.bold(error.message));
            gutil.log('|- ' + gutil.colors.bgRed('>>>'));
            gutil.log('|\n    ' + msg + '\n           |');
            gutil.log('|- ' + gutil.colors.bgRed('<<<'));
        })
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/build'));
});
gulp.task('js:watch', function() {
    gulp.watch('src/**/*.js', ['browserify']);
    gulp.watch('src/**/*.jsx', ['browserify']);
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