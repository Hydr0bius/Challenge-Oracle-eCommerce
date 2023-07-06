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