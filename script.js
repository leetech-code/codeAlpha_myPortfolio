//toggle icon bar //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


//scroll section //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      //active navbar //
      navLinks.forEach(Links => {
        Links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  //remove toggle icon and navbar when click on navlinks
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}


// skills section //
  window.addEventListener('scroll', () => {
    const skills = document.querySelector('.skills-container');
    const rect = skills.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      skills.classList.add('visible');
    }
  });

