import React from 'react'
import ReactDOM from 'react-dom'

import 'src/components/buttons/03buttonmovile01.css';

var MyNav=() => {
   return (
   <div>    
    <button type="button" id="btn-toggle-left" className="nav-mobile ripple push-float-left">
    <i className="fa fa-bars fa-2x" ></i>  
    </button>

    <button type="button" id="btn-toggle-right" className="nav-mobile ripple push-float-right">
    <i className="fa fa-list fa-2x" ></i>
    </button>
    <button type="button" id="btn-toggle-sign-in" className="nav-mobile ripple push-float-right">
    <i className="fa fa-sign-in fa-2x" ></i>  
    </button>
   </div>
   );

}

export default MyNav;