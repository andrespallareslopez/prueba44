import React,{useEffect} from 'react'

import {MyInputTemplate} from 'wcinputtemplate'

export const MyInput = (props) => {
    useEffect(()=>{

    },[]);
    
    return (
      <MyInputTemplate {...props} />
    /*  
    <div id={props.id}>
      <div className="group group-block" >
        <div className="label-help">
          <span className="logo fa fa-question-circle fa-2x"></span>
          <span className="text">{props.msgText}</span>
        </div>
        <div className="label-input" >
          <span className="logo fa fa-tag fa-2x" ></span>
          <input type="text" name={props.name} placeholder={props.msgPlaceHolder} className="input" />
        </div>                                             
      </div>
    </div>
    */
    )
}
