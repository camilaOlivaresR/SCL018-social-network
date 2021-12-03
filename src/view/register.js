import { newEmail } from '../lib/firebase.js';

export const register = () => {
  const formRegister = document.createElement('section');
  const viewRegister = `
    <img src="/img/logo.png" class="logo" alt="Logo Sport Fem">
    <div class="container">
    <form class="login">
    <section>
        <input type="text"class="form" 
          placeholder="Ingresa tu nombre"/>
        </section>
        <section>
          <input type="email"class="form" id="email"
          placeholder="Ingresa tu email"/>
          </section>
          <section>
        <input type="password" class="form"id="password"
          placeholder="Ingresa tu contraseña"/>
          </section>
          <button class="formBtn" id="newRegister">Registrar</button>`;

  formRegister.innerHTML = viewRegister;

  formRegister.querySelector('#newRegister').addEventListener('click', () => {
    const email = formRegister.querySelector('#email').value;
    const newpassword = formRegister.querySelector('#password').value;
    newEmail(email, newpassword);
  });

  return formRegister;
};
