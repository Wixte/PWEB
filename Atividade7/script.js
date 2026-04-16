let escolhaJogador;
let resultadoComputador;
let opcao;
escolhaJogador = prompt(
  "Escolha um opção de 1 a 3\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura",
);

if (escolhaJogador == "1") {
  opcao = "PEDRA";
} else if (escolhaJogador == "2") {
  opcao = "PAPEL";
} else {
  opcao = "TESOURA";
}

alert("Você selecionou " + escolhaJogador + " " + opcao);

resultadoComputador = Math.random() / 3;

if (resultadoComputador <= 0.33) {
  resultadoComputador = "1";
} else if (resultadoComputador <= 0.66) {
  resultadoComputador = "2";
} else {
  resultadoComputador = "3";
}

if (resultadoComputador == "1") {
  opcao = "PEDRA";
} else if (resultadoComputador == "2") {
  opcao = "PAPEL";
} else {
  opcao = "TESOURA";
}

alert("O computador selecionou " + resultadoComputador + " " + opcao);

if (resultadoComputador == escolhaJogador) {
  alert("Empate");
} else if (
  (resultadoComputador == 1 && escolhaJogador == "3") ||
  (resultadoComputador == 2 && escolhaJogador == "1") ||
  (resultadoComputador == 3 && escolhaJogador == "2")
) {
  alert("O computador venceu.");
} else {
  alert("Você venceu!");
}
