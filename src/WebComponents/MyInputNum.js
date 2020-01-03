import React,{useEffect} from 'react'
import IMask from 'imask'
//import Inputmask from 'inputmask'
import {UXValidation} from 'uxvalidation'

export const MyInputNum = (props) => {
   useEffect(()=>{
    new UXValidation(props,({selectorInput})=>{
       //console.log("estoy dentro uxvalidation");
       IMask(selectorInput,{mask:/^[0-9]*$/});
    });
    //Inputmask({ regex: "\\d*" }).mask(selectorInput);
  //IMask(selectorInput,{mask:/^[0-9]*$/});
   },[]);
    
    return (
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
          <div className="label-warning" >
            <span className="logo fa fa-warning fa-2x" ></span>
            <span className="text">{props.msgWarning}</span>
          </div>                                             
        </div>
      </div>
    )
}

