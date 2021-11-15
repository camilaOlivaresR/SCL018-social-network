import { login } from './view/login.js';
import { register } from './view/register.js';

export const changeRoute = (hash => {
    if (hash === '#/registro') {
        return showTemplate(hash)

    } else {
        return showTemplate(hash)
    }
})
const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = register();
    switch (hash) {
        case '#/register':
            containerRoot.appendChild(register());
            break;
        default:
            containerRoot.innerHTML = '<h2>No Existe</h2>'
    }
}