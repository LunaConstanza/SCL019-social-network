import { router } from '../lib/router.js';
import {initial} from '../componet/initial.js'
  // evento load: se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.
 
 
 const iniciar = () => {
    console.log(window.location.hash);
    
    document.getElementById('root').appendChild(initial());
 }
 
  // evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado
  window.addEventListener('hashchange', () => {
     router(window.location.hash);
  });

  window.addEventListener('load',iniciar);