// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './view/templeteMenu.js';
import { login } from './view/login.js';
import { register } from './view/register.js';

myFunction();
//document.getElementById("root").innerHTML = menu();
document.getElementById("root").appendChild(login());
//document.getElementById("root").innerHTML = register();