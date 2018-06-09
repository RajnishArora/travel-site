var gulp=require('gulp');
var postcss= require('gulp-postcss');
var autoprefixer= require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');



gulp.task('styles',function(){
     //console.log("Styles gulp called");
     return gulp.src('./app/assets/styles/styles.css')
     			.pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
                .on('error',function(errorInfo){
                	console.log(errorInfo.toString());
                	this.emit('end');
                })
                .pipe(gulp.dest('./app/temp/styles'));
});