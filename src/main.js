// Este es el punto de entrada de tu aplicacion


import {changeRoute} from './lib/router.js';
import { register } from './view/register.js';



const init = () => {
   // document.getElementById("root").appendChild(login());
   window.location.hash= '#/login'
   changeRoute(window.location.hash);
}
 window.addEventListener('load', init)
 window.addEventListener('hashchange', () =>{
    changeRoute(window.location.hash);
    
})