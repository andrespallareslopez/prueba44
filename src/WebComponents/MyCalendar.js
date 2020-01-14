import React,{useEffect} from 'react'

import {UXDatePicker} from 'uxdatepicker'

import 'csspikaday'
import 'csstether'

export const MyCalendar = (props) => {
    let id=props.id
    useEffect(()=>{
      new UXDatePicker({
        id:id
      })
    })
    /*
    let timer1 = setTimeout(() => { 
     
       clearTimeout(timer1);        
    }, 450);
    */ 
    return (
      <div id={props.id} >
      <div className="group group-block">
        <div className="label-help">
          <span className="logo fa fa-question-circle fa-2x"></span>
          <span className="text">{props.msgText}</span>
        </div>
        <div className="label-input">
          <span className="logo fa fa-tag fa-2x"></span>
           <input id="fecha" autoComplete="off" data-inputmask="'alias':'date','placeholder':'_'"  className="input medium" type="text" placeholder="" />
          <button id="btn-fecha" className="list-button"><span className="fa fa-calendar"></span></button>
        </div>
      </div>
      </div>
    )    
}
