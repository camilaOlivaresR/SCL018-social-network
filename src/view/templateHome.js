import { postear, readData, /*deleteDoc*/  } from '../lib/firebase.js';

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
  
  <!--<main>
    <div class="container-wall">
      <img src="img/logo.png" alt="">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    
    <ul style="list-style: none;">
      <li><img class="iconpost" src="img/10.png" alt="like"></li>
      <li><img class="iconpost" src="img/11.png" alt="comment"></li>
      <li><img class="iconpost" src="img/12.png" alt="share"></li>
      <li><img class="iconpost" src="img/14.png" id="delete-btn" alt="delete"></li>
      <li><img class="iconpost" src="img/13.png" alt="edit"></li>
    </ul>
    </div>
   
  </main>

</div>`;

  containerHome.innerHTML = viewHome;
  const post = (publicaciones) => {
    publicaciones.forEach((element) => {
      containerHome.querySelector('#publicaciones').innerHTML += `
      <div class= "contenedorPost">
      <p name="publication" class ="publish" id="${element.id}">${element.title}</p>
      </div>
      <div class="container-wall">
      <ul class ="like-icons" style="list-style: none;">
        <li><img class="iconpost" src="img/10.png" alt="like"></li>
        <li><img class="iconpost" src="img/11.png" alt="comment"></li>
        <li><img class="iconpost" src="img/12.png" alt="share"></li>
        <li><img class="iconpost" src="img/13.png" alt="edit"></li>
        <li><img class="iconpost" src="img/14.png" alt="delete"></li>
      </ul>
      </div>`;
    });
  };

  readData(post); // callback
  const titulo = containerHome.querySelector('#publish-btn');
  titulo.addEventListener('click', () => {
    const input = containerHome.querySelector('#title').value;
    const input2 = containerHome.querySelector('.publish').value;
    console.log(input, input2);
    postear(input);
  });

 /* const erase = containerHome.querySelector('#delet-btn');
  deleteBtn.forEach((btn) => {
    erase.addEventListener('click', (e) =>{
      // if(confirm('¿Estas seguro de eliminar tu post? '))
      deleteDoc(id);
  })

})*/


  return containerHome;
};


