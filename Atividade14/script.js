document.getElementById("btnAcao").addEventListener("click", function() {
    const textoEntrada = document.getElementById("entrada").value;
    const escolha = document.getElementById("acao").value;
    const paragrafoSaida = document.getElementById("saida");

    if (textoEntrada.trim() === "") {
        alert("Por favor, preencha o campo de texto.");
        return;
    }

    if (escolha === "") {
        alert("Selecione um tipo de conversão na lista.");
        return;
    }

    if (escolha === "upper") {
        paragrafoSaida.textContent = textoEntrada.toUpperCase();
    } else {
        paragrafoSaida.textContent = textoEntrada.toLowerCase();
    }
});