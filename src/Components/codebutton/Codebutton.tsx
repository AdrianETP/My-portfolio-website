import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Codebutton.css'
type Props ={
  texto:string;
  icono:any;
  link:string;
}
function Codebutton(props:Props){
  const gotolink = useNavigate();
  return(
      <div className="about__div--codebutton" onClick={()=>gotolink(props.link)}>
        <h3> {props.texto}</h3>
        {props.icono}
      </div>
  );

}
export default Codebutton;
