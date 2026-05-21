function validar() {
  let elementos = document.formularioContato.elements;

  let nome = elementos["nome"].value;
  let email = elementos["email"].value;
  let comentario = elementos["comentario"].value;
  let radios = elementos["pesquisa"];

  if (nome.trim().length < 10) {
    alert("O nome não pode ter menos que 10 caracteres.");
    return false;
  }

  let padraoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!padraoEmail.test(email)) {
    alert(
      "Por favor, insira um endereço de e-mail válido com domínio (ex: usuario@dominio.com).",
    );
    return false;
  }

  if (comentario.trim().length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    return false;
  }

  let respostaSelecionada = "";
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      respostaSelecionada = radios[i].value;
    }
  }

  if (respostaSelecionada === "") {
    alert("A pesquisa é obrigatória. Por favor, selecione uma opção.");
    return false;
  }

  if (respostaSelecionada === "sim") {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre à está página!");
  }

  return true;
}
