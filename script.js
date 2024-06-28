const botaoProjetos = document.querySelector("#projetos");
const ola = document.querySelector("#ola");
const carrossel = document.querySelector("#carrossel");
// const projetos = document.querySelectorAll(".swiper-slide");


botaoProjetos.addEventListener('click', ()=>{
    ola.classList.add('esconder')
    carrossel.classList.remove('esconder') 
} )


const culturama = document.querySelector("#culturama");
const containerExpandidoCulturama = document.querySelector("#containerSwiperExpandidoCulturama");
const xCulturama = document.querySelector("#xCulturama");
culturama.addEventListener('click', ()=>{
    containerExpandidoCulturama.classList.remove('esconder') 
} )

xCulturama.addEventListener('click', ()=>{
    containerExpandidoCulturama.classList.add('esconder') 
})



const alura_books = document.querySelector("#alura_books");
const containerExpandidoAlura_books = document.querySelector("#containerSwiperExpandidoAlura_books");
const xAlura_books = document.querySelector("#xAlura_books");
alura_books.addEventListener('click', ()=>{
    containerExpandidoAlura_books.classList.remove('esconder') 
} )

xAlura_books.addEventListener('click', ()=>{
    containerExpandidoAlura_books.classList.add('esconder') 
})


const pao_ancestral = document.querySelector("#pao_ancestral");
const containerSwiperExpandidoPao_ancestral = document.querySelector("#containerSwiperExpandidoPao_ancestral"); 
const xPao_ancestral = document.querySelector("#xPao_ancestral");
pao_ancestral.addEventListener('click', ()=>{
    containerSwiperExpandidoPao_ancestral.classList.remove('esconder') 
} )

xPao_ancestral.addEventListener('click', ()=>{
    containerSwiperExpandidoPao_ancestral.classList.add('esconder')
})


const mochila_de_viagem = document.querySelector("#mochila_de_viagem");
const containerSwiperExpandidoMochila_de_viagem = document.querySelector("#containerSwiperExpandidoMochila_de_viagem"); 
const xMochila_de_viagem = document.querySelector("#xMochila_de_viagem");
mochila_de_viagem.addEventListener('click', ()=>{
    containerSwiperExpandidoMochila_de_viagem.classList.remove('esconder') 
} )

xMochila_de_viagem.addEventListener('click', ()=>{
    containerSwiperExpandidoMochila_de_viagem.classList.add('esconder')
})


const alura_plus = document.querySelector("#alura_plus");
const containerSwiperExpandidoAlura_plus = document.querySelector("#containerSwiperExpandidoAlura_plus"); 
const xAlura_plus = document.querySelector("#xAlura_plus");
alura_plus.addEventListener('click', ()=>{
    containerSwiperExpandidoAlura_plus.classList.remove('esconder') 
} )

xAlura_plus.addEventListener('click', ()=>{
   containerSwiperExpandidoAlura_plus.classList.add('esconder')
})







