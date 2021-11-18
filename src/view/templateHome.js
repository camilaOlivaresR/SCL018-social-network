export const home = () => {
  const containerHome = document.createElement("section");
  const viewHome = `
    
    <div class="container-home">

    <nav>
      <ul  style="list-style: none;" class="container-nav">
        <li><img class="logosportfemnav" src="img/logo.png" alt="Sportfem"></li>
        <li><img class="icons"src="img/6.png" alt="search"></li>
        <li><img class="icons"src="img/8.png" alt="home"></li>
        <li><img class="icons" src="img/9.png" alt="events"></li>
        <li><img class="icons" src="img/7.png" alt="notifications"></li>
      </ul>
  </nav>


  <main>
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
</div>`;
  containerHome.innerHTML = viewHome;
  return containerHome;
};
