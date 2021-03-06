import React,{useEffect} from 'react'
import {UXPanelScroll} from 'uxpanelscroll'
import {MyListGrpButtons} from 'wclistgrpbuttons'

import 'css04panelscroll02'
import 'css03listgroupbuttons'

export const  MyPanelScrollContent = (props) => {
   //console.dir(props)
   useEffect(()=>{
    let id=props.id;
     
    const panel = new UXPanelScroll({
       id:id,
       item:".list-grp-buttons .list-grp-content-top"
    })
   },[])
   /*
   var timer = setTimeout(()=>{
   
     clearTimeout(timer)
      
   },50)
   */
    return (
        <div id={props.id}>
            <div  className="panel-scroll-01">
                <div className="panel-scroll-content fix-panel-scroll-content-tab" >
                    <div className="panel-scroll-item"  >
                      <MyListGrpButtons {...props} ></MyListGrpButtons>
                    </div>
                </div>
                <button id="btn-slide-up" className="slide-button-panel top"><i className="fa fa-chevron-up fa-2x"></i></button>
                <button id="btn-slide-down" className="slide-button-panel bottom"><i className="fa fa-chevron-down fa-2x"></i></button>
            </div>
        </div>  
    )
}


