//evento de clico + manipulação de troca de icone
const navbarMenu = document.getElementById('navbar-menu');
const navbarToggleIcon = document.getElementById('navbar-toggle-icon');
//alteral icone de botão
navbarToggleIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  if (navbarMenu.classList.contains('active')) {
    navbarToggleIcon.classList.remove('bi-list');
    navbarToggleIcon.classList.add('bi-x');
  } else {
    navbarToggleIcon.classList.remove('bi-x');
    navbarToggleIcon.classList.add('bi-list');
  }
});



// Função para verificar a posição do scroll para permitir o btn da navbar aparecer
function toggleScrollButton() {
  var button = document.getElementById("scrollButton");
  if (window.scrollY > 400) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
  console.log("Função toggleScrollButton chamada. scrollY: " + window.scrollY);
}
// Adicionando um ouvinte de evento para o evento de rolagem de cima
window.addEventListener("scroll", toggleScrollButton);





//seleção idiomas radio
// 'DOMContentLoaded' boa prática para garantir que o JavaScript seja executado somente após o documento HTML ter sido completamente carregado.
  document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.getElementById('radio_idioma');
    
    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
            radioButtons.forEach(function (otherRadio) {
                if (otherRadio !== radio) {
                    otherRadio.checked = false;
                }
            });
        });
    });
});







// Solicitação fetch para carroselCards
fetch('https://nubank-clone-l7ltjozo2a-uw.a.run.app/carroselCards')
    .then((resp) => resp.json())
    .then((data) => {
        const carroselCards = data.carroselCards;

      
        function renderizarCarrosselCards() {
            const containerCarrosselCards = $('#carrosselCards'); 
            data.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'card';

                const icone = document.createElement('i');
                icone.className = 'iconeCarrosel ' + item.icone;
                icone.innerHTML = '';

                const titulo = document.createElement('h5');
                titulo.textContent = item.titulo;
                titulo.className = 'titulo-min';

                const descricao = document.createElement('p');
                descricao.textContent = item.conteudo;
                descricao.className = 'conteudo';

                const link = document.createElement('a');
                link.href = item.link;
                link.textContent = 'Saiba mais';
                link.className = 'link-min';

                card.appendChild(icone);
                card.appendChild(titulo);
                card.appendChild(descricao);
                card.appendChild(link);

                // Addicionando  cartão ao carrossel
                containerCarrosselCards.append(card);
            });
  // Inicializando o Slick Carousel após adicionar os cartões
  containerCarrosselCards.slick({
    infinite: true, // carrossel infinito
    slidesToShow: 3, // Número de cartões visíveis por padrão
    prevArrow: '#slick-prev',
    nextArrow: '#slick-next',
    responsive: [ //condições para as medias
    {
      breakpoint: 2600,
      settings: {
        slidesToShow: 5.5  // Número de slides a serem mostrados a partir de 1600
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4.5
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.8
      }
    },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.1
        }
      },
      {
        breakpoint: 600,// Quando a largura da tela for igual ou inferior 
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 400,// Quando a largura da tela for igual ou inferior a 
        settings: {
          slidesToShow: .8
        }
      }
    ]
  });
}
        //  função para renderizar os cartões
        renderizarCarrosselCards();
    })
    .catch((error) => {
        console.error('Erro durante a requisição:', error);
    });







//solicitação fetch para dupla de cards
fetch('https://nubank-clone-l7ltjozo2a-uw.a.run.app/duplacard')
  .then((resp) => resp.json())
  .then((data) => {
    const duplacard = data.duplacard; //buscando arquivo especifico dentro da pasta local

    //criando cards

    function renderizarDuplaCard() {
      const duplacardContainer = document.getElementById('duplacard');

      //fazendo algo com cada item
      data.forEach((item, index) => {
        const containerCar = document.createElement('div');
        containerCar.className = 'carDu';

        if (index === 0) {
          containerCar.style.background = '#f5f5f5';
          containerCar.classList.add('index-0');
          containerCar.style.padding = '30px 20px '
        }else if(index === 1){
          containerCar.style.backgroundColor = '#2f0546'; // Defina a cor desejada
          containerCar.style.color = '#f5f5f5';
          containerCar.style.padding = '30px 20px '
        }

        const imgDu = document.createElement('img');
        imgDu.src = item.img;
        imgDu.className = 'imgDu';

        const containerConteudo = document.createElement('div');
        containerConteudo.className = 'carConteudo';

        const tituloDu = document.createElement('h1');
        tituloDu.textContent = item.titulo;
        tituloDu.className = 'tituloDu';

        if (index === 0 ){
          tituloDu.style.color='#820AD1';
        }

        const conDu = document.createElement('p');
        conDu.textContent = item.conteudo;
        conDu.className = 'conDu';

        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = 'Saiba mais';

        // Crie um elemento <i> para o ícone
        const icone = document.createElement('i');
        icone.className = 'icone';
        icone.innerHTML = '<i class="bi bi-arrow-right"></i>';


        if (index === 0) {
          icone.className = 'iconeDu_roxo';
          link.className = 'linkDu_roxo'; // Adicione uma classe especial ao link
        } else {
          icone.className = 'icone';
          link.className = 'linkDu'; // Use a classe padrão para outros links
        }
        if (index === 1) {
          icone.className = 'iconeDu_branco';
          link.className = 'linkDu_branco'; // Adicione uma classe especial ao link
        } else {
          icone.className = 'icone';
          link.className = 'linkDu'; // Use a classe padrão para outros links
        }

        containerCar.appendChild(imgDu);
        containerCar.appendChild(containerConteudo);
        containerConteudo.appendChild(tituloDu);
        containerConteudo.appendChild(conDu);
        containerConteudo.appendChild(link);
        containerConteudo.appendChild(icone);

        duplacardContainer.appendChild(containerCar);
      });
    }

    // Chamar função para renderizar os cartões
    renderizarDuplaCard();
  })
  .catch((error) => {
    console.error('Erro durante a requisição:', error);
  });


  //solicitação fetch para backgroud
