const titulo = document.querySelector('#titulo');
const janela = document.querySelector('#janela');

let janelaQuebrada = false;

janela.addEventListener('mouseover', () => {
  if (janelaQuebrada === false) {
    janela.src = 'img/aberta.jpg';
    titulo.innerText = 'Janela Aberta';
  }
});

janela.addEventListener('mouseout', () => {
  if (janelaQuebrada === false) {
    janela.src = 'img/fechada.jpg';
    titulo.innerText = 'Janela Fechada';
  }
});

janela.addEventListener('click', () => {
  janela.src = 'img/quebrada.jpg';
  titulo.innerText = 'Janela Quebrada';

  janelaQuebrada = true;
});
