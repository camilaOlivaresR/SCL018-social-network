import { login } from '../view/login.js';
import { register } from '../view/register.js';

export const changeRoute = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = "";
    if (['#/','#/register','#/profile','#/home'].includes(hash) ) {
        containerRoot.appendChild(login());
    }else if (hash === "#/login") {
        containerRoot.appendChild(login()); 
    } else if (hash === "#/register") {
        containerRoot.appendChild(register());
      } // else if (hash === "#/templateHome") {
      //   containerRoot.appendChild(templateHome());
      // }
    };

/*export const changeRoute = (hash) => {
      const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = "";
    if (['#/','#/register','#/profile','#/home'].includes(hash) ) {
        return showTemplate(hash)

    } else {
        return showTemplate(hash)
    }
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = "";
    switch (hash) {
        case '#/':
        case "#/login":
            containerRoot.appendChild(login());
            break;


        case '#/register':
            containerRoot.appendChild(register());
            break;
        default:
            containerRoot.innerHTML = `<h2>No Existe</h2>`*/