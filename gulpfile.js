var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;
var webdriver_update = require('gulp-protractor').webdriver_update;
var  util = require('gulp-util');

gulp.task('webdriver_update', webdriver_update);
gulp.task('webdriver_standalone', webdriver_standalone);


gulp.task('default', [], function (callback) {
	process.env.BROWSER = util.env.browser ? util.env.browser : "chrome";
	//process.env.TAGS = ;
    return gulp.src('features/*.feature')
        .pipe(protractor({
            configFile: "./protractor-conf.js",
            args: ['--cucumberOpts.tags', util.env.tag ? util.env.tag : [] ]
        }))
        .on('error', function (e, file) {
            console.log(file);
            callback();
        })
});
