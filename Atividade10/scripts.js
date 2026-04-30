function meuEscopo() {
  const resultado = document.querySelector('.resultado');
  const form = document.querySelector('.form');

  function calculaImc(peso, altura) {
    return peso / altura ** 2;
  }

  function recebeEventoForm(e) {
    e.preventDefault();

    const peso = Number(form.querySelector('#peso').value);
    const altura = Number(form.querySelector('#altura').value);

    if (!peso || peso <= 0) {
      resultado.innerHTML = `<p class="invalido">Peso invalido</p>`;
    } else if (isNaN(altura) || altura <= 0) {
      resultado.innerHTML = `<p class="invalido">Altura invalida</p>`;
    } else {
      const imc = calculaImc(peso, altura);

      let resultadoImc;
      function retornaImc(resultado) {
        if (imc <= 18.5) {
          return (resultadoImc = 'Abaixo do peso');
        }
        if (imc <= 24.9) {
          return (resultadoImc = 'Peso normal');
        }
        if (imc <= 29.9) {
          return (resultadoImc = 'Sobrepeso');
        }
        if (imc <= 34.9) {
          return (resultadoImc = 'Obesidade grau 1');
        }
        if (imc <= 39.9) {
          return (resultadoImc = 'Obesidade grau 2');
        }
        if (imc > 39.9) {
          return (resultadoImc = 'Obesidade grau 3');
        }
      }
      resultado.innerHTML = `<p class="valido">Seu IMC é ${imc.toFixed(2)} (${retornaImc(resultadoImc)})</p>`;
    }
  }

  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
