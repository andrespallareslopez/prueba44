
import jquery from 'localjquery'    
import {util} from 'localutil';
import {components} from 'localcomponent';
import {UXScroll} from 'localuxscroll'
//console.dir(window.controls)
//var control=controls;
//console.dir(control);
var controls
;(function(ns,UXScroll,$){
    "use strict";
    ns.UXPanelScroll=(function(){ 
        return function(options){
            (function(options){
               options.id=options.id||undefined
               options.containerComponent=options.containerComponent||".panel-scroll-01"    
               options.btnup=options.btnup||"#btn-slide-up"
               options.btndown=options.btndown||"#btn-slide-down"  
               options.items=options.items||".panel-scroll-item"
               options.scroll=options.scroll||".panel-scroll-content";
               
               options.onItemClick=options.onItemClick||undefined
            })(options)
            this.initControl(options);
         
        }    
    })();
    
    ns.UXPanelScroll.prototype=new UXScroll();
    
    
    ns.UXPanelScroll.prototype.initevent=function(){
        var self=this
        //console.log("Estoy dentro de UXPanelScroll")        
        $(self.options.id+" "+self.options.containerComponent+" "+self.options.item).on("click",function(e){
            console.log("estoy en item click en componente con id:"+self.options.id)
            //console.dir(e.target)
            //console.dir(this)
            /*
            if (self.options.onClickMenu){
              self.options.onClickMenu.apply(self,[]);
            }
            */
            if (self.options.onItemClick){
              var itemText=this.textContent
              //console.log(itemText)
            
              self.options.onItemClick(itemText,e.target);
            }
        })
    }
  
    
})(controls=controls||{},UXScroll,jQuery)
     
var UXPanelScroll=controls.UXPanelScroll;
export {UXPanelScroll}

if (!window.controls)
   window.controls={}
        
util.addNameSpace(window.controls,controls);
     
    