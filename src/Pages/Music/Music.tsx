import React from 'react'
import './Music.css'
import TitleandDescription from '../../Components/titleanddescription/TitleandDescription';
import Minibutton from '../../Components/minibutton/Minibutton';
import {GiGuitarHead, GiLovers ,GiAudioCassette, GiLockedHeart} from 'react-icons/gi'
function Music(){
      return(
            <div className='music'>
                 <TitleandDescription titulo='mis proyectos musicales 🎸' sub='Mi historia como musico 🥁' text='Eh tocado musica desde que era chiquito, pero el momento en el que lo tome enserio, fue en la prepa, en una clase de composicion musical. Y desde esas primeras clases decidi que la musica seria una parte importante de mi vida. Empece a componer mis canciones, las cuales subo a todas las plataformas de streaming' />
                  <div className='music__div--minibuttoncontainer'>
                        <Minibutton texto="Carta a mis demonios" link ="https://ps.onerpm.com/8782602508" icono={<GiGuitarHead className='icon'/>}/>
                        <Minibutton texto="Nadie mas" link="https://ps.onerpm.com/1662875779" icono = {<GiLovers className='icon'/>}/>
                        <Minibutton texto = "Te hice cancion" link ="https://onerpm.link/112868894212" icono = {<GiAudioCassette className='icon'/>}/>
                        <Minibutton texto = "Promesas" link ="https://ps.onerpm.com/9021901407" icono ={<GiLockedHeart className='icon'/>}/> 
                  </div>
           </div>
      );
}
export default Music;

