/*import { readData,auth, eraseDoc,}  from '../lib/firebase.js';

    const post = (publicaciones) => {
   // publicaciones.forEach((element) => {
      const postUser = containerHome.querySelector('#publicaciones');
      postUser.innerHTML = '';
      const containerPost = document.createElement('div');
      const viewPost = `
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
  
  readData().then((value) => post(value)).catch((error) => console.error(error));

}
*/