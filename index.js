let menu = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top <offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelectorAll('header .navbar a[href"='+id+']').classList.add('active');
      })
    };
  });
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });
  
  // get the "Order" section
var orderSection = document.querySelector('.order');

// create a function to handle window resizes
function handleWindowResize() {
  // get the width of the window
  var windowWidth = window.innerWidth;

  // if the window is wider than 768px
  if (windowWidth > 768) {
    // set the "Order" section to have two columns
    orderSection.classList.add('row');
  } else {
    // set the "Order" section to have one column
    orderSection.classList.remove('row');
  }
}

// call the function to set the initial layout of the "Order" section
handleWindowResize();

// attach an event listener to the window to handle resizes
window.addEventListener('resize', handleWindowResize);
