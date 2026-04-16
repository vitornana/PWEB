let usuario = prompt("pedra, papel ou tesoura?").toLowerCase();

let random = Math.floor(Math.random() * 3);
let computador = "";

if (random === 0) {
  computador = "pedra";
} else if (random === 1) {
  computador = "papel";
} else {
  computador = "tesoura";
}

if (usuario === computador) {
  alert("Empate");
} else if (usuario === "pedra" && computador === "tesoura") {
  alert("Pedra quebra tesoura");
} else if (usuario === "tesoura" && computador === "papel") {
  alert("Tesoura corta papel");
} else if (usuario === "papel" && computador === "pedra") {
  alert("Papel cobre a pedra");
} else if (computador === "pedra" && usuario === "tesoura") {
  alert("Pedra quebra tesoura");
} else if (computador === "tesoura" && usuario === "papel") {
  alert("Tesoura corta papel");
} else if (computador === "papel" && usuario === "pedra") {
  alert("Papel cobre a pedra");
} else {
  alert("Opção inválida");
}
