let nome = prompt("Qual seu nome?");
let n1 = parseFloat(prompt("Digite a nota número 1?"));
let n2 = parseFloat(prompt("Digite a nota número 1?"));
let n3 = parseFloat(prompt("Digite a nota número 1?"));
let n4 = parseFloat(prompt("Digite a nota número 1?"));

let resultado;

resultado = (n1 + n2 + n3 + n4) / 4;

alert("Nome: " + nome + "\nResultado da média: " + resultado.toFixed(2));