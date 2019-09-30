import React from 'react'

const MyPage01= (props) => {
    
   return (
    <div id={props.id} className="wrapper page child" >
        <div className="nav" data-bind-html="content:onLoadContent">
            <nav  >
            <button type="button" id="btn-toggle-back-3" className="nav-mobile push-float-left" data-bind-style="display:cadena" data-bind-on="click:onClick" >
                <span className="fa fa-chevron-left" ></span>
                <span className="texto-btn" data-bind-to="text:labelback" > Back</span>
            </button>
            </nav>
        </div>  
        <div className="main" >
        <main>
            <div className="box content" data-bind-html='include:src/shared/templ/list-collection.html' >
                    
            </div>
        </main>
        </div>
        <div className="footer">
            <footer  data-bind-html='property:textTemplate'>
                
            </footer>
        </div>
    </div>

   )
}

export default MyPage01;


/*
<div id={{id}} class="wrapper page child" >
    <div class="nav" data-bind-html="content:onLoadContent">
        <nav  >
           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left" data-bind-style="display:cadena" data-bind-on="click:onClick" >
             <span class="fa fa-chevron-left" ></span>
             <span class="texto-btn" data-bind-to="text:labelback" > Back</span>
           </button>
        </nav>
    </div>  
    <div class="main" >
       <main>
          <div class="box content" data-bind-html='include:src/shared/templ/list-collection.html' >
                
          </div>
       </main>
    </div>
    <div class="footer">
        <footer  data-bind-html='property:textTemplate'>
            
        </footer>
    </div>
</div>

*/