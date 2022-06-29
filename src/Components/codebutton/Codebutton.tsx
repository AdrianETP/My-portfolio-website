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
        <h1 className='about__h1--text'> {props.texto}</h1>
        {props.icono}
      </div>
  );

}
export default Codebutton;
