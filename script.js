const botaoProjetos = document.querySelector("#projetos");
const ola = document.querySelector("#ola");
const carrossel = document.querySelector("#carrossel");
const botaoSobre = document.querySelector("#sobre");
const containerSobre = document.querySelector("#containerSobre");
const container_slide = document.querySelector("#container_slide");
const containerExpandido = document.querySelector("#containerExpandido");
const imgExpandida = document.querySelector("#imgExpandida");
const tituloModal = document.querySelector("#tituloModal");
const tituloModal2 = document.querySelector("#tituloModal2");
const paragrafoModal = document.querySelector("#paragrafoModal");
const paragrafoModal2 = document.querySelector("#paragrafoModal2");
const urlModal = document.querySelector("#urlModal");
const xBotaoFechar = document.querySelector("#xBotaoFechar");
const xBotaoFecharSobre = document.querySelector("#xBotaoFecharSobre");



//Converte o arquivo output.txt em uma array(let nomeProjetos)  

let nomeProjetos = [];
const myRequestout = new Request('output.txt');

fetch(myRequestout)
.then(response => response.text())
.then((text) => {
    // Converte o texto em um array, dividindo por quebras de linha
    nomeProjetos = text.split('\n').filter(line => line.trim() !== '');

    // Verifica se há itens no array antes de tentar acessar
    if (nomeProjetos.length > 0) {
        for(let i = 0; i < nomeProjetos.length; i++){
        container_slide.innerHTML += `<div  class="swiper-slide"><img src="projetos/${nomeProjetos[i]}/img.png" id="${nomeProjetos[i]}"/></div>`;}
    }
    console.log(nomeProjetos);
    console.log(container_slide);
})
.catch((error) => console.error('Erro ao ler o arquivo:', error));

    
function inputContainerExpandido(evento){
        imgExpandida.src = `projetos/${evento.target.id}/img.png`

        //converte txt em uma variavel com valor = ao conteudo do txt
        
        let titulo = '';
        const myRequestTitulo = new Request(`projetos/${evento.target.id}/Titulo.txt`);

        fetch(myRequestTitulo)
         .then(response => response.text())
         .then((text) =>{
            titulo = text;
            console.log('Titulo = ' + titulo);

            tituloModal.textContent = titulo
        });



        let titulo2 = '';
        const myRequestTitulo2 = new Request(`projetos/${evento.target.id}/Titulo2.txt`);

        fetch(myRequestTitulo2)
         .then(response => response.text())
         .then((text) =>{
            titulo2 = text;
            console.log('Titulo2 = ' + titulo2);

            tituloModal2.textContent = titulo2

        });



        let paragrafo = '';
        const myRequestParagrafo = new Request(`projetos/${evento.target.id}/Paragrafo.txt`);

        fetch(myRequestParagrafo)
         .then(response => response.text())
         .then((text) =>{
            paragrafo = text;
            console.log('Paragrafo = ' + paragrafo);

            paragrafoModal.textContent = paragrafo

        });



        let paragrafo2 = '';
        const myRequestParagrafo2 = new Request(`projetos/${evento.target.id}/Paragrafo2.txt`);
 
         fetch(myRequestParagrafo2)
          .then(response => response.text())
          .then((text) =>{
             paragrafo2 = text;
             console.log('Paragrafo2 = ' + paragrafo2);

             paragrafoModal2.textContent = paragrafo2
 
        });


        let url = '';
        const myRequestUrl = new Request(`projetos/${evento.target.id}/url.txt`);
  
          fetch(myRequestUrl)
           .then(response => response.text())
           .then((text) =>{
              url = text;
              console.log('url = ' + url);

             urlModal.href = url
             
        });
    };


container_slide.addEventListener('click', (evento)=>{
    console.log(evento)
    
    inputContainerExpandido(evento)

    for(let i = 0; i < nomeProjetos.length; i++){
        if(evento.target.id == nomeProjetos[i]){
        containerExpandido.classList.remove('esconder');
        carrossel.classList.add('esconder')
        
    }}
})

xBotaoFechar.addEventListener('click', () => {
    containerExpandido.classList.add('esconder');
    carrossel.classList.remove('esconder');  
       
});


botaoProjetos.addEventListener('click', ()=>{
    ola.classList.add('esconder')
    carrossel.classList.remove('esconder') 
    containerSobre.classList.add('esconder')
    containerExpandido.classList.add('esconder');
//    -- Initialize Swiper 
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: false,
        centeredSlides: true,
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
                }

        });
} )

botaoSobre.addEventListener('click', ()=>{
    ola.classList.remove('esconder')
    containerSobre.classList.remove('esconder')
    carrossel.classList.add('esconder') 
    containerExpandido.classList.add('esconder')

} )

xBotaoFecharSobre.addEventListener('click', () =>{
    containerSobre.classList.add('esconder')  
})


