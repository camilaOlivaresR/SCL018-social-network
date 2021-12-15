import {
  addData,
  readData,
  auth,
  eraseDoc,
  logOut,
  editPost,
} from '../lib/firebase.js';

export const home = () => {
  const containerHome = document.createElement('section');
  const viewHome = `
  <div class="container-home">
  <nav>
    <div class="header1">
      <img class="logosportfemnav" src="img/logo.png" alt="Sportfem">
      <img class="icons" id="btn-out" src="img/checkout.png" alt="menu">
    </div>
  </nav>
  <section class="container-home">
    <textarea type="text" placeholder="Publica aquí" id="title" cols="20" rows="10" class="espaciado"></textarea>
    <button class="publicar-btn" id="publish-btn">Publicar</button>
  </section>
  <section id="publicaciones" class="post">
  </section>
</div>`;
  containerHome.innerHTML = viewHome;

  const titulo = containerHome.querySelector('#publish-btn');
  titulo.addEventListener('click', () => {
    const input = containerHome.querySelector('#title').value;
    addData(input);
  });

  const post = (publicaciones ) => {
    containerHome.querySelector("#publicaciones").innerHTML = "";
    publicaciones.forEach((element) => {
     // console.log(element);
    // console.log('User Id:' + auth.currentUser.uid);
      containerHome.querySelector("#publicaciones").innerHTML += `
      <section class="public" id="${element.id}">
      <div class= "contenedorPost">
      <section class=name-avatar>
      <img class="avatar" referrerpolicy="no-referrer" src=${element.foto} alt="fotografia de perfil email">  
      <h1 class="user-name">${element.username}</h1> 
      </section>
      <p name="publication" id="publish">${element.title} </p>
      </div>
       <div class="container-wall">
      ${(element.userId === auth.currentUser.uid) ?
          ` <img src="img/14.png" alt="delete" class="delete-btn iconpost" id="${element.id}">
          <img class="iconpost" src="img/13.png" alt="edit"  id="${element.id}">
              ` : ''
        }
      </div>
      </section>`

      //input type capturar el value , o vaciarlo

      const referencia = containerHome.querySelector('.public')
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
      });
    });
  };
  readData(post);

  // editar, actualizar post:
  const editButton = containerHome.querySelectorAll('.iconpost');
  editButton.forEach((btn) => {
    const id = btn.getAttribute('id');
    btn.addEventListener('click', () => {
      btn.removeAttribute('readonly')
      editPost(id)
    })
  });



  // cerrar sesion
  const out = containerHome.querySelector('#btn-out');
  out.addEventListener('click', () => {
    logOut();
    window.location.hash = '#/login';
  });

  return containerHome;
};
