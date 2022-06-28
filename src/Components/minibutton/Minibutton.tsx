import React from 'react'
import './Minibutton.css'

function Minibutton(props:any){
      
      return(
            <div className='Minibutton__div' onClick={()=>window.open(props.link)}>
            <h2 >{props.texto}</h2>
            {props.icono}
           </div>
      );
}
export default Minibutton;

