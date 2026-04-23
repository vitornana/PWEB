function maiorDeTres(a, b, c) {
  return Math.max(a, b, c);
}

function ordemCrescente(a, b, c) {
  let arrayNumeros = [a, b, c];
  return arrayNumeros.sort((x, y) => x - y);
}

function verificarPalindromo(texto) {
  let textoLimpo = texto.toLowerCase().replace(/\s/g, "");
  let textoInvertido = textoLimpo.split("").reverse().join("");
  return textoLimpo === textoInvertido;
}

function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = numero; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

let n1 = parseFloat(prompt("Funções 1 e 2 - Digite o PRIMEIRO número:"));
let n2 = parseFloat(prompt("Funções 1 e 2 - Digite o SEGUNDO número:"));
let n3 = parseFloat(prompt("Funções 1 e 2 - Digite o TERCEIRO número:"));

alert("O maior número digitado foi: " + maiorDeTres(n1, n2, n3));
alert(
  "Os números em ordem crescente são: " + ordemCrescente(n1, n2, n3).join(", "),
);

let frase = prompt(
  "Função 3 - Digite uma palavra ou frase para verificar se é palíndromo:",
);
if (verificarPalindromo(frase)) {
  alert("'" + frase + "' É um palíndromo!");
} else {
  alert("'" + frase + "' NÃO é um palíndromo.");
}

let n4 = parseInt(
  prompt(
    "Função 4 (Extra) - Digite um número inteiro para saber se é Par ou Ímpar:",
  ),
);
alert("O número " + n4 + " é " + parOuImpar(n4) + ".");

let n5 = parseInt(
  prompt(
    "Função 5 (Extra) - Digite um número inteiro para calcular seu Fatorial:",
  ),
);
alert("O fatorial de " + n5 + " é " + calcularFatorial(n5) + ".");
