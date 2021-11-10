import { signIn } from './loginFirebase.js';

export const login = () => {
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
  <p>Regístrate con :</p>
   <input type= "image" src="/img/google1.png"  id ="btnGoogle" class="btn" alt="">
  </div>
  <p>Si no tienes una cuenta <a href="#">Regístrate</a></p>
  </div>
  `;
  document.getElementById('btnGoogle').addEventListener('click', () => {
    signIn();
  });
  return viewLogin;
};
