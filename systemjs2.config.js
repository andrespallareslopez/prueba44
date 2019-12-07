   
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
        'uxsearchpanel':'/src/componentsImports/UXSearchPanel.js',
        'localutil':'/src/componentsImports/util01.js',
        'localcomponent':'/src/componentsImports/components01.js',
        'localuxscroll':'/src/componentsImports/UXScroll.js',
        'localuxdatalist':'/src/componentsImports/UXDataList.js',
        'localuxbuttonscroll':'/src/componentsImports/UXButtonScroll.js',
        'localutilcontainer':'/src/componentsImports/utilContainer.js',
        'localjquery':'/src/componentsImports/import-jquery.js',
        'csspikaday':'/node_modules/pikaday/css/pikaday.css',
        'csstether':'/node_modules/tether/dist/css/tether.css',
        'css03datalist01':'/src/components/list/03datalist01.css',
        'css04panelscroll01':'/src/components/panel/04PanelScroll01.css',
        'cssformfixbasic01':'/src/components/forms/03form-fix-basic-01.css',
        'css03search':'/src/components/search/03search.css',
        'css03layout02':'/src/components/layouts/03layout02/03layout02.css',
        'css03transition02':'/src/components/layouts/03layout02/03transition02.css',
        'css03rippleefects01':'/src/components/effects/03rippleEffects01.css',
        'css03listcollections':'/src/components/list/03List-collections.css',
        'css03listgroupbuttons':'/src/components/list/03List-group-buttons.css',
        'css03menuvertical01':'/src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css',
        'css03buttonmovile01':'/src/components/buttons/03buttonmovile01.css',
        'css04panelscroll02':'/src/components/panel/04PanelScroll02.css',
        'css03menupopup01':'/src/components/footer/03Menu-popup01.css',
        'css04footermenu01':'/src/components/footer/04footermenu01.css',
        'css04slidecontainer':'/src/components/slides/04slide-container.css',
        'csstabs01':'/src/components/tabs/tabs01.css'
        
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