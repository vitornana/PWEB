const pesquisa = [];
let somaIdades = 0;
let idadeMaisVelha = 0;
let idadeMaisNova = 999;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let qtdFeminino = 0;
let qtdMasculino = 0;
let qtdOutros = 0;

for (let i = 0; i < 45; i++) {
  let idade = parseInt(prompt("Pessoa " + (i + 1) + " - Digite a idade:"));
  let sexo = prompt(
    "Pessoa " + (i + 1) + " - Digite o sexo (Feminino, Masculino ou Outros):",
  );
  let opiniao = parseInt(
    prompt(
      "Pessoa " +
        (i + 1) +
        " - Digite a opinião (4=ótimo, 3=bom, 2=regular, 1=péssimo):",
    ),
  );

  pesquisa.push([idade, sexo, opiniao]);
}

for (let i = 0; i < pesquisa.length; i++) {
  let idade = pesquisa[i][0];
  let sexo = pesquisa[i][1];
  let opiniao = pesquisa[i][2];

  somaIdades += idade;

  if (idade > idadeMaisVelha) {
    idadeMaisVelha = idade;
  }

  if (idade < idadeMaisNova) {
    idadeMaisNova = idade;
  }

  if (opiniao === 1) {
    qtdPessimo++;
  }

  if (opiniao === 4 || opiniao === 3) {
    qtdOtimoBom++;
  }

  if (sexo.toLowerCase() === "feminino") {
    qtdFeminino++;
  } else if (sexo.toLowerCase() === "masculino") {
    qtdMasculino++;
  } else {
    qtdOutros++;
  }
}

let mediaIdade = somaIdades / pesquisa.length;
let porcentagemOtimoBom = (qtdOtimoBom / pesquisa.length) * 100;

alert(
  "Média de idade: " +
    mediaIdade.toFixed(1) +
    " anos\n" +
    "Idade da pessoa mais velha: " +
    idadeMaisVelha +
    " anos\n" +
    "Idade da pessoa mais nova: " +
    idadeMaisNova +
    " anos\n" +
    "Quantidade de respostas 'péssimo': " +
    qtdPessimo +
    "\n" +
    "Porcentagem de 'ótimo' e 'bom': " +
    porcentagemOtimoBom.toFixed(1) +
    "%\n" +
    "Número de Mulheres: " +
    qtdFeminino +
    "\n" +
    "Número de Homens: " +
    qtdMasculino +
    "\n" +
    "Número de Outros: " +
    qtdOutros,
);
