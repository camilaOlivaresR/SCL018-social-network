import { postear, readData } from "../lib/firebase.js";

export const home = () => {
  const containerHome = document.createElement("section");
  const viewHome = `
    
    <div class="container-home">
    <nav>
      <ul  style="list-style: none;" class="container-nav">
      <div class ="header1">
        <li><img class="logosportfemnav" src="img/logo.png" alt="Sportfem"></li>
        <li><img class="icons"src="img/6.png" alt="search"></li>
        </div>
        <div class ="header2">
        <li><img class="icons"src="img/8.png" alt="home"></li>
        <li><img class="icons" src="img/9.png" alt="events"></li>
        <li><img class="icons" src="img/7.png" alt="notifications"></li>
        </div>
      </ul>
  </nav>
  <section class="container-home">
  <input type="text" placeholder="titulo" maxlength="100" id="title" class="espaciado">
  <textarea name="publication" id="publish"  class="espaciado" cols="50" rows="10" placeholder="Escribe tu comentario"></textarea>
  <button class="publicar-btn" id="publish-btn" class="espaciado">Publicar</button>
  </section> 
  
  <!--<main>
    <div class="container-wall"></div>
      <img src="img/logo.png" alt="">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    
    <ul style="list-style: none;">
      <li><img class="iconpost" src="img/10.png" alt="like"></li>
      <li><img class="iconpost" src="img/11.png" alt="comment"></li>
      <li><img class="iconpost" src="img/12.png" alt="share"></li>
      <li><img class="iconpost" src="img/14.png" alt="delete"></li>
      <li><img class="iconpost" src="img/13.png" alt="edit"></li>
    </ul>
   
  </main>
  -->
</div>`;

  containerHome.innerHTML = viewHome;

  readData(); //callback
  const titulo = containerHome.querySelector("#publish-btn");
  titulo.addEventListener("click", () => {
    const input = containerHome.querySelector("#title").value;
    const input2 = containerHome.querySelector("#publish").value;
    console.log(input, input2);
    postear(input);
  });
  return containerHome;
};

export const post = () => {
  const viewPost = `${new titulo()}`;
  post.addEventListener("click", () => {
    container.innerHTML += post();
  });
};
