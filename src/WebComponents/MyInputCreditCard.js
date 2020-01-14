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
       
    )
}