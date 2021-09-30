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
   //basejs + 'util01.js',
   
   //basejs + 'components01.js',
   basejs + 'UXScroll.js'
];

const filevendorexternal = [
    basenode + 'moment/moment.js',
    basenode + 'pikaday/pikaday.js',
    basenode + 'tether/dist/js/tether.js',
    basenode + 'linq/linq.js',
    basenode + 'mousetrap/mousetrap.min.js',
    //'src/import-jquery-bis.js',
    basenode + 'jquery/dist/jquery.min.js',
    //basenode + 'react/cjs/react.production.min.js',
    //basenode + 'react-dom/cjs/react-dom.production.min.js',
    basenode + 'inputmask/dist/inputmask/inputmask.js',
    basenode + 'inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js',
    basenode + 'inputmask/dist/inputmask/global/window.js'
    //basenode + 'systemjs-plugin-babel/plugin-babel.js',
    //basenode + 'systemjs-plugin-babel/systemjs-babel-browser.js',
];

const filecssloader = [
    'node_modules/components-font-awesome/css/font-awesome.min.css',
    basecssloader + 'loaders02/04loader-progress-01.css',
    basecssloader + 'loaders01/04logospinners.css',
    basecssloader + 'loaders03/spinner.css',
    basecssloader + 'loaders04/spinner.css',
    basecssloader + 'loaders05/spinner.css'
];

const filecssbundle=[
    'node_modules/pikaday/css/pikaday.css',
    'node_modules/tether/dist/css/tether.css',
    'src/components/list/03datalist01.css',
    'src/components/panel/04PanelScroll01.css',
    'src/components/forms/03form-fix-basic-01.css',
    'src/components/search/03search.css',
    'src/components/layouts/03layout02/03layout02.css',
    'src/components/layouts/03layout02/03transition02.css',
    'src/components/effects/03rippleEffects01.css',
    'src/components/list/03List-collections.css',
    'src/components/list/03List-group-buttons.css',
    'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css',
    'src/components/buttons/03buttonmovile01.css',
    'src/components/panel/04PanelScroll02.css',
    'src/components/footer/03Menu-popup01.css',
    'src/components/footer/04footermenu01.css',
    'src/components/slides/04slide-container.css',
    'src/components/tabs/tabs01.css'
]

const filejsbase=[
    'src/componentsImports/lib/util01.js',
    'src/componentsImports/lib/components01.js',
    //'src/componentsImports/lib/import-jquery.js',
    'src/componentsImports/lib/utilContainer.js',
    'src/componentsImports/lib/UXScroll.js',
    'src/componentsImports/lib/UXDataList.js',
    'src/componentsImports/lib/UXButtonScroll.js'
    
]

function concatwc(){
    return gulp.src(["src/lib/*.js"])
    .pipe(concat("bundle.wc.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
}
function concatux(){
   
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
function concatbase(){
    return gulp.src(filejsbase)
    .pipe(concat('bundle.base.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
}
function minifycssloader(){
    return gulp.src(filecssloader)
           .pipe(concat('bundle.cssloader.css'))
           .pipe(minify())
           .pipe(gulp.dest('dist/'))
}
function minifycssbundle(){
    return gulp.src(filecssbundle)
          .pipe(concat('bundle.css'))
          .pipe(minify())
          .pipe(gulp.dest('dist/'))
}


exports.default = series(concatwc,concatux,concatvendorexternal,minifycssloader,minifycssbundle,concatbase);

//exports.default = concatux;
