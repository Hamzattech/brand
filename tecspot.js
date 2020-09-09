const date = document.querySelector(".footer-text");

date.innerHTML = new Date().getFullYear();
const topArrow = document.querySelector(".upArrow");
const navBar = document.querySelector(".navbar");
const topBtn = document.querySelector(".topbtn");


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

