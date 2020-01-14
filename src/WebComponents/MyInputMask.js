import React,{useEffect} from 'react';
import IMask from 'imask';
//import Inputmask from 'inputmask'

import {UXValidation} from 'uxvalidation'
import {MyInputTemplate} from 'wcinputtemplate'

export const MyInputMask = (props) => {
    
    useEffect(()=>{
     new UXValidation(props,({selectorInput})=>{
        //console.log("estoy dentro uxvalidation");
        IMask(selectorInput,{mask:props.mask,lazy:false})
     });
        
        //Inputmask({ regex: "\\d*" }).mask(selectorInput);
        //IMask(selectorInput,{mask:props.mask,lazy:false})
        //Informacion de como configurar IMask
        /*https://imask.js.org/guide.html#getting-started*/

    },[])
     
    return (
      <MyInputTemplate {...props} />

    
      )
}