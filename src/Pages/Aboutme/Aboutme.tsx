import React from 'react'
import './Aboutme.css'
import {MdComputer} from 'react-icons/md'
import {BsHeadphones} from 'react-icons/bs'
import {AiFillGithub, AiFillInstagram} from 'react-icons/ai'
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

      <p className='about__p--intro'>Hola, soy Adrian Eduardo Treviño Peña, tengo 19 años, soy estudiante en el 
        Tecnologico de Monterrey. Aquí puedes echar un vistazo a lo que he estado haciendo 🚀</p>
        <br/>
        <br/>
        <h2>Cosas para checar 🔍</h2>
        <Codebutton link="/My-portfolio-website/code"texto = "Checa mis proyectos de programación" icono = {<MdComputer className='about__icon'/>}/>
        <Codebutton link ="/My-portfolio-website/music"texto = "Checa mis proyectos de música" icono = {<BsHeadphones className='about__icon'/>}></Codebutton>
        <div className='minibuttoncontainers'>
          <Minibutton texto = "Checa mi github" icono = {<AiFillGithub className='icon'/>} link ="https://github.com/Adrian-007391"/>
          <Minibutton texto = "Mándame un e-mail" icono = {<SiMinutemailer className='icon'/>} link="mailto:eduardotrevinop@yahoo.com.mx"/>
          <Minibutton texto = "Checa mi twitter" icono = {<BsTwitter className='icon'/>} link ="https://twitter.com/AdrianEduardoT5"/>
          <Minibutton texto="Checa mi instagram" link = "https://instagram.com/elvatodelaguitarra?igshid=YmMyMTA2M2Y=" icono ={<AiFillInstagram className='icon'/>}/>
        </div>

      </div>

    </div>
  )
}

export default Aboutme
