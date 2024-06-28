const botaoProjetos = document.querySelector("#projetos");
const ola = document.querySelector("#ola");
const carrossel = document.querySelector("#carrossel");
const projetos = document.querySelectorAll(".swiper-slide");
const containerExpandido = document.querySelector("#containerSwiperExpandidoCulturama")



botaoProjetos.addEventListener('click', ()=>{
    ola.classList.add('esconder')
    carrossel.classList.remove('esconder') 
} )

carrossel.addEventListener('click', ()=>{
    containerExpandido.classList.remove('esconder') 
} )




