function maiorNum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function ordenCrescente(num1, num2, num3) {
  let num = [num1, num2, num3];
  return num.sort(function (a, b) {
    return a - b;
  });
}

function palindromo(texto) {
  let textoLimpo = texto.toLowerCase().replace(/\s+/g, '');

  let textoInvertido = textoLimpo.split('').reverse().join('');

  return textoLimpo === textoInvertido;
}

function verificaSubconjunto(palavra1, palavra2) {
  if (!palavra1 || !palavra2) {
    return 'erro';
  }
  if (palavra1.includes(palavra2)) {
    return 'é um subconjunto';
  } else {
    return 'não é um subconjunto';
  }
}

function diaDaSemana(dataString) {
  let data = new Date(dataString);

  let diaNumerico = data.getDay();

  let diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  return diasDaSemana[diaNumerico];
}
