window.onload = () => {
    let noticiaDados = JSON.parse(sessionStorage.getItem('noticia-atual'))
    console.log('noticia ==> ', noticia);
    let principal = document.getElementById("container-noticia");
    // for (let i = 0; i < 12; i++) {
        var noticia = document.createElement("div");
        noticia.classList.add('card')
        noticia.classList.add('col-10')
        noticia.classList.add('offset-1')
        if (noticiaDados.urlToImage) {
            var imagem = document.createElement("img");
            imagem.src = noticiaDados.urlToImage
            imagem.classList.add('card-img-top')
            noticia.appendChild(imagem)
        }
        var body = document.createElement("div");
        body.classList.add('card-body')
        var title = document.createElement('h5')
        title.classList.add('card-title')
        title.textContent = noticiaDados.title
        body.appendChild(title)
        var botao = document.createElement('p')
        botao.classList.add('card-text')
        botao.textContent = noticiaDados.content
        // botao.setAttribute('id-noticia', i)
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
    // }
}