import { signInGoogle, logEmail} from "../lib/firebase.js";

export const login = () => {
  const containerLogin = document.createElement("section");
  const viewLogin = `
  //donde iria nuestra ruta inicial 
  <div class="container">
  <img src="/img/logo.png" class="logo" alt="Logo Sport Fem">
  <div class="loginContainer">
  <form class="login">
  <section>
      <input type="text"class="name" id"logEmail"
        placeholder="Ingresa tu email"/>
      </section>
      <section>
      <input type="text" class="password" id"logPassword"
        placeholder="Ingresa tu contraseña"/>
  </section>
  </form>
  <div class="btn">
  <button type="submit" class="btn-ing" id"btn-login">Ingresar</button>
  </div>
  <div class ="google>"
  <p>Accede con :<p>
  <a id""><img src="/img/google1.png"  id="loginGoogle"></a>
  <p>Si no tienes una cuenta <a href="#/registro" id="registerBtn">Regístrate</a></p>
  </div>
  </div>
  </div>
  `;
  containerLogin.innerHTML = viewLogin;
  containerLogin.querySelector("#loginGoogle").addEventListener("click", () => {
    signInGoogle();
  });
  containerLogin.querySelector("#btn-login").addEventListener("click", () => {
    logEmail();
  });
  
  containerLogin.querySelector("#registerBtn").addEventListener("click", () => {
    window.location.hash = "#/register";
  });


  return containerLogin;

};
