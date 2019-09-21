import React from 'react'
import ReactDOM from 'react-dom'
import MyNav from 'src/lib/MyNav.js'
import 'src/components/layouts/03layout02/03layout02.css'
var Layout =()=>{
    return (
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
                     <MyNav></MyNav>
        
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
        </div> 

    )
}

export default Layout