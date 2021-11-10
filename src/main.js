// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templeteMenu.js';
//import { login } from './lib/view/login.js';
import { register } from './lib/view/register.js';

myFunction();
document.getElementById("root").innerHTML = menu();
//document.getElementById("root").innerHTML = login();
//document.getElementById("root").innerHTML = register();