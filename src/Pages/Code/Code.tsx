import React from 'react'
import './Code.css'
import Minibutton from '../../Components/minibutton/Minibutton';
import {AiFillFileMarkdown} from 'react-icons/ai';
import {  BsFillCalculatorFill} from 'react-icons/bs'
import TitleandDescription from '../../Components/titleanddescription/TitleandDescription';
function Code(){
      return(
           <div className='Code'>
                 <TitleandDescription titulo='Mis proyectos de Programacion 💻' sub='mi historia como programador 👨‍💻' text='Empece con la programacion en la prepa. Y desde ese momento,no eh vuelto atras. Eh utilizado lenguajes como python, javascript, typescript, c++, C#, R y librerias como React. Y me apasiona mucho el tema de las comatizaciones y el diseño web. Por eso, muchos de mis proyectos se enfocan en estas dos cosas'/>

                 <div className='minibuttoncontainers'>
                       <Minibutton texto = "Mi editor de  markdown" link ="https://adrian-007391.github.io/md_editor_react/" icono ={<AiFillFileMarkdown className='icon'/>}/>

                       <Minibutton texto = "Mi Calculadora con python" icono = {<BsFillCalculatorFill className='icon'/>} link= "https://github.com/Adrian-007391/Aplicacion_calculadora_python"/>
                 </div>
           </div>
      );
};
export default Code;
