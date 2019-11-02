   
SystemJS.config({
    baseURL: './',
    defaultExtension: 'js',
    babelOptions:{
        stage1:true,
        modularRuntime: true
        },
    map:{
        jquery:"node_modules/jquery/dist/jquery.min.js",
        react:'node_modules/react/umd/react.development.js',
        'react-dom':'node_modules/react-dom/umd/react-dom.development.js',
        css: 'node_modules/systemjs-plugin-css/css.js',
        text: 'src/text.js',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build':'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'inputmask':'node_modules/inputmask/dist/inputmask/inputmask.js',
        'inputmask.dependencyLibs':'inputmask.dependencyLib.js',
        'wclayout':'src/lib/Layout.js',
        'wctab':'/src/lib/MyTab.js',
        'wcmenuvertical':'/src/lib/MyMenuVertical.js',
        'wcnav':'/src/lib/MyNav.js',
        'wcform':'/src/lib/MyForm.js',
        'wcslidepanel':'src/lib/MySlidePanel.js',
        'wcpanelscrollcontent':'/src/lib/MyPanelScrollContent.js',
        'wcinputnum':'/src/lib/MyInputNum.js',
        'wccombosearch':'/src/lib/MyComboSearch.js',
        'wccombo':'/src/lib/MyCombo.js',
        'wccalendar':'/src/lib/MyCalendar.js',
        'wcinput':'/src/lib/MyInput.js',
        'wcpanelscrollsearch':'/src/lib/MyPanelScrollSearch.js',
        'wcbuttonsearch':'/src/lib/MyButtonSearch.js',
        'wcpanelscrollpopup':'/src/lib/MyPanelScrollPopUp.js',
        'wcslidepaneldetail':'/src/lib/MySlidePanelDetail.js',
        'wclistgrpbuttons':'/src/lib/MyListGrpButtons.js',
        'wcpagesearch':'/src/lib/MyPageSearch.js',
        'wcpage03':'/src/lib/MyPage03.js',
        'wcpage02':'/src/lib/MyPage02.js',
        'wcpage01':'/src/lib/MyPage01.js',
        'uxtab':'/src/componentsImports/componentstabcontainer.js',
        'uxkeyform':'/src/componentsImports/UXKeyform.js',
        'uxscrollv':'/src/componentsImports/UXScrollV.js',
        'uxaccordeon':'/src/componentsImports/UXAccordeon.js',
        'uxloadpanel':'src/componentsImports/UXLoadPanel.js',
        'uxpanelscroll':'/src/componentsImports/UXPanelScroll.js',
        'uxscrollpopup':'/src/componentsImports/UXScrollPopUp.js',
        'uxslidepanels':'/src/componentsImports/UXSlidePanels.js',
        'uxbuttonscroll':'/src/componentsImports/UXButtonScroll.js',
        'uxsearchlist':'src/componentsImports/UXSearchList.js',
        'uxdatalist':'/src/componentsImports/UXDataList.js',
        'uxdatepicker':'/src/componentsImports/UXDatePicker.js',
        'uxsearchpanel':'/src/componentsImports/UXSearchPanel.js'

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