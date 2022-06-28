import React from 'react'
import './Aboutme.css'
import {MdComputer} from 'react-icons/md'
import {BsHeadphones} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import Codebutton from '../../Components/codebutton/Codebutton'
import Minibutton from '../../Components/minibutton/Minibutton'
import {SiMinutemailer} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
function Aboutme() {
  return (
    <div className='about'>
      <div className="about__div--title">

      <h1 className="about__h1--title"></h1>
      </div>
      <div className="about__div--pcontent">

      <p className='about__p--intro'>Hola, soy Adrian Eduardo Treviño Peña , Tengo 19 años, y soy estudiante en el 
        Tecnologico de Monterrey. Y aqui puedes echar un vistazo a lo que eh estado haciendo 🚀</p>
        <br/>
        <br/>
        <h2>Cosas para checar 🔍</h2>
        <Codebutton link="/code"texto = "Checa mis proyectos de programacion" icono = {<MdComputer className='about__icon'/>}/>
        <Codebutton link ="/music"texto = "Checa mis proyectos de musica" icono = {<BsHeadphones className='about__icon'/>}></Codebutton>
        <div className='minibuttoncontainers'>
          <Minibutton texto = "Checa mi github" icono = {<AiFillGithub className='icon'/>} link ="https://github.com/Adrian-007391"/>
          <Minibutton texto = "mandame un email" icono = {<SiMinutemailer className='icon'/>} link="mailto:eduardotrevinop@yahoo.com.mx"/>
          <Minibutton texto = "Checa mi twitter" icono = {<BsTwitter className='icon'/>} link ="https://twitter.com/AdrianEduardoT5"/>
        </div>

      </div>

    </div>
  )
}

export default Aboutme
