   
SystemJS.config({
    baseURL: './',
    defaultExtension: 'js',
    babelOptions:{
        stage1:true,
        modularRuntime: true
        },
    map:{
        jquery:"/dist/jquery.min.js",
        'jquerymask':'/src/componentsImports/jquery.inputmask.js',
        //react:'dist/bundle.vendorext.js',
        react:'/dist/react.development.js',
        'react-dom':'/dist/react-dom.development.js',
        imask:'node_modules/imask/dist/imask.js',
        cleave: 'node_modules/cleave.js/dist/cleave.js',
        css: '/dist/css.js',
        text: '/dist/text.js',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build':'/dist/systemjs-babel-browser.js',
        'inputmask':'node_modules/inputmask/dist/inputmask/inputmask.js',
        'inputmask.dependencyLibs':'inputmask.dependencyLib.js',
        //'inputmask':'node_modules/inputmask/dist/inputmask/inputmask.js',
        //'inputmask':'dist/bundle.vendorext.js',
        //'inputmask.dependencyLibs':'inputmask.dependencyLib.js',
        'listdatos':'/dist/ListInMemory.js',
        'wclayout':'/dist/bundle.wc.js',
        'wctab':'/dist/bundle.wc.js',
        'wcmenuvertical':'/dist/bundle.wc.js',
        'wcnav':'/dist/bundle.wc.js',
        'wcform':'/dist/bundle.wc.js',
        'wcslidepanel':'/dist/bundle.wc.js',
        'wcpanelscrollcontent':'/dist/bundle.wc.js',
        'wcinputnum':'/dist/bundle.wc.js',
        'wccombosearch':'/dist/bundle.wc.js',
        'wccombo':'/dist/bundle.wc.js',
        'wccalendar':'/dist/bundle.wc.js',
        'wcinput':'/dist/bundle.wc.js',
        'wcpanelscrollsearch':'/dist/bundle.wc.js',
        'wcbuttonsearch':'/dist/bundle.wc.js',
        'wcpanelscrollpopup':'/dist/bundle.wc.js',
        'wcslidepaneldetail':'/dist/bundle.wc.js',
        'wclistgrpbuttons':'/dist/bundle.wc.js',
        'wcpagesearch':'/dist/bundle.wc.js',
        'wcpage03':'/dist/bundle.wc.js',
        'wcpage02':'/dist/bundle.wc.js',
        'wcpage01':'/dist/bundle.wc.js',
        'uxtab':'/dist/bundle.ux.js',
        'uxkeyform':'/dist/bundle.ux.js',
        'uxscrollv':'/dist/bundle.ux.js',
        'uxaccordeon':'/dist/bundle.ux.js',
        'uxloadpanel':'/dist/bundle.ux.js',
        'uxpanelscroll':'/dist/bundle.ux.js',
        'uxscrollpopup':'/dist/bundle.ux.js',
        'uxslidepanels':'/dist/bundle.ux.js',
        'uxbuttonscroll':'/dist/bundle.ux.js',
        'uxsearchlist':'/dist/bundle.ux.js',
        'uxdatalist':'/dist/bundle.ux.js',
        'uxdatepicker':'/dist/bundle.ux.js',
        'uxsearchpanel':'/dist/bundle.ux.js',
        //'localutil':'/src/componentsImports/lib/util01.js',
        'localutil':'/dist/bundle.base.js',
        //'localcomponent':'/src/componentsImports/lib/components01.js',
        'localcomponent':'/dist/bundle.base.js',
        //'localuxscroll':'/src/componentsImports/UXScroll.js',
        'localuxscroll':'/dist/bundle.base.js',
        //'localuxdatalist':'/src/componentsImports/UXDataList.js',
        'localuxdatalist':'/dist/bundle.base.js',
        //'localuxbuttonscroll':'/src/componentsImports/UXButtonScroll.js',
        'localuxbuttonscroll':'/dist/bundle.base.js',
        //'localutilcontainer':'/src/componentsImports/utilContainer.js',
        'localutilcontainer':'/dist/bundle.base.js',
        //'localjquery':'/src/componentsImports/import-jquery.js',
        'localjquery':'/dist/bundle.base.js',

        'csspikaday':'/dist/bundle.css',
        'csstether':'/dist/bundle.css',
        'css03datalist01':'/dist/bundle.css',
        'css04panelscroll01':'/dist/bundle.css',
        'cssformfixbasic01':'/dist/bundle.css',
        'css03search':'/dist/bundle.css',
        'css03layout02':'/dist/bundle.css',
        'css03transition02':'/dist/bundle.css',
        'css03rippleefects01':'/dist/bundle.css',
        'css03listcollections':'/dist/bundle.css',
        'css03listgroupbuttons':'/dist/bundle.css',
        'css03menuvertical01':'/dist/bundle.css',
        'css03buttonmovile01':'/dist/bundle.css',
        'css04panelscroll02':'/dist/bundle.css',
        'css03menupopup01':'/dist/bundle.css',
        'css04footermenu01':'/dist/bundle.css',
        'css04slidecontainer':'/dist/bundle.css',
        'csstabs01':'/dist/bundle.css'
        
        
    },
    packages:{
       
    },
    meta: {
        '*.css': { loader: 'css' },
        'src/templ/*.html': {loader: 'text'},     
        'plugin-babel':{
          
        },
        'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js':{
           
        }
    }
    ,transpiler: 'plugin-babel'
    })
    
    SystemJS.import('dist/index-bis.js');
    //SystemJS.import('dist/bundle.wc.js');