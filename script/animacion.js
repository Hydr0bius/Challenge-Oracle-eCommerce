// hamburger menu
const bar = document.querySelector('#bar');
const nav = document.querySelector('.navbar');
const cerrar = document.querySelector('#close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });
};
if(cerrar){
    cerrar.addEventListener('click',()=>{
        nav.classList.remove('active');
    });
;}

// publicidad -----------------------------------------
const slider = document.querySelector('#slider'),
btnLeft = document.querySelector('#btn-left'),
btnRight =document.querySelector('#btn-right');
let sliderSection = document.querySelectorAll('.sliderSection');
let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll('.sliderSection')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
};

function moverIzquierda(){
    let sliderSection = document.querySelectorAll('.sliderSection');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
};

btnRight.addEventListener('click',function(){
    moverDerecha();
})
btnLeft.addEventListener('click',function(){
    moverIzquierda();
});
setInterval(function(){
    moverDerecha();
},3000);