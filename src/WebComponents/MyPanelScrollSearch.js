import React,{useEffect} from 'react'
import {UXPanelScroll} from 'uxpanelscroll'

import 'css04panelscroll02'

export const MyPanelScrollSearch = (props) => {

    useEffect(()=>{
         /*
        const panel = new UXPanelScroll({
           id:id,
           item:".list-grp-buttons .list-grp-content-top"
        })
        */
    },[]) 
   
    return (
      <div id={props.id} > 
      <div className="panel-scroll-01">
        <div className="panel-scroll-content">
          <div className="panel-scroll-item">
            {props.children}
          </div>
        </div>
        <button id="btn-slide-up" className="slide-button-panel top">
          <i className="fa fa-chevron-up fa-2x"></i>
        </button>
        <button id="btn-slide-down" className="slide-button-panel bottom">
          <i className="fa fa-chevron-down fa-2x"></i>
        </button>
      </div>
      </div>
    );
}

