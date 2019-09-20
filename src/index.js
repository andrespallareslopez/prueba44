import React from 'react'
import ReactDOM from 'react-dom'

import $,{jQuery} from 'jquery'

import 'src/components/layouts/03layout02/03layout02.css'

import 'src/components/menu-horizontal/03menu-horizontal01.css'

import 'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css'

import 'src/components/panel/04PanelScroll02.css'



const cadenaweblatoutsstring = (
<div>
<header>
    <div className="logo">
       
    </div>
    <h1 className="title-application">My Application</h1>
</header>
<div className="main-body">
    <aside id="menuvertical" className="menu-area">
      
    </aside>
    <div id="root" className="wrapper page root">

        <div className="nav">
            
            <nav data-behavior="navButtons03layout02">
             

            </nav>
            
        </div>

        <div className="main">
            <main>
                <div className="content" data-template="scroll02" data-action="panelform01" >
               
            

                </div>
            </main>
        </div>
        <div className="footer">
            <footer>
            
            </footer>
        </div>
    </div>
  </div>
</div>);

ReactDOM.render(cadenaweblatoutsstring,document.querySelector(".container .pages"));

//console.dir($)

