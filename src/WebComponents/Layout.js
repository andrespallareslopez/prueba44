import React from 'react'
import {MyNav} from 'wcnav'
import {MyMenuVertical} from 'wcmenuvertical'
import {MyTab} from 'wctab'

import 'css03layout02'
import 'css03transition02'
import 'css03rippleefects01'


export const Layout =()=>{
    return (
        <div>
        <header>
            <div className="logo">
                
            </div>
            <h1 className="title-application">My Application</h1>
        </header>
        <div className="main-body">
            <aside id="menuvertical" className="menu-area">
              <MyMenuVertical id="MenuVertical01" ></MyMenuVertical>
            </aside>
            <div id="root" className="wrapper page root">
        
                <div className="nav">
                    
                    <nav data-behavior="navButtons03layout02">
                     <MyNav></MyNav>
        
                    </nav>
                    
                </div>
        
                <div className="main">
                    <main>
                        <div className="content" data-template="scroll02" data-action="panelform01" >
                          <MyTab></MyTab>
                    
        
                        </div>
                    </main>
                </div>
                <div className="footer">
                    <footer>
                    
                    </footer>
                </div>
            </div>
            <div className="childLayout">

            </div>
          </div>
        </div> 
    
    )
}

