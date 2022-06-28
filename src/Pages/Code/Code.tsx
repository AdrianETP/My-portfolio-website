import React from 'react'
import './Code.css'
import Minibutton from '../../Components/minibutton/Minibutton';
import {AiFillFileMarkdown,AiFillCloud} from 'react-icons/ai';
import {  BsFillCalculatorFill} from 'react-icons/bs'
import TitleandDescription from '../../Components/titleanddescription/TitleandDescription';
import {RiMickeyFill } from 'react-icons/ri'
import {DiReact} from 'react-icons/di'
function Code(){
      return(
           <div className='Code'>
                 <TitleandDescription titulo='Mis Proyectos de Programación 💻' sub='Mi Historia como Programador 👨‍💻' text='Comencé a programar en la preparatoria y desde ese momento no he vuelto atrás. 'text2='Me apasiona mucho el tema de las automatizaciones y el diseño web. Por lo tanto, muchos de mis proyectos se enfocan en estas dos cosas. He utilizado lenguajes como Python, Javascript, Typescript, C++, C#, R, Matlab y librerias como React . '/>

                 <div className='minibuttoncontainers'>
                       <Minibutton texto = "Mi editor de  markdown con React" link ="https://adrian-007391.github.io/md_editor_react/" icono ={<AiFillFileMarkdown className='icon'/>}/>

                       <Minibutton texto = "Mi Calculadora con python" icono = {<BsFillCalculatorFill className='icon'/>} link= "https://github.com/Adrian-007391/Aplicacion_calculadora_python"/>
                       <Minibutton texto ="Galletero Mickey Mouse con Matlab" icono={<RiMickeyFill className='icon'/>} link="https://github.com/Adrian-007391/modelacion-galletero-mickey-mouse"/>
                       <Minibutton texto ="Análisis Medio Ambiente con R" icono = {<AiFillCloud className='icon'/>} link ="https://github.com/Adrian-007391/Analisis-estadistico-de-componentes-da-inos-en-el-medio-ambiente" />
                       <Minibutton texto="Github de esta página hecha con react" icono ={<DiReact className='icon'/>} link="https://github.com/Adrian-007391/My-portfolio-website"/>
                       
                 </div>
           </div>
      );
};
export default Code;
