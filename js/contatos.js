function enviar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const assunto = document.getElementById("assunto").value;
  const comentario = document.getElementById("comentario").value;

  if (nome === "") {
    alert("Por favor, preencha o campo Nome");
  } else if (email === "") {
    alert("Por favor, preencha o campo Email");
  } else if (telefone === "") {
    alert("Por favor, preencha o campo Telefone");
  } else if (assunto === "") {
    alert("Por favor, preencha o campo Assunto");
  } else if (comentario === "") {
    alert("Por favor, preencha o campo Comentario");
  } else {
    window.location.href = "../pages/agradecimento.html";
  }
}
