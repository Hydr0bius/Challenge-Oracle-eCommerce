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
//----------------------------------------------------------

// selecciona todos los botones y tarjetas

const btnAll = document.querySelectorAll('.post-filter span');
const cardAll = document.querySelectorAll('.pro-container .pro')
const blogAll = document.querySelectorAll('.post .post-box')

//definimos la funcion de card
const filterCards = e =>{
    document.querySelector('.active-filter').classList.remove('active-filter');
    e.target.classList.add('active-filter');

    cardAll.forEach(card => {
        card.classList.add('hide');

        if(card.dataset.filter === e.target.dataset.filter || e.target.dataset.filter === 'all'){
            card.classList.remove('hide');
        }
    });
    blogAll.forEach(card => {
        card.classList.add('hide');

        if(card.dataset.filter === e.target.dataset.filter || e.target.dataset.filter === 'all'){
            card.classList.remove('hide');
        }
    });
};

// agregar un event listener a cada filtro
btnAll.forEach(span => span.addEventListener('click',filterCards));