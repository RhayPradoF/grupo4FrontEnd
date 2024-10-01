let imgCapa = document.getElementById('imgCapa');
let titulo = document.getElementById('titulo');
let sinopse = document.getElementById('sinopse');
let avaliacao = document.getElementById('avaliacao');
let duracao = document.getElementById('duracao');
let categoria = document.getElementById('categoria');



function criarFilme(id){

    var filme = filmes.filter(filme => filme.idFilme == id)[0];   
    

    sessionStorage.setItem('imgCapa', filme.img);
    sessionStorage.setItem('titulo', filme.titulo);
    sessionStorage.setItem('sinopse', filme.sinopse);
    sessionStorage.setItem('avaliacao', filme.avaliacao);
    sessionStorage.setItem('duracao', filme.duracao);
    sessionStorage.setItem('categoria', filme.categoria);
    sessionStorage.setItem('linkTrailer', filme.linkTrailer);
    
    
    window.location.href = '../pages/filmes.html';

}


if (window.location.pathname.endsWith('filmes.html')) {
    window.onload = function() {
        imgCapa.src = sessionStorage.getItem('imgCapa');
        titulo.textContent = sessionStorage.getItem('titulo');
        sinopse.textContent = sessionStorage.getItem('sinopse');
        avaliacao.textContent = sessionStorage.getItem('avaliacao');
        duracao.textContent = sessionStorage.getItem('duracao');
        categoria.textContent = sessionStorage.getItem('categoria');
    }
}


function assista(){
    var linkTrailer = sessionStorage.getItem('linkTrailer');
    console.log(linkTrailer);
     
    window.location.href = linkTrailer;
}