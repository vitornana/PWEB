function Retangulo(x, y) {
  this.x = x;
  this.y = y;

  this.calcularArea = function () {
    return this.x * this.y;
  };
}

const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  let valorX = parseFloat(document.getElementById("base").value);
  let valorY = parseFloat(document.getElementById("altura").value);

  let objRetangulo = new Retangulo(valorX, valorY);

  let area = objRetangulo.calcularArea();

  document.getElementById("resultado").innerText =
    "A área do retângulo é: " + area;
});
