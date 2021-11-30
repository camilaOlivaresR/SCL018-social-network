import {
  postear,
  readData,
  auth,
  eraseDoc,
} from '../lib/firebase.js';
export const home = () => {
  const containerHome = document.createElement('section');
  const viewHome = `
    <div class="container-home">
    <nav>
      <ul  style="list-style: none;" class="container-nav">
      <div class ="header1">
        <li><img class="logosportfemnav" src="img/logo.png" alt="Sportfem"></li>
        <li><img class="icons"src="img/6.png" alt="search"></li>
        </div>
        <div class ="header2">
        <a href="#/templateHome"><img class="icons" id="home" src="img/8.png" alt="home"></a>
        <li><img class="icons" src="img/9.png" alt="events"></li>
        <li><img class="icons" src="img/7.png" alt="notifications"></li>
        <a href="#/profile"><img class="icons" id="profile" src="img/menu.png" alt="menu"></a>
        </div>
      </ul>
  </nav>
  <section class="container-home">
  <textarea type="text" placeholder="Publica aquí" id="title" cols="20" rows="10"class="espaciado"></textarea>
  <button class="publicar-btn" id="publish-btn">Publicar</button>
  </section> 
  <section id = "publicaciones" class="post">
  </section>
</div>`;

const publi = document.createElement("section");
  containerHome.innerHTML = viewHome;
  const post = (publicaciones) => {
    console.log(publicaciones);
    publicaciones.forEach((element) => { 
      containerHome.querySelector('#publicaciones').innerHTML += `
      <div class= "contenedorPost">
      <p name="publication" id="publish">${element.title}</p>
      </div>
      <div class="container-wall">
      <ul class ="like-icons" style="list-style: none;">
        <li><img class="iconpost" src="img/10.png" alt="like"></li>
        <li><img class="iconpost" src="img/11.png" alt="comment"></li>
        <li><img class="iconpost" src="img/12.png" alt="share"></li>
        <li><img class="iconpost" src="img/13.png" alt="edit"></li>
        ${ (element.userId === auth.currentUser.uid)?
          ` <li><img src="img/14.png" alt="delete" class="delete-btn iconpost" value ="${element.id}"></li>
          `:""
        }
      </ul>
      </div>`;

      /*if (element.userId === auth.currentUser.uid) {
        containerHome.querySelector("#publicaciones").innerHTML += `
        <li><img class="iconpost" src="img/14.png" alt="delete" class= "delete-btn" value ="${element.id}"></li>
        `;
      }*/
    });
  };

  readData(post); // callback
  const titulo = containerHome.querySelector('#publish-btn');
  titulo.addEventListener('click', () => {
    const input = containerHome.querySelector('#title').value;
    const input2 = containerHome.querySelector('#publish').value;
    postear(input);
  });

  const botonDelete = containerHome.querySelector('.delete-btn');
  botonDelete?.forEach((btn) => {
    console.log(btn)
    const id = btn.value
    btn.addEventListener('click', () => {
      eraseDoc(id);
    })
  });
  return containerHome;
};