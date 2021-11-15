// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';
//import { menu } from './view/templateMenu.js'
//import { login } from './view/login.js';
//import {changeRoute} from './lib/router.js';
import { register } from './view/register.js';
//myFunction();

//document.getElementById("root").innerHTML = menu();
//document.getElementById("root").appendChild(login());
document.getElementById("root").appendChild(register());


/*const init = () => {
   // document.getElementById("root").appendChild(login());
    window.addEventListener('hashchange', () =>{
        window.location.hash= '#/login'
        console.log(window.location.hash);
        changeRoute(window.location.hash);
        
    })
}
 window.addEventListener('load', init)*/