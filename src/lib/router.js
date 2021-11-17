
import { login } from '../view/login.js';
import { register } from '../view/register.js';

export const changeRoute = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = "";
    switch (hash) {
        case '#/':
        case "#/login":
            containerRoot.appendChild(login());
            break;

        /*case '#/templateHome':
            //containerRoot.appendChild(templateHome());
            break;*/

        case '#/register':
            containerRoot.appendChild(register());
            break;


        default:
            containerRoot.innerHTML = `<h2>No Existe</h2>`
    };
}

