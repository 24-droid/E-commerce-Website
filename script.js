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
const heroImages = document.querySelectorAll('.hero li');
const line = document.querySelector('.line');
const arrowNext = document.querySelectorAll('.arrow-next');

let currentIndex = 0;

function updateLine(index) {
    if (index === 0) {
        line.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, rgba(0, 0, 0, 0.1) 100%)';
    } else if (index === 1) {
        line.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.1) 100%)';
    } else if (index === 2) {
        line.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 66%, rgba(0, 0, 0, 0.8) 100%)';
    }
}
function showImage(index) {
    heroImages.forEach((image, idx) => {
        if (idx === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}
showImage(currentIndex);
updateLine(currentIndex);


function goToNextImage() {
    currentIndex++;
    if (currentIndex >= heroImages.length) {
        currentIndex = 0; // Loop back to the first image
    }
    updateLine(currentIndex);
    showImage(currentIndex);
}

arrowNext.addEventListener('click', goToNextImage);