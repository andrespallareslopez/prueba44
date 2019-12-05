var gulp=require("gulp");
const { series , parallel } = require('gulp');
var clean=require("gulp-clean");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var gulpif=require("gulp-if");
var cssnano=require("gulp-cssnano");

var stripDebug=require("gulp-strip-debug");
var stripCssComments=require("gulp-strip-css-comments");
var minify=require("gulp-minify-css");
var flatten=require("gulp-flatten");
var useref=require("gulp-useref");

var basejs="src/componentsImports/";

var filejs = [
   'componentstabcontainer.js',
   'UXKeyform.js',
   'UXScrollV.js',
   'UXAccordeon.js',
   'UXLoadPanel.js',
   'UXPanelScroll.js',
   'UXScrollPopUp.js',
   'UXSlidePanels.js',
   'UXButtonScroll.js',
   'UXSearchList.js',
   'UXDataList.js',
   'UXDatePicker.js',
   'UXSearchPanel.js',
   'util01.js',
   'components01.js',
   'UXScroll.js',
   
];

//var path=require("path");
/*
gulp.task("concatwc",function(){
    return gulp.src(["src/lib/*.js"])
    .pipe(concat("bundle.wc.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});
*/
function concatwc(){
    return gulp.src(["src/lib/*.js"])
    .pipe(concat("bundle.wc.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
}

/*
gulp.task("default",function(){
   console.log("tareas.....");
   
});
*/

exports.default = concatwc;
