let idade;
let sexo;
let opniao;

let maisVelha = 0;
let maisNova = Infinity;
let media = 0;
let qdtPessimo = 0;
let pctBomOtimo = 0;
let qtdSexo = [0, 0, 0];
let totalEntrevistados = 45;

for (i = 0; i < totalEntrevistados; i++) {
  idade = Number(prompt('Digite sua idade:'));

  if (idade > maisVelha) {
    maisVelha = idade;
  }

  if (idade < maisNova) {
    maisNova = idade;
  }

  media += idade;

  sexo = Number(
    prompt('Digite seu sexo:\n 1 - feminino \n 2 - masculino \n 3 - outros'),
  );

  if (sexo == 1) {
    qtdSexo[0] += 1;
  } else if (sexo == 2) {
    qtdSexo[1] += 1;
  } else {
    qtdSexo[2] += 1;
  }

  opniao = Number(
    prompt(
      'Como você avaliaria o filme? \n 1 - péssimo \n 2 - regular \n 3 - bom \n 4 - ótimo',
    ),
  );

  if (opniao == 1) {
    qdtPessimo += 1;
  } else if (opniao == 3 || opniao == 4) {
    pctBomOtimo += 1;
  }
}

media = media / totalEntrevistados;
pctBomOtimo = (pctBomOtimo / totalEntrevistados) * 100;

alert(
  `A média da idade das pessoas é: ${media} 
A idade da pessoa mais velha é: ${maisVelha} 
A idade da pessoa mais nova é: ${maisNova} 
A quantidade de pessoas que responderam péssimo é: ${qdtPessimo} 
A porcentagem de pessoas que responderam bom ou ótimo é: ${pctBomOtimo.toFixed(2)}%`,
);

alert(`Esse questionario foi respondido por pessoas dos seguintes sexos:
\nFeminino: ${qtdSexo[0]}
\nMasculino: ${qtdSexo[1]}
\nOutros: ${qtdSexo[2]}`);
