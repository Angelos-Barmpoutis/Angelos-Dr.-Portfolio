// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 10;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul');
const instagramIcon = document.querySelector('.fa-instagram');

hamburger.addEventListener('click', hamburgerToggle);


function hamburgerToggle() {
  hamburger.classList.toggle("change");
  menu.classList.toggle('visible');

  if (menu.classList.contains('visible')) {
    document.querySelector('body').style.overflowY = 'hidden';
    instagramIcon.style.display = 'block';
  } else
   {
   document.querySelector('body').style.overflowY = 'scroll';
   instagramIcon.style.display = 'none';
  }
}


  