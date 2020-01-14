import React,{useEffect} from 'react'
import {MyPanelScrollPopUp} from 'wcpanelscrollpopup'
import {MyPanelScrollSearch} from 'wcpanelscrollsearch'
import {MyForm} from 'wcform'

export const MyPageForm = (props) => {

    return (
     <div id={props.id} className="wrapper page child" >
        <div className="nav" >
            <nav  >
            <button type="button" id="btn-toggle-back-3" className="nav-mobile push-float-left"   >
                <span className="fa fa-chevron-left" ></span>
                <span className="texto-btn"  > Back</span>
            </button>
              
            </nav>
        </div>  
        <div className="main" >
        <main>
            <div className="box content"  >
            <MyPanelScrollSearch id="panelsearch01" >
              <MyForm id="form02" />
            </MyPanelScrollSearch>     
            </div>
        </main>
        </div>
        <div className="footer">
            <footer  >
            <MyPanelScrollPopUp id='popup02'></MyPanelScrollPopUp>
            </footer>
        </div>
     </div>
    )
}