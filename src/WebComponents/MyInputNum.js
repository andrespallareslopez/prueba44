import React from 'react'
import Inputmask from 'inputmask'

export const MyInputNum = (props) => {
 
    var timer = setTimeout(()=>{
        let id=props.id;
      
        let selectorInput=document.querySelector('#'+id+' .input');
        
         let selectorWarning = document.querySelector('#'+id+' .label-warning');
         console.dir(selectorWarning);
         if (selectorInput){
            selectorInput.addEventListener('focus',function(e){
                console.dir(e);
            })
            selectorInput.addEventListener('blur',function(e){
                console.dir(e);
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
        Inputmask({ regex: "\\d*" }).mask(selectorInput);
        clearTimeout(timer) 
      },50);
    return (
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

    )
}

