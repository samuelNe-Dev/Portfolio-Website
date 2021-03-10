const menuBtn = document.querySelector('.hamburger');
const menuCtn = document.querySelector('.menu-container');


let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuCtn.classList.add('active');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuCtn.classList.remove('active');
        menuOpen = false;
    }
});