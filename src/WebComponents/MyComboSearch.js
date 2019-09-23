import React from 'react'

import {UXDataList} from '/src/componentsImports/UXDataList.js'
import {UXButtonScroll} from '/src/componentsImports/UXButtonScroll.js'

import 'node_modules/tether/dist/css/tether.css'
import 'src/components/panel/04PanelScroll01.css'
import 'src/components/list/03datalist01.css'


const MyComboSearch = (props) => {
    
    return (
      <div id={props.id} >          
        <div id="datalist01" className="datalist" >
        <button id="btn-slide-close01" className="slide-button-panel button-close top-off" >
            <i className="fa fa-close fa-1x"></i>
        </button>
        <div className="panel-datalist" >
            
        </div>
        </div>
        <div className="group group-block">
            <div className="label-input">
            <span className="logo fa fa-tag fa-2x"></span>
            <input type="text" autocomplete="off" id="busquedatxt" placeholder="{props.msgPlaceHolder}" className="input medium" />
            <button  id="search" className="list-button"><span className="fa fa-search" ></span></button>
            </div>
        </div>
      </div>
    )
}
export default MyComboSearch;
