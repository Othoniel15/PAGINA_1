const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

datalayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo'); 
};

botonAceptarCookies.addEventListener("click", () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);

    datalayer.push({'event': 'activar-cookies'});

});

const btnleft = document.querySelector('.btn-left'),
    btnright = document.querySelector('.btn-right'),
    sliders = document.querySelector('#div-sliders'),
    sliderSection = document.querySelectorAll('.slider-section');

btnleft.addEventListener("click", e => moveToLeft())
btnright.addEventListener("click", e => moveToRight())

setInterval(() =>{
    moveToRight()
},3000);

let operacion = 0,
    contar = 0,
    withImg = 100/sliderSection.length;

function moveToRight() {
    if(contar >= sliderSection.length-1) {
        contar = 0;
        operacion = 0;
        sliders.style.transform = `translate(-${operacion}%)`;
        sliders.style.transition = "none";
        return;
    }
    contar++;
    operacion = operacion + withImg
    sliders.style.transform = `translate(-${operacion}%)`;
    sliders.style.transition = "all ease .5s";
}

function moveToLeft() {
    contar--;
    if(contar < 0){
        contar = sliderSection.length - 1;
        operacion = withImg * (sliderSection.length-1);
        sliders.style.transform = `translate(-${operacion}%)`;
        sliders.style.transition = "none";
        return;
    }
    operacion = operacion - withImg
    sliders.style.transform = `translateX(-${operacion}%)`;
    sliders.style.transition = "all ease .5s";
}
