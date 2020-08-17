const navbarToggler = document.getElementsByClassName('navbar-toggler-icon')[0]
const navItems = document.getElementsByClassName('nav-item')[0]

navbarToggler.addEventListener('click', ()=>{
    navItems.classList.toggle('active');
    
});