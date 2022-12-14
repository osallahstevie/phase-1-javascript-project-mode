let menu = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}