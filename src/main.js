import {
  changeRoute,
} from './lib/router.js';
import { observed } from './lib/firebase.js';

const init = () => {
  window.location.hash = '#/login';
  changeRoute(window.location.hash);
 // observed();
  
};
window.addEventListener('load', init);
window.addEventListener('hashchange', () => {
  changeRoute(window.location.hash);
  observed();

});
