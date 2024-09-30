

function criarFilme(id){
    const filme = filmes.filter(filme => filme.idFilme == id);
    const inicio = document.getElementById('inicio');

    const divCol = document.createElement('div');
    divCol.className = 'col-lg-4 capa';
    
    const imgCapa = document.createElement('img');
    imgCapa.className = 'capa-img';
    imgCapa.src = filme.img;
    
    inicio.appendChild(divCol);
    divCol.appendChild(imgCapa);


    window.location.href = '../pages/filmes.html';

}




// const novoPoster = document.createElement('div.col-lg-4.capa');
// novoPoster.innerHTML = `
// <img src="/assets/img/Duna2Corpo.webp" alt=" class="capa-img"/>`

// const novoTexto = document.createElement('div.col-lg-8.texto');
// novoTexto.innerHTML = `

// `