fetch('https://nubank-clone-l7ltjozo2a-uw.a.run.app/backgroud')
.then((resp) => resp.json())
.then((data) => {
  const backgroud = data.backgroud;

  //criando cards

  function renderizarBackgroud() {
    const backgroudContainer = document.getElementById('backgroud');
  
    // Crie um conteiner para os cards com índices 1 e 2
    const flexContainer = document.createElement('div');
    flexContainer.className = 'flex-container';
  
    // Crie um container para o card com índice 3
    const card3Container = document.createElement('div');
    // Não atribua a classe 'carDu' ao container do índice 3
  
    //fazendo algo com cada item
    data.forEach((item, index) => {
      const containerCar = document.createElement('div');
      containerCar.className = 'car';
  
      if (index === 1) {
        containerCar.style.backgroundColor = '#820AD1';
        containerCar.style.color = '#f5f5f5';
        containerCar.classList.add('largurapersonalizadaCard');
      } else if (index === 2) {
        containerCar.style.backgroundColor = '#2F0549';
        containerCar.style.color = '#f5f5f5';
        containerCar.classList.add('largurapersonalizadaCard');
      } else if (index === 0 ) {
        containerCar.style.backgroundColor = '#f5f5f5';
        containerCar.classList.add('index-0');
      }else if( index === 3){
        containerCar.style.backgroundColor = '#f5f5f5';
      }
      
      const imgBg = document.createElement('img');
      imgBg.src = item.img;
      
      if (index === 1 || index === 2) {
        imgBg.classList.add('personalizadaImgBg');
      } else {
        imgBg.className = 'imgBg';
      }
   
    
      const containerConteudo = document.createElement('div');
      containerConteudo.className = 'carConteudo';
      const screenWidth = window.innerWidth;
if (index === 1 || index === 2) {
  if (screenWidth === 1100) {
    containerConteudo.style.marginRight = '15em';
  } else {
    containerConteudo.classList.add('personalizadoconCarconteudo');
  }
} else {
  containerConteudo.className = 'conDu';
}
  
      const tituloDu = document.createElement('h1');
      tituloDu.textContent = item.titulo;
      tituloDu.className = 'tituloDu';
  
      if (index === 0 || index === 3) {
        tituloDu.style.color = '#820AD1';
      }
  
      const conDu = document.createElement('p');
      conDu.textContent = item.conteudo;
      conDu.className = 'conDu';

  
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = 'Saiba mais';
      link.className = 'linkDu';
  
      const icone = document.createElement('i');
      icone.innerHTML = '<i class="bi bi-arrow-right"></i>';
  
      if (index === 1 || index === 2) {
        icone.className = 'iconeDu_branco';
        link.className = 'linkDu_branco';
      } else {
        icone.className = 'icone';
        link.className = 'linkDu';
      }
  
      containerCar.appendChild(imgBg);
      containerCar.appendChild(containerConteudo);
      containerConteudo.appendChild(tituloDu);
      containerConteudo.appendChild(conDu);
      containerConteudo.appendChild(link);
      containerConteudo.appendChild(icone);
  
      if (index === 1 || index === 2) {
        //  cards  índices 1 e 2 sendo add ao flexContainer
        flexContainer.appendChild(containerCar);
      } else {
        if (index === 0) {
          // card com índice 0 add diretamente ao backgroudContainer
          backgroudContainer.appendChild(containerCar);
        } else if (index === 3) {
          // card com índice 3 ao card3Container
          card3Container.appendChild(containerCar);
        }
      }
    });
  
    // Add flexContainer ao backgroudContainer após o loop
    backgroudContainer.appendChild(flexContainer);
    // Add o card3Container abaixo do flexContainer
    backgroudContainer.appendChild(card3Container);
  }

  // função para renderizar os cartões
  renderizarBackgroud();
})
.catch((error) => {
  console.error('Erro durante a requisição:', error);
});





  //solicitação fetch para dupla de cards
