export const profile = () => {
  const containerProfile = document.createElement('section');
  const viewProfile = `
<div class="container-home">
    <nav>
      <ul  style="list-style: none;" class="container-nav">
    
        <div class ="header2">
        <a href="#/templateHome"><img class="icons" id="home" src="img/8.png" alt="home"></a>
        <li><img class="icons" src="img/9.png" alt="events"></li>
        <li><img class="icons" src="img/7.png" alt="notifications"></li>
        <li><img class="icons" src="img/checkout.png" alt="menu"></li>
        </div>
      </ul>
      <div class ="header1">
      <img class="logosportfemnav" src="img/profile.png" alt="Sportfem">
      </div>
  </nav>`;



  containerProfile.innerHTML = viewProfile;
  return containerProfile;
};
