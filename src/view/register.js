import { signInEmail } from "../lib/firebase.js";
export const register = () => {
  const formRegister = document.createElement("section");
  const viewRegister = `
    <img src="/img/logo.png" class="logo" alt="Logo Sport Fem">
    <div class="container">
    <form class="login">
    <section>
        <input type="text"class="form" id="name"
          placeholder="Ingresa tu nombre"/>
        </section>
        <section>
          <input type="text"class="form" id="email"
          placeholder="Ingresa tu email"/>
          </section>
          <section>
        <input type="text" class="form" id="password"
          placeholder="Ingresa tu contraseña"/>
          </section>
          <button class="formBtn">Registrar</button>`

  formRegister.innerHTML = viewRegister;
  containerLogin.querySelector("#formBtn").addEventListener("click", () => {
    signInEmail();
  });
  return formRegister;
};