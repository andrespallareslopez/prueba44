import React,{useEffect} from 'react'
import IMask from 'imask'
//import Inputmask from 'inputmask'

export const MyInputDateTime = (props) => {
   useEffect(()=>{
    let id=props.id;
      
    let selectorInput=document.querySelector('#'+id+' .input');
    
     let selectorWarning = document.querySelector('#'+id+' .label-warning');
     console.dir(selectorWarning);
     if (selectorInput){
        selectorInput.addEventListener('focus',function(e){
            //console.dir(e);
        })
        selectorInput.addEventListener('blur',function(e){
            //console.dir(e);
            if (props.required){
                if (selectorInput.value){
                    selectorWarning.style.display='none';
                }else{
                    selectorWarning.style.display='block';
                }
            }
        });            
    }
    if (selectorWarning){
        selectorWarning.style.display='none';
    }
    //Inputmask({ regex: "\\d*" }).mask(selectorInput);
    //IMask(selectorInput,{mask:/^[0-9]*$/});
    //var momentFormat = 'YYYY/MM/DD HH:mm';
    var momentFormat = 'DD/MM/YYYY HH:mm';
    var momentMask = IMask(selectorInput, {
    mask: Date,
    pattern: momentFormat,
    lazy: false,
    min: new Date(1900, 0, 1),
    max: new Date(9999, 0, 1),

    format: function (date) {
        return moment(date).format(momentFormat);
    },
    parse: function (str) {
        return moment(str, momentFormat);
    },

    blocks: {
        YYYY: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 9999
        },
        MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12
        },
        DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31
        },
        HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 23
        },
        mm: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59
        }
    }
    });

   
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
            <input type="text"  placeholder={props.msgPlaceHolder} className="input" />
          </div>
          <div className="label-warning" >
            <span className="logo fa fa-warning fa-2x" ></span>
            <span className="text">{props.msgWarning}</span>
          </div>                                             
        </div>
      </div>
    )
}