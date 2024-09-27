let collections=document.querySelector(".collections");
let hero=document.querySelector(".hero");
let bestsellers=document.querySelector(".best-sellers");
let banner=document.querySelector(".banner");
let feauture=document.querySelector(".feauture");
let discover=document.querySelector(".discover");
let offer=document.querySelector(".offer");
let cube=document.querySelector(".cube");
window.addEventListener("scroll",checkScroll);
checkScroll();
function checkScroll(){
    const triggerBottom=window.innerHeight/5*4;
    checkVisibility(collections,triggerBottom);
    checkVisibility(hero,triggerBottom);
    checkVisibility(bestsellers,triggerBottom);
    checkVisibility(banner,triggerBottom);
    checkVisibility(feauture,triggerBottom);
    checkVisibility(discover,triggerBottom);
    checkVisibility(offer,triggerBottom);
    checkVisibility(cube,triggerBottom);

}
function checkVisibility(element,triggerBottom){
    const elementop=element.getBoundingClientRect().top;
    if(elementop<triggerBottom)
        {
            element.classList.add("show");
        }
        else{
            element.classList.remove("show");
        }
}
let slideImages=document.querySelectorAll(" .hero li");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let dots = document.querySelectorAll(".dot");
let counter = 0;
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);
function slideNext() {
    slideImages[counter].classList.remove('active');
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    dots[counter].classList.remove('active');
    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].classList.add('active');
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    dots[counter].classList.add('active');
}

function slidePrev() {
    slideImages[counter].classList.remove('active');
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    dots[counter].classList.remove('active');
    if (counter == 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].classList.add('active');
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    dots[counter].classList.add('active');
}
let autoSlide = setInterval(slideNext, 5000);

next.addEventListener("mouseover", () => clearInterval(autoSlide));
prev.addEventListener("mouseover", () => clearInterval(autoSlide));