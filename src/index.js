import React from 'react'
import ReactDOM from 'react-dom'


import Layout from 'src/lib/Layout.js'


import $,{jQuery} from 'jquery'

import 'src/components/layouts/03layout02/03layout02.css'

import 'src/components/menu-horizontal/03menu-horizontal01.css'

import 'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css'

import 'src/components/panel/04PanelScroll02.css'


const cadenaweblatoutsstring = (
    <Layout></Layout>
);


ReactDOM.render(cadenaweblatoutsstring,document.querySelector(".container .pages"));

//console.dir($)

