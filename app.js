const hamburger = document.querySelector('.ham');
const navMobile = document.querySelector('.nav_mobile');

hamburger.addEventListener("click", (e) => {

    hamburger.classList.toggle('open');
    navMobile.classList.toggle('mobile_close');

    if(hamburger.classList.contains('open')){

        hamburger.src = "./images/icon-close.svg"

    } else{

        hamburger.src = "./images/icon-hamburger.svg"
    }
})