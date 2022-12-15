// JavaScript code for accessing JSON
// Function for fetching restaurant data from the mock API
function getRestaurantData() {
  // Send a GET request to the API endpoint
  fetch("http://localhost:3000/restaurants")
    .then(function(response) {
      // Parse the response as JSON
      return response.json();
    })
    .then(function(data) {
      // Do something with the data (e.g. display on website)
      displayRestaurantData(data);
    });
}

// Function for displaying the restaurant data on the website
function displayRestaurantData(data) {
  // Get the element where the data will be displayed
  const restaurantDataElement = document.getElementById("restaurant-data");

  // Create a list of restaurant information
  let restaurantDataHtml = "<ul>";
  data.forEach(function(restaurant) {
    restaurantDataHtml += `<li>
      <h3>${restaurant.name}</h3>
      <p>${restaurant.address}</p>
      <p>Rating: ${restaurant.rating}</p>
      <p>Cuisine: ${restaurant.cuisine}</p>
    </li>`;
  });
  restaurantDataHtml += "</ul>";

  // Set the innerHTML of the element to the list of restaurant information
  restaurantDataElement.innerHTML = restaurantDataHtml;
}


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

