/* VARIAVEIS GLOBAIS */

var nome;
var n1;
var n2;
var n3;
var n4;
var media;

nome = prompt("Qual é o seu nome?");
n1 = prompt("Qual é a nota 1?");
n2 = prompt("Qual é a nota 2?");
n3 = prompt("Qual é a nota 3?");
n4 = prompt("Qual é a nota 4?");
media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;

alert("Olá " + nome + ", sua média é " + media.toFixed(2));
