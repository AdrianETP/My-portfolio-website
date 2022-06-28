import React from 'react'
import './Music.css'
import TitleandDescription from '../../Components/titleanddescription/TitleandDescription';

function Music(){
      return(
            <div className='music'>
                 <TitleandDescription titulo='mis proyectos musicales 🎸' sub='Mi historia como musico 🥁' text='Eh tocado musica desde que era chiquito, pero el momento en el que lo tome enserio, fue en la prepa, en una clase de composicion musical. Y desde esas primeras clases decidi que la musica seria una parte importante de mi vida. Empece a componer mis canciones, las cuales subo a todas las plataformas de streaming' />
           </div>
      );
}
export default Music;

