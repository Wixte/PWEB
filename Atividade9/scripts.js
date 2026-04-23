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

let num1 = Number(prompt('Função 1 - Maior de três\nDigite o 1º número:'));
let num2 = Number(prompt('Função 1 - Maior de três\nDigite o 2º número:'));
let num3 = Number(prompt('Função 1 - Maior de três\nDigite o 3º número:'));

let resultadoMaior = maiorNum(num1, num2, num3);
alert(`O maior número entre ${num1}, ${num2} e ${num3} é: ${resultadoMaior}`);

// -----

let n1 = Number(prompt('Função 2 - Ordem Crescente\nDigite o 1º número:'));
let n2 = Number(prompt('Função 2 - Ordem Crescente\nDigite o 2º número:'));
let n3 = Number(prompt('Função 2 - Ordem Crescente\nDigite o 3º número:'));

let resultadoOrdem = ordenCrescente(n1, n2, n3);
alert(`Os números em ordem crescente são: ${resultadoOrdem}`);

// -----

let textoPalindromo = prompt(
  'Função 3 - Palíndromo\nDigite uma palavra ou frase:',
);

let ePalindromo = palindromo(textoPalindromo);
if (ePalindromo) {
  alert(`A expressão "${textoPalindromo}" É um palíndromo!`);
} else {
  alert(`A expressão "${textoPalindromo}" NÃO é um palíndromo.`);
}

// -----

let palavraPrincipal = prompt(
  'Função 4 - Subconjunto\nDigite a palavra principal:',
);
let subPalavra = prompt(
  'Função 4 - Subconjunto\nDigite a palavra que deseja verificar se está contida na primeira:',
);

let resultadoSubconjunto = verificaSubconjunto(palavraPrincipal, subPalavra);
alert(`Verificação de subconjunto: O resultado "${resultadoSubconjunto}"`);

// -----

let dataTexto = prompt(
  'Função 5 - Dia da Semana\nDigite uma data no formato Ano-Mês-Dia (exemplo: 2001-09-11):',
);

let resultadoDia = diaDaSemana(dataTexto + 'T12:00:00Z');
alert(`A data ${dataTexto} cai em um(a): ${resultadoDia}`);
