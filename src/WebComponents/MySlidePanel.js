import React,{useEffect} from 'react'

import {UXSlidePanels} from 'uxslidepanels'
import {MySlidePanelDetail} from 'wcslidepaneldetail'

import 'css04slidecontainer'
import 'css03listgroupbuttons'

export const MySlidePanel = (props) => {
    useEffect(()=>{
      //Este componente si tiene que tener el setTimeout
      let timer=setTimeout( () => {
        console.dir(props)
        let slidepaneldetail = new UXSlidePanels({
          container:".slide-container .slide-items",
          data: props.datalist,
          textTemplate: MySlidePanelDetailRender
        });
        //const sizes=slidepaneldetail.getSizes(props.datalist);
        //console.dir(sizes) 
        clearTimeout(timer)
        
    }, 750 )
     
    },[]);
    
    /*
    
    */
    return (
      <div className="slide-container">
        <button className="slide-button left">
          <i className="fa fa-chevron-left fa-2x"></i>
        </button>
        <div className="slide-items">

        </div>
        <button className="slide-button right">
          <i className="fa fa-chevron-right fa-2x"></i>
        </button>
      </div>
    );
}
const MySlidePanelDetailRender = (props) => {

    return (
        <ul className="slide-container-items">
               {
                props.sizes.pages.map(function(page,i){     
                 return  (
                 <li className="slide-item" key={i} >
                       <div className="list-grp-buttons list-center">
                       {
                           page.slides.map(function(slide,j){                                 
                           //console.dir(slide);
                            return (
                                <a className="list-grp-button box-shadow-3" key={j}  data-codigo={slide.codigo} href="#"  >
                                    <div className="list-grp-content-top" >
                                    <span className="list-grp-content-text list-grp-context-text-center" >{slide.categoria}</span>
                                    </div>  
                                </a>
                            )  
                           })
                       }
                       </div>
                 </li>
                 )
                })
               } 
        </ul>
    )
}
