/*=========== GULP + Plugins init ==============*/


var gulp = require('gulp'),
	plumber = require('gulp-plumber'), // generates an error message
	prefixer = require('gulp-autoprefixer'), // automatically prefixes to css properties
	svgmin = require('gulp-svgmin'), // for minimizing svg-files
	sass = require('gulp-sass'), // for compiling scss-files to css
	browserSync = require('browser-sync'), // for online synchronization with the browser
	imagemin = require('gulp-imagemin'), // for minimizing images-files
	cache = require('gulp-cache'), // connecting the cache library
	htmlhint = require("gulp-htmlhint"), // for html-validation
	uglify = require('gulp-uglify-es'),
	concat = require('gulp-concat'),
	zip = require('gulp-zip'),
	sourcemaps = require('gulp-sourcemaps'),
	replace = require('gulp-replace');


/*=========== Compile SCSS ==============*/

gulp.task('sass', function(cb) {

	gulp.src('html/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass(
			{
				linefeed: "crlf"
			}
		))
		.pipe(prefixer())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./html/css'))

        .pipe(browserSync.reload({
            stream: true
        }));
	cb();
});



/*=========== Watch ==============*/

gulp.task('watch', function() {

	browserSync.init({
		server: "./html",
		index: "index.html"
	});

	gulp.watch('./html/sass/**/*.scss', gulp.series('sass'));
});


/*=========== Minimization IMAGE ==============*/

gulp.task('images', function(cb){
    gulp.src('html/img/*')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('html/img'));
    cb();
});

gulp.task('compress', function(cb) {
	gulp.src('html/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('html/img'));
	cb();
});


/*=========== Minimization SVG ==============*/

gulp.task('svg-min', function (cb) {
	gulp.src('html/svg-icons/*.svg')
		.pipe(svgmin({
			plugins: [{
				removeDoctype: true
			}, {
				removeComments: true
			}, {
				cleanupNumericValues: {
					floatPrecision: 2
				}
			}, {
				convertColors: {
					names2hex: true,
					rgb2hex: true
				}
			}]
		}))
		.pipe(gulp.dest('html/svg-icons'));
	cb();
});



/*============= html-validator ==============*/

gulp.task('html-valid', function(cb) {
	gulp.src("html/*.html")
		.pipe(htmlhint());
	cb();
});


/*============= Join tasks ==============*/

gulp.task('default', gulp.parallel('watch', 'sass'));

gulp.task('build', gulp.series('sass', 'html-valid', 'svg-min', 'images', 'compress'));