const date = document.querySelector(".footer-text");
const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll(".navlink");
const linkToggler = document.querySelector(".navCollapse");
const wrap = document.querySelector(".wrap");
console.log(linkToggler);




date.innerHTML = new Date().getFullYear();
const topArrow = document.querySelector(".upArrow");
const navBar = document.querySelector(".navbar");
const topBtn = document.querySelector(".topbtn");


navLinks.forEach(function (eachLink){
eachLink.addEventListener("click",function(){
    wrap.classList.toggle("active");
})
})

topBtn.addEventListener("click",()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
window.addEventListener("scroll",()=>{
    const navBarHeight = navBar.getBoundingClientRect().height; 
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navBarHeight){
        topArrow.classList.add("showupArrow")
    }
    else{
        topArrow.classList.remove("showupArrow")
    }
})

