function buscaFilme() {
  const busca = document.getElementById("busca").value.toLocaleLowerCase();
  const catalogo = document.getElementById("catalogo-on");
  const card = document.getElementById("filme-resultado");

  const filme = filmes.filter((filme) => filme.idFilme.toLowerCase().includes(busca) || filme.titulo.toLowerCase().includes(busca));
  if (busca === "") {
    catalogo.style.display = "block";
    
  } else if (filme.length >= 1) {
    card.style.display = "block";
    catalogo.style.display = "none";

    const imagem = document.getElementById("filme__img");
    imagem.setAttribute("src", filme[0].img);
    imagem.setAttribute("alt", filme[0].titulo);
    imagem.setAttribute("name", filme[0].idFilme);

    const tituloP = document.getElementById("tituloP");
    tituloP.textContent = filme[0].titulo;
  } else {
    alert("Filme não encontrado");
  }
}
