noticiaAtual = null
noticias = []
window.onload = () => {
    sessionStorage.clear()
    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=br&' +
        'apiKey=3eaa50ca46284893ad65ef14d94e137d';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            response.json().then(dados => {
                console.log("dados ==> ", dados);
                noticias = dados.articles
                sessionStorage.setItem('noticias', JSON.stringify(dados.articles))
                this.noticiasPrincipais(dados.articles)
            })
        })
}

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
function noticiasPrincipais(news) {
    let principal = document.getElementById("principal");
    for (let i = 0; i < 12; i++) {
        var noticia = document.createElement("div");
        noticia.classList.add('card')
        noticia.classList.add('col-4')
        if (news[i].urlToImage) {
            var imagem = document.createElement("img");
            imagem.src = news[i].urlToImage
            imagem.classList.add('card-img-top')
            noticia.appendChild(imagem)
        }
        var body = document.createElement("div");
        body.classList.add('card-body')
        var title = document.createElement('h5')
        title.classList.add('card-title')
        title.textContent = news[i].title
        body.appendChild(title)
        var botao = document.createElement('a')
        botao.classList.add('btn')
        botao.classList.add('btn-primary')
        // botao.classList.add('btn-lg')
        botao.classList.add('btn-block')
        botao.textContent = 'Ver Mais'
        botao.setAttribute('id-noticia', i)
        botao.addEventListener('click', this.abrirNoticia, false)
        // botao.href = '/noticia.html'
        body.appendChild(botao)
        // noticia.getAttribute('teste')

        // if (!news[i].urlToImage) {
        //     var resumo = document.createElement('p')
        //     resumo.textContent = news[i].description
        //     resumo.classList.add('card-text')
        //     noticia.appendChild(resumo)
        // }


        noticia.appendChild(body)
        principal.appendChild(noticia)
    }
}

function abrirNoticia(noticia) {
    sessionStorage.getItem('noticia-atual')
    sessionStorage.setItem('noticia-atual', JSON.stringify(noticias[noticia.target.getAttribute('id-noticia')]))
    window.location.href = 'noticia.html'
}