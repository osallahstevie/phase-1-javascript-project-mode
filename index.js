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
  // initialize the Swiper carousel
var swiper = new Swiper('.home-slider', {
  // set the carousel to slide automatically
  autoplay: {
    delay: 3000,
  },
});

// create a function to handle the "Order now" button click
function handleOrderClick(event) {
  // prevent the default action of the button
  event.preventDefault();

  // get the dish name from the button's data attribute
  var dish = this.dataset.dish;

  // show a message to the user indicating that the dish was added to the order
  alert(`${dish} was added to your order!`);
}

// get all the "Order now" buttons on the page
var orderButtons = document.querySelectorAll('.btn');

// attach an event listener to each button to handle clicks
orderButtons.forEach(function(button) {
  button.addEventListener('click', handleOrderClick);
});
