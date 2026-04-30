var altura = 0;
var peso = 0;
var imc = 0;
var classificacao = "";
var grau = 0;

altura = prompt("Digite sua altura em metros: ");
peso = prompt("Digite seu peso em kg: ");

imc = peso / (altura * altura);

if (imc < 18.5) {
  classificacao = "magreza";
  grau = 0;
} else if (imc <= 24.9) {
  classificacao = "normal";
  grau = 0;
} else if (imc <= 29.9) {
  classificacao = "sobrepeso";
  grau = 1;
} else if (imc < 39.9) {
  classificacao = "obesidade";
  grau = 2;
} else {
  classificacao = "obesidade grave";
  grau = 3;
}

alert(
  `O IMC é ${imc.toFixed(1)} e a classificação é ${classificacao} (grau ${grau})`,
);
