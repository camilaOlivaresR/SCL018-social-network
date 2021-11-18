import { changeRoute } from "./lib/router.js";


const init = () => {

  
   window.location.hash= '#/login'
  // window.location.hash= '#/templateHome'
   changeRoute(window.location.hash);
 
}
 window.addEventListener('load', init)
 window.addEventListener('hashchange', () =>{
    changeRoute(window.location.hash);
    
})

