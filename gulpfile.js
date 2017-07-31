"use strict";
var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
var util = require('gulp-util');

gulp.task('default', [], function(callback) {
    process.env.BROWSER = util.env.browser ? util.env.browser : "chrome";
    return gulp.src('features/*.feature')
        .pipe(protractor({
            configFile: "./protractor-conf.js",
            args: ['--cucumberOpts.tags', util.env.tag ? util.env.tag : []]
        }))
        .on('error', function(e, file) {
            console.log(file);
            callback();
        });
});