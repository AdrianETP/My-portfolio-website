import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Codebutton.css'
function Codebutton(props:any){
  const gotolink = useNavigate();
  return(
      <div className="about__div--codebutton" onClick={()=>gotolink("/code")}>
        <h3> {props.texto}</h3>
        {props.icono}
      </div>
  );

}
export default Codebutton;
