const botaoProjetos = document.querySelector("#projetos");
const ola = document.querySelector("#ola");
const carrossel = document.querySelector("#carrossel");
const botaoSobre = document.querySelector("#sobre");
const containerSobre = document.querySelector("#containerSobre");
const container_slide = document.querySelector("#container_slide");
const containerExpandido = document.querySelector("#containerExpandido");




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
            container_slide.innerHTML += `<div  class="swiper-slide"><img src="projetos/${nomeProjetos[i]}/img.png" id="${nomeProjetos[i]}" /></div>`;}
        }
        console.log(nomeProjetos);
        console.log(container_slide);
    })
    .catch((error) => console.error('Erro ao ler o arquivo:', error));


    container_slide.addEventListener('click', (evento)=>{

        //converte txt em uma variavel com valor = ao conteudo do txt
        
        let titulo = '';
        console.log('titulo Vazio = ' + titulo)
        const myRequestTitulo = new Request(`projetos/${evento.target.id}/Titulo.txt`);

        fetch(myRequestTitulo)
         .then(response => response.text())
         .then((text) =>{
            titulo = text;
            console.log('Titulo = ' + titulo);

            containerExpandido.innerHTML = 
              `<div class="containerSuperior">
                  <img class="imgExpandida" src="projetos/${evento.target.id}/img.png" alt="">
                  <div>
                      <h4>${titulo}</h4>
                      <p>${paragrafo}</p>
                  </div>
          
                  <img id="xBotaoFechar" class="x" src="img/x.png" alt="">               
                      
              </div>
                      
              <div class="containerInferior">
                  <h4>${titulo2}</h4>
                  <p>${paragrafo2}</p>
          
                  <a href="${url}" target="_blank">Ver o Projeto</a>
              </div>`

              const xBotaoFechar = document.querySelector("#xBotaoFechar");
              xBotaoFechar.addEventListener('click', () => {
                  containerExpandido.classList.add('esconder');
            });

         });

         let titulo2 = '';
        const myRequestTitulo2 = new Request(`projetos/${evento.target.id}/Titulo2.txt`);

        fetch(myRequestTitulo2)
         .then(response => response.text())
         .then((text) =>{
            titulo2 = text;
            console.log('Titulo2 = ' + titulo2);

            containerExpandido.innerHTML = 
              `<div class="containerSuperior">
                  <img class="imgExpandida" src="projetos/${evento.target.id}/img.png" alt="">
                  <div>
                      <h4>${titulo}</h4>
                      <p>${paragrafo}</p>
                  </div>
          
                  <img id="xBotaoFechar" class="x" src="img/x.png" alt="">               
                      
              </div>
                      
              <div class="containerInferior">
                  <h4>${titulo2}</h4>
                  <p>${paragrafo2}</p>
          
                  <a href="${url}" target="_blank">Ver o Projeto</a>
              </div>`

              const xBotaoFechar = document.querySelector("#xBotaoFechar");
              xBotaoFechar.addEventListener('click', () => {
                  containerExpandido.classList.add('esconder');
            });

         });

         let paragrafo = '';
        const myRequestParagrafo = new Request(`projetos/${evento.target.id}/Paragrafo.txt`);

        fetch(myRequestParagrafo)
         .then(response => response.text())
         .then((text) =>{
            paragrafo = text;
            console.log('Paragrafo = ' + paragrafo);

            containerExpandido.innerHTML = 
              `<div class="containerSuperior">
                  <img class="imgExpandida" src="projetos/${evento.target.id}/img.png" alt="">
                  <div>
                      <h4>${titulo}</h4>
                      <p>${paragrafo}</p>
                  </div>
          
                  <img id="xBotaoFechar" class="x" src="img/x.png" alt="">               
                      
              </div>
                      
              <div class="containerInferior">
                  <h4>${titulo2}</h4>
                  <p>${paragrafo2}</p>
          
                  <a href="${url}" target="_blank">Ver o Projeto</a>
              </div>`

              const xBotaoFechar = document.querySelector("#xBotaoFechar");
              xBotaoFechar.addEventListener('click', () => {
                  containerExpandido.classList.add('esconder');
            });

         });

         let paragrafo2 = '';
         const myRequestParagrafo2 = new Request(`projetos/${evento.target.id}/Paragrafo2.txt`);
 
         fetch(myRequestParagrafo2)
          .then(response => response.text())
          .then((text) =>{
             paragrafo2 = text;
             console.log('Paragrafo2 = ' + paragrafo2);

             containerExpandido.innerHTML = 
              `<div class="containerSuperior">
                  <img class="imgExpandida" src="projetos/${evento.target.id}/img.png" alt="">
                  <div>
                      <h4>${titulo}</h4>
                      <p>${paragrafo}</p>
                  </div>
          
                  <img id="xBotaoFechar" class="x" src="img/x.png" alt="">               
                      
              </div>
                      
              <div class="containerInferior">
                  <h4>${titulo2}</h4>
                  <p>${paragrafo2}</p>
          
                  <a href="${url}" target="_blank">Ver o Projeto</a>
              </div>`
              const xBotaoFechar = document.querySelector("#xBotaoFechar");
              xBotaoFechar.addEventListener('click', () => {
                  containerExpandido.classList.add('esconder');
            });
             
 
          });


          let url = '';
          const myRequestUrl = new Request(`projetos/${evento.target.id}/url.txt`);
  
          fetch(myRequestUrl)
           .then(response => response.text())
           .then((text) =>{
              url = text;
              console.log('url = ' + url);

              containerExpandido.innerHTML = 
              `<div class="containerSuperior">
                  <img class="imgExpandida" src="projetos/${evento.target.id}/img.png" alt="">
                  <div>
                      <h4>${titulo}</h4>
                      <p>${paragrafo}</p>
                  </div>
          
                  <img id="xBotaoFechar" class="x" src="img/x.png" alt="">               
                      
              </div>
                      
              <div class="containerInferior">
                  <h4>${titulo2}</h4>
                  <p>${paragrafo2}</p>
          
                  <a href="${url}" target="_blank">Ver o Projeto</a>
              </div>`
              const xBotaoFechar = document.querySelector("#xBotaoFechar");
              xBotaoFechar.addEventListener('click', () => {
                  containerExpandido.classList.add('esconder');
            });
             
           });

    
        containerExpandido.classList.remove('esconder');
     

    })

  


       
       

  

   





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




