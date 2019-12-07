   
SystemJS.config({
    baseURL: './',
    defaultExtension: 'js',
    babelOptions:{
        stage1:true,
        modularRuntime: true
        },
    map:{
        jquery:"node_modules/jquery/dist/jquery.min.js",
        react:'node_modules/react/umd/react.production.min.js',
        'react-dom':'node_modules/react-dom/umd/react-dom.production.min.js',
        css: 'node_modules/systemjs-plugin-css/css.js',
        text: 'src/text.js',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build':'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'inputmask':'node_modules/inputmask/dist/inputmask/inputmask.js',
        'inputmask.dependencyLibs':'inputmask.dependencyLib.js',
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
        'localutil':'/src/componentsImports/util01.js',
        'localcomponent':'/src/componentsImports/components01.js',
        'localuxscroll':'/src/componentsImports/UXScroll.js',
        'localuxdatalist':'/src/componentsImports/UXDataList.js',
        'localuxbuttonscroll':'/src/componentsImports/UXButtonScroll.js',
        'localutilcontainer':'/src/componentsImports/utilContainer.js',
        'localjquery':'/src/componentsImports/import-jquery.js'
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
    
    SystemJS.import('src/index-bis.js');
    //SystemJS.import('dist/bundle.wc.js');