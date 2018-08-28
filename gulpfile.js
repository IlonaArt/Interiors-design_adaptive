const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const less = require('gulp-less');

let cssFiles = [
	'./precss/style.less'
];

gulp.task('css', function(){

	gulp.src(cssFiles)
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(gcmq())
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
});	

gulp.task('watch', function(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });

	gulp.watch('./precss/**/*.less', ['css'])
});

