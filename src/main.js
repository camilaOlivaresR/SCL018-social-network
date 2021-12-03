import {
  changeRoute,
} from './lib/router.js';
/*import {
  observador,
} from './lib/firebase.js';*/

const init = () => {
  window.location.hash = '#/login';
  changeRoute(window.location.hash);
  /*observador();*/
};
window.addEventListener('load', init);
window.addEventListener('hashchange', () => {
  changeRoute(window.location.hash);
  /*observador();*/
});
