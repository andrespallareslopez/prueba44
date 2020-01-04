import React,{useEffect} from 'react';
//import IMask from 'imask';
import Cleave from 'cleave';
//import Inputmask from 'inputmask'
import {UXValidation} from 'uxvalidation'
import {MyInputTemplate} from 'wcinputtemplate'

export const MyInputCreditCard = (props) => {
     
     useEffect(()=>{
        new UXValidation(props,({selectorInput})=>{
          new Cleave(selectorInput,{
              creditCard:true,
              onCreditCardTypeChanged: function(type){

              }
          })
        
     });
         
        
        //Inputmask({ regex: "\\d*" }).mask(selectorInput);
        /*
        IMask(selectorInput,{mask:props.mask,
                             lazy:false
                            })
        */
        //Informacion de como configurar IMask
        /*https://imask.js.org/guide.html#getting-started*/
        
    },[])
     
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
              <input type="text" placeholder={props.msgPlaceHolder} className="input" />
            </div>
            <div className="label-warning" >
              <span className="logo fa fa-warning fa-2x" ></span>
              <span className="text">{props.msgWarning}</span>
            </div>                                             
          </div>
        </div>
        */
    )
}