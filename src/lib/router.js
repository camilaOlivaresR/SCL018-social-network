/* eslint-disable import/no-cycle */
import { login } from '../view/login.js';
import { register } from '../view/register.js';
import { home } from '../view/templateHome.js';
import { auth } from './firebase.js';

export const changeRoute = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '#/':
    alert('Tines que registrarte');
      break;
   
      case '#/login':
      
      containerRoot.appendChild(login());
      
      break;

    case '#/register':
      containerRoot.appendChild(register());
      break;

    case '#/templateHome' :
    
      containerRoot.appendChild(home()) 
     
     
      break;
    
        default:

      containerRoot.innerHTML = '<h2 class="default">No Encontrado</h2>';
  }
};
/*
if (element.userId === auth.currentUser.uid){
 
}else{

}
 */