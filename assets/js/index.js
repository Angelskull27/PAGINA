const getNoticias = async() => {

    const data = await fetch('./data/eventos.json');
    const noticias = await data.json();
    console.log(noticias);
    let news = document.querySelector('#news');
    
    noticias.forEach( (element) => {
    
        news.innerHTML += `
        <section class="eventos">
        <div class="evento">
            <h3>${ element.titulo }</h3>
            <img src="./assets/img/${ element.imagen }" alt="">
            <p>${ element.descripcion }</p>
            <a href="#">Leer más</a>
            </div>
        </section> 
    `;
    
    })
}

getNoticias();