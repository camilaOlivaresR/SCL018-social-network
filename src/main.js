
import {changeRoute} from './lib/router.js';
import { register } from './view/register.js';





const init = () => {
  
   window.location.hash= '#/login'
   changeRoute(window.location.hash);
  /* window.location.hash= '#/templateHome'
   changeRoute(window.location.hash);*/
}
 window.addEventListener('load', init)
 window.addEventListener('hashchange', () =>{
    changeRoute(window.location.hash);
    
})