fetch('https://nubank-clone-l7ltjozo2a-uw.a.run.app/unico')
  .then((resp) => resp.json())
  .then((data) => {
    const unico = data.unico;

    //criando cards

    function renderizarUnico() {
      const unicoContainer = document.getElementById('unico');

      //fazendo algo com cada item
      data.forEach((item, index) => {
        const unicoCar = document.createElement('div');
        unicoCar.className = 'carUnico';

      // Crie um elemento <i> para o ícone
      const icone = document.createElement('i');
      icone.className = 'iconeUnico' + item.icone;
      icone.innerHTML = '';

        const subtituloUnico = document.createElement('h3');
        subtituloUnico.textContent = item.subtitulo;
        subtituloUnico.className = 'subtituloUnico';
      

        const paragrafoUnico = document.createElement('p');
        paragrafoUnico.textContent = item.paragrafo;
        paragrafoUnico.className = 'paragrafoUnico';


     
        unicoCar.appendChild(icone);
        unicoCar.appendChild(subtituloUnico);
        unicoCar.appendChild(paragrafoUnico);
 

        unicoContainer.appendChild(unicoCar);
      });
    }

    // Chamar função para renderizar os cartões
    renderizarUnico();
  })
  .catch((error) => {
    console.error('Erro durante a requisição:', error);
  });
  
  



//solicitação fetch para elementosCards  (Primeiro grupo de cards com rolagem horizontas (setas teclado))
fetch('https://nubank-clone-l7ltjozo2a-uw.a.run.app/elementosCards')
  .then((resp) => resp.json())
  .then((data) => {
    const elementosCards = data.elementosCards;

    function renderizarCartoesElementos() {
      const containerElemento = document.getElementById('elementosCards');
      containerElemento.setAttribute('tabindex', '0'); // Torna a div focável

      //evento de click , setando setas do teclado, para manipular movimento de cards
      containerElemento.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
          containerElemento.scrollLeft -= 50; 
        } else if (event.key === 'ArrowRight') {
          containerElemento.scrollLeft += 50;
        }
      });

      data.forEach((item) => {
        const cartao = document.createElement('div');
        cartao.className = 'cartao';

        const imagem = document.createElement('img');
        imagem.src = item.img;
        imagem.className = 'img';

        const titulo = document.createElement('h2');
        titulo.textContent = item.titulo;
        titulo.className = 'titulo';

        const descricao = document.createElement('p');
        descricao.textContent = item.conteudo;
        descricao.className = 'conteudoG';

        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = 'Saiba mais';
        link.className = 'link';

        const icone = document.createElement('i');
        icone.className = 'icone';
        icone.innerHTML = '<i class="bi bi-arrow-right"></i>';

        cartao.appendChild(imagem);
        cartao.appendChild(titulo);
        cartao.appendChild(descricao);
        cartao.appendChild(link);
        cartao.appendChild(icone);

        containerElemento.appendChild(cartao);
      });
    }

    //  função para renderizar os cartões
    renderizarCartoesElementos(elementosCards);
  })
  .catch((error) => {
    console.error('Erro durante a requisição:', error);
  });




  //solicitação fetch para CardCards'  (Segudno grupo de cards com rolagem horizontas (setas teclado))
fetch('https://nubank-clone-l7ltjozo2a-uw.a.run.app/cardCards')
.then((resp) => resp.json())
.then((data) => {
  const CardCards = data.CardCards; 
  function renderizarCardCards() {
    const containerCardCards = document.getElementById('CardCards'); 
     //evento de click , setando setas do teclado, para manipular movimento de cards
    containerCardCards.setAttribute('tabindex', '0');
    containerCardCards.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        containerCardCards.scrollLeft -= 50; 
      } else if (event.key === 'ArrowRight') {
        containerCardCards.scrollLeft += 50; // 
      }
    });

    data.forEach((item) => {

      const cartao = document.createElement('div');
      cartao.className = 'cartao';

      const imagem = document.createElement('img');
      imagem.src = item.img; 
      imagem.className = 'img';
   

      const sub = document.createElement('h5');
      sub.textContent = item.sub;
      sub.className = 'sub';

      const descricao = document.createElement('p');
      descricao.textContent = item.conteudo;
      descricao.className = 'conteudoG';
      descricao.style.fontWeight = '500';

      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = 'Ler artigo';
      link.className = 'link';

      
      const icone = document.createElement('i');
      icone.className = 'icone';
      icone.innerHTML = '<i class="bi bi-arrow-up-right"></i>'; 

      
    
    
      cartao.appendChild(imagem);
      cartao.appendChild(sub);
      cartao.appendChild(descricao);
      cartao.appendChild(link);
      cartao.appendChild(icone);

      containerCardCards.appendChild(cartao);
    });
  }

  //  função para renderizar os cartões
  renderizarCardCards(CardCards);
})
.catch((error) => {
  console.error('Erro durante a requisição:', error);
});


//Revisado e concluido 02/11/23