// const culturama = document.querySelector("#culturama");
// const containerExpandidoCulturama = document.querySelector("#containerSwiperExpandidoCulturama");
// const xCulturama = document.querySelector("#xCulturama");
// culturama.addEventListener('click', ()=>{
//     containerExpandidoCulturama.classList.remove('esconder') 
// } )

// xCulturama.addEventListener('click', ()=>{
//     containerExpandidoCulturama.classList.add('esconder') 
// })



// const alura_books = document.querySelector("#alura_books");
// const containerExpandidoAlura_books = document.querySelector("#containerSwiperExpandidoAlura_books");
// const xAlura_books = document.querySelector("#xAlura_books");
// alura_books.addEventListener('click', ()=>{
//     containerExpandidoAlura_books.classList.remove('esconder') 
// } )

// xAlura_books.addEventListener('click', ()=>{
//     containerExpandidoAlura_books.classList.add('esconder') 
// })


// const pao_ancestral = document.querySelector("#pao_ancestral");
// const containerSwiperExpandidoPao_ancestral = document.querySelector("#containerSwiperExpandidoPao_ancestral"); 
// const xPao_ancestral = document.querySelector("#xPao_ancestral");
// pao_ancestral.addEventListener('click', ()=>{
//     containerSwiperExpandidoPao_ancestral.classList.remove('esconder') 
// } )

// xPao_ancestral.addEventListener('click', ()=>{
//     containerSwiperExpandidoPao_ancestral.classList.add('esconder')
// })


// const mochila_de_viagem = document.querySelector("#mochila_de_viagem");
// const containerSwiperExpandidoMochila_de_viagem = document.querySelector("#containerSwiperExpandidoMochila_de_viagem"); 
// const xMochila_de_viagem = document.querySelector("#xMochila_de_viagem");
// mochila_de_viagem.addEventListener('click', ()=>{
//     containerSwiperExpandidoMochila_de_viagem.classList.remove('esconder') 
// } )

// xMochila_de_viagem.addEventListener('click', ()=>{
//     containerSwiperExpandidoMochila_de_viagem.classList.add('esconder')
// })


// const alura_plus = document.querySelector("#alura_plus");
// const containerSwiperExpandidoAlura_plus = document.querySelector("#containerSwiperExpandidoAlura_plus"); 
// const xAlura_plus = document.querySelector("#xAlura_plus");
// alura_plus.addEventListener('click', ()=>{
//     containerSwiperExpandidoAlura_plus.classList.remove('esconder') 
// } )

// xAlura_plus.addEventListener('click', ()=>{
//    containerSwiperExpandidoAlura_plus.classList.add('esconder')
// })



//converte txt em uma variavel com valor = ao conteudo do txt

// let texto = '';
// const myRequest = new Request('Testetxt.txt');

// fetch(myRequest)
//  .then(response => response.text())
//  .then((text) =>{
//     texto = text;
//     console.log('Texto = ' + texto);
//  });

