let menu = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
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