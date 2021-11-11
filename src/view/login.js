import { signInGoogle } from "../lib/firebase.js";

export const login = () => {
  const containerLogin = document.createElement("section");
  const viewLogin = `
  <div class="container">
  <img src="/img/logo.png" class="logo" alt="Logo Sport Fem">
  <div class="loginContainer">
  <form class="login">
  <section>
      <input type="text"class="name"
        placeholder="Ingresa tu email"/>
      </section>
      <section>
      <input type="text" class="password"
        placeholder="Ingresa tu contraseña"/>
  </section>
  </form>
  <div class="btn">
  <button type="submit" class="btn-ing">Ingresar</button>
  </div>
  <p>Accede con :</p>
  <button id="loginGoogle">google</button>
   <a href="#" class="fa fa-google" ></a>
  </div>
  <p>Si no tienes una cuenta <a href="#">Regístrate</a></p>
  </div>
  `;
  containerLogin.innerHTML = viewLogin;
  containerLogin.querySelector("#loginGoogle").addEventListener("click", () => {
    signInGoogle();
  });

  return containerLogin;

};
/*const btn = document.querySelector("#loginGoogle");
  btn.addEventListener("click", () => {
   register()
 })
const btnLogin = divElement.querySelector('#loginGoogle');
btnGoogle.addEventListener('click',() =>{
alert():
});*/
