const statusText = document.getElementById("status");
const windowImage = document.getElementById("janela");

windowImage.addEventListener("mouseover", function () {
  windowImage.src = "open.png";
  statusText.textContent = "Janela aberta";
});

windowImage.addEventListener("mouseout", function () {
  windowImage.src = "closed.png";
  statusText.textContent = "Janela Fechada";
});

windowImage.addEventListener("click", function () {
  windowImage.src = "broken.png";
  statusText.textContent = "Janela Quebrada";
});
