import {
  postear,
  readData,
  auth,
  eraseDoc,
  logOut,
} from '../lib/firebase.js';

export const home = () => {
  const containerHome = document.createElement('section');
  const viewHome = `
    <div class="container-home">
    <nav>
      
      <div class ="header1">
        <img class="logosportfemnav" src="img/logo.png" alt="Sportfem">
        <img class="icons"  id="btn-out" src="img/checkout.png" alt="menu">
        </div>
    
  </nav>
  <section class="container-home">
  <textarea type="text" placeholder="Publica aquí" id="title" cols="20" rows="10"class="espaciado"></textarea>
  <button class="publicar-btn" id="publish-btn">Publicar</button>
  </section> 
  <div id ="publicaciones" class="post">
  </div>
</div>`;

  containerHome.innerHTML = viewHome;
    // cerrar sesion
    const out = containerHome.querySelector('#btn-out');
    out.addEventListener('click', () => {
      logOut();
      window.location.hash = '#/login';
    });
    
   //crear nuevo nodo sustituir innerHtml por appendChild
   //crear post como nuevo nodo y luego agregar la siguiente funcion
   // adjuntar al nodo padre= containerHome.appendChild(post)
  const post = (publicaciones) => {
    publicaciones.forEach((element) => {
      containerHome.querySelector('#publicaciones').innerHTML += `
      <section class="public" id="${element.id}">
      <div class= "contenedorPost">
      <div class= "user-picture">
      <img class= "avatar" src="img/avatar.jpg" alt="avatar">  
      <h1 class="user-name">${element.username}</h1> 
      </div>
      <p name="publication" class="publish" id=${element.id}>${element.title}</p>
      </div>
      <div class="container-wall">
      <ul class ="like-icons" style="list-style: none;">
        <li><img class="iconpost" src="img/10.png" alt="like"></li>
        <li><img class="iconpost" src="img/11.png" alt="comment"></li>
        <li><img class="iconpost" src="img/13.png" alt="edit"></li>
        ${(element.userId === auth.currentUser.uid) ?
    ` <li><img src="img/14.png" alt="delete" class="delete-btn iconpost" id="${element.id}"></li>
          ` : ''
}
      </ul>
      </div>
      </section>`;
    });
  
    console.log(containerHome);
    const titulo = containerHome.querySelector('#publish-btn');
    titulo.addEventListener('click', () => {
      const input = containerHome.querySelector('#title').value;
      const input2 = containerHome.querySelector('.publish').value;
      postear(input , input2);
    });
    
    const referencia = containerHome.querySelector('.public')
    console.log(referencia);
    const botonDelete = containerHome.querySelectorAll('.delete-btn');
    botonDelete.forEach((btn) => {
      const id = btn.getAttribute('id');
      btn.addEventListener('click', () => {
        const confirm = window.confirm('¿Quieres eliminar esta publicación?');
        if (confirm) {
        eraseDoc(id);
        referencia.remove();
     
       
        }
      });
      //containerHome.innerHTML += post(); cambiarlo pro algo asi como post.remove()
    });
  };
  readData().then((value) => post(value)).catch((error) => console.error(error));
  return containerHome;
};

