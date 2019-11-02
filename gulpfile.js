var gulp=require("gulp");
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

//var path=require("path");

gulp.task("concatwc",function(){
    return gulp.src(["src/lib/*.js"])
    .pipe(concat("bundle.wc.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});


gulp.task("default",function(){
   console.log("tareas.....");
   
});