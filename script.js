const botaoProjetos = document.querySelector("#projetos");
const ola = document.querySelector("#ola");
const carrossel = document.querySelector("#carrossel");
const botaoSobre = document.querySelector("#sobre")
const containerSobre = document.querySelector("#containerSobre")
// const projetos = document.querySelectorAll(".swiper-slide");

let outputArray = [];
const myRequestout = new Request('output.txt');

fetch(myRequestout)
    .then(response => response.text())
    .then((text) => {
        // Converte o texto em um array, dividindo por quebras de linha
        outputArray = text.split('\n').filter(line => line.trim() !== '');
        console.log(outputArray);
    })
    .catch((error) => console.error('Erro ao ler o arquivo:', error));



let texto = '';
const myRequest = new Request('Testetxt.txt');

fetch(myRequest)
 .then(response => response.text())
 .then((text) =>{
    texto = text;
    console.log(texto);
 });


botaoProjetos.addEventListener('click', ()=>{
    ola.classList.add('esconder')
    carrossel.classList.remove('esconder') 
    containerSobre.classList.add('esconder')
//    -- Initialize Swiper 
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: false,
        centeredSlides: false,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        speed: 6000,
                autoplay: {
                delay: 0.1 ,
                },

        });
} )

botaoSobre.addEventListener('click', ()=>{
    ola.classList.remove('esconder')
    containerSobre.classList.remove('esconder')
    carrossel.classList.add('esconder') 
    containerExpandidoCulturama.classList.add('esconder')
    containerExpandidoAlura_books.classList.add('esconder') 
    containerSwiperExpandidoPao_ancestral.classList.add('esconder')
    containerSwiperExpandidoMochila_de_viagem.classList.add('esconder')
    containerSwiperExpandidoAlura_plus.classList.add('esconder')
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







