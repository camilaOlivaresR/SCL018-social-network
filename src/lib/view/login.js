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
  
  
  <input type= "image" src="/img/google1.png"  class="btn" alt="">
  
  </div>
  <p>Si no tienes una cuenta <a href="#">Regístrate</a></p>
  </div>
  `;
  return viewLogin;
};
