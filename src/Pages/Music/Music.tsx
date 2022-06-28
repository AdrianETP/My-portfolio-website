import React from 'react'
import './Music.css'
import TitleandDescription from '../../Components/titleanddescription/TitleandDescription';
import Minibutton from '../../Components/minibutton/Minibutton';
import {GiGuitarHead, GiLovers ,GiAudioCassette, GiLockedHeart} from 'react-icons/gi'
function Music(){
      return(
            <div className='music'>
                 <TitleandDescription titulo='Mis proyectos musicales 🎸' sub='Mi historia como músico 🥁' text='He tocado música desde que era chiquito, pero el momento en el que lo tomé enserio fue en la preparatoria en una clase de composición musical. Desde esas primeras clases decidí que la música sería una parte importante de mi vida.' 
                  text2='Empecé a componer mis canciones, con las cuales recibí premios en concursos de talento y aclamaciones de quienes las escuchaban. Por lo tanto, decidí subirlas a todas las plataformas de streaming' />
                  <div className='minibuttoncontainers'>
                        <Minibutton texto="Carta a mis demonios" link ="https://ps.onerpm.com/8782602508" icono={<GiGuitarHead className='icon'/>}/>
                        <Minibutton texto="Nadie más" link="https://ps.onerpm.com/1662875779" icono = {<GiLovers className='icon'/>}/>
                        <Minibutton texto = "Te hice canción" link ="https://onerpm.link/112868894212" icono = {<GiAudioCassette className='icon'/>}/>
                        <Minibutton texto = "Promesas" link ="https://ps.onerpm.com/9021901407" icono ={<GiLockedHeart className='icon'/>}/> 
                  </div>
           </div>
      );
}
export default Music;

