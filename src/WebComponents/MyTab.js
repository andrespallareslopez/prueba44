import React,{useEffect} from 'react'
import {UXTab} from 'uxtab'
import {MyPanelScrollContent} from 'wcpanelscrollcontent'
import {MySlidePanel} from 'wcslidepanel'
import {MyForm} from 'wcform'
import {datos,mesas,categorias,articulos} from 'listdatos'

import 'csstabs01'

export const MyTab = (props)=>{
    useEffect(()=>{
      console.log("Estoy dentro de useeffect");
      var tabs=new UXTab();
    },[])
    
    return (
       <div> 
        <div className="tab-container" >
            <div className="tab-controls">
                  <a className="ripple" href="#" >Mesas</a>
                  <a className="ripple" href="#" >Categorias</a>
                  <a className="ripple" href="#" >Articulos</a>
                  <a className="ripple" href="#" >Comandas</a>
            </div>  
            <div className="tab-items" >
              
                    <ul className="tab-container-items">
                            <li className="tab-item" id="tabMesas" name-container="Mesas">
                               <MyPanelScrollContent id="panelMesas" data={mesas}></MyPanelScrollContent>
                            </li>
                            <li className="tab-item" id="tabCategorias" name-container="Categorias">
                               <MySlidePanel datalist={categorias} id="panelCategorias"></MySlidePanel>
                            </li>
                            <li className="tab-item" id="tabArticulos" name-container="Articulos">
                               <MyPanelScrollContent id="panelArticulos" data={articulos}></MyPanelScrollContent>
                            </li>
                            <li className="tab-item" id="tabComandas" name-container="Comandas">
                               
                            </li>     
                          </ul>    
            </div>
         </div>
       </div>
    )
}


