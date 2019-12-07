var gulp=require("gulp");
const { series , parallel } = require('gulp');
const terser = require('gulp-terser');
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

const basejs="src/componentsImports/lib/";
const basenode="node_modules/";
const basecssloader = "src/components/loaders/";

const filejs = [
   basejs + 'componentstabcontainer.js',
   basejs + 'UXKeyform.js',
   basejs + 'UXScrollV.js',
   basejs + 'UXAccordeon.js',
   basejs + 'UXLoadPanel.js',
   basejs + 'UXPanelScroll.js',
   basejs + 'UXScrollPopUp.js',
   basejs + 'UXSlidePanels.js',
   basejs + 'UXButtonScroll.js',
   basejs + 'UXSearchList.js',
   basejs + 'UXDataList.js',
   basejs + 'UXDatePicker.js',
   basejs + 'UXSearchPanel.js',
   basejs + 'util01.js',
   basejs + 'components01.js',
   basejs + 'UXScroll.js'
];

const filevendorexternal = [
    basenode + 'moment/moment.js',
    basenode + 'pikaday/pikaday.js',
    basenode + 'tether/dist/js/tether.js',
    basenode + 'linq/linq.js',
    basenode + 'mousetrap/mousetrap.min.js'
];

const filecssloader = [
    'node_modules/components-font-awesome/css/font-awesome.min.css',
    basecssloader + 'loaders02/04loader-progress-01.css',
    basecssloader + 'loaders01/04logospinners.css',
    basecssloader + 'loaders03/spinner.css',
    basecssloader + 'loaders04/spinner.css',
    basecssloader + 'loaders05/spinner.css'
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
function concatux(){
    //utilizamos terser() para hacer los mismo que uglify() pero para
    //para ES6+ porque uglify() esta preparado con ES5 con babel.
   return gulp.src(filejs)
   .pipe(concat('bundle.ux.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/'));
}
function concatvendorexternal(){
    return gulp.src(filevendorexternal)
   .pipe(concat('bundle.vendorext.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/'));
}
function minifycssloader(){
    return gulp.src(filecssloader)
           .pipe(concat('bundle.cssloader.css'))
           .pipe(minify())
           .pipe(gulp.dest('dist/'))
}


exports.default = series(concatwc,concatux,concatvendorexternal,minifycssloader);

//exports.default = concatux;
