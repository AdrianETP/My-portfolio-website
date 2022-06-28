import React from 'react'
import './Music.css'
import TitleandDescription from '../../Components/titleanddescription/TitleandDescription';
import Minibutton from '../../Components/minibutton/Minibutton';
import {GiGuitarHead, GiLovers ,GiAudioCassette, GiLockedHeart} from 'react-icons/gi'
function Music(){
      return(
            <div className='music'>
                 <TitleandDescription titulo='Mis proyectos musicales 🎸' sub='Mi historia como musico 🥁' text='He tocado musica desde que era chiquito, pero el momento en el que lo tome enserio fue en la Preparatoria en una clase de composicion musical. Desde esas primeras clases decidi que la musica sería una parte importante de mi vida.' 
                  text2='Empecé a componer mis canciones, con las cuales recivi premios en concursos de talento y aclamaciones de quienes las escuchaban. Por lo tanto, decidi subirlas a todas las plataformas de streaming' />
                  <div className='minibuttoncontainers'>
                        <Minibutton texto="Carta a mis demonios" link ="https://ps.onerpm.com/8782602508" icono={<GiGuitarHead className='icon'/>}/>
                        <Minibutton texto="Nadie mas" link="https://ps.onerpm.com/1662875779" icono = {<GiLovers className='icon'/>}/>
                        <Minibutton texto = "Te hice cancion" link ="https://onerpm.link/112868894212" icono = {<GiAudioCassette className='icon'/>}/>
                        <Minibutton texto = "Promesas" link ="https://ps.onerpm.com/9021901407" icono ={<GiLockedHeart className='icon'/>}/> 
                  </div>
           </div>
      );
}
export default Music;

