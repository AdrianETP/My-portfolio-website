import React from 'react'
import './Aboutme.css'
import {MdComputer} from 'react-icons/md'
import {BsHeadphones} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import Codebutton from '../../Components/codebutton/Codebutton'
function Aboutme() {
  return (
    <div className='about'>
      <div className="about__div--title">

      <h1 className="about__h1--title"></h1>
      </div>
      <div className="about__div--pcontent">

      <p className='about__p--intro'>Hola, soy Adrian Eduardo Treviño Peña , Tengo 19 años, y soy estudiante en el 
        Tecnologico de Monterrey. Y aqui puedes echar un vistazo a lo que eh estado haciendo 🚀</p>
        <Codebutton link="/code"texto = "Checa mis proyectos de programacion" icono = {<MdComputer className='about__icon'/>}/>
        <Codebutton link ="/music"texto = "Checa mis proyectos de musica" icono = {<BsHeadphones className='about__icon'/>}></Codebutton>
      </div>

    </div>
  )
}

export default Aboutme
