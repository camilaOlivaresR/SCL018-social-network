import { signInGoogle, /*logEmail*/} from "../lib/firebase.js";

export const login = () => {
  const containerLogin = document.createElement("section");
  const viewLogin = `

  <div class="container">
  <img src="/img/logo.png" class="logo" alt="Logo Sport Fem">
  <div class="loginContainer">
  <form class="login">
  <section>
      <input type="text"class="name" id"loginEmail"
        placeholder="Ingresa tu email"/>
      </section>
      <section>
      <input type="password" class="password" id"loginPassword"
        placeholder="Ingresa tu contraseña"/>
  </section>
  </form>
  <div class="btn">
  <button type="submit" class="btn-ing" id"btn-login">Ingresar</button>
  </div>
  <p>Accede con :<p>
  <div class ="google>"
  <a><img src="/img/google1.png"  id="loginGoogle"></a>
  </div>
  <p>Si no tienes una cuenta <a href="#/register" id="registerBtn">Regístrate</a></p>
  </div>
  </div>
  `;
  containerLogin.innerHTML = viewLogin;
  containerLogin.querySelector("#loginGoogle").addEventListener("click", () => {
    signInGoogle();
  });
 /* containerLogin.querySelector("#btn-login").addEventListener("click", () => {
    logEmail();
  });
  */
 

  return containerLogin;

};
