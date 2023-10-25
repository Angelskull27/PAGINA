const getNoticias = async() => {

    const data = await fetch('');
    const noticias = await data.json();
    let news = document.querySelector('#news');
    
    noticias.forEach( (element) => {
    
        news.innerHTML += `
        <article class="eventos">
    
            <h3>${ element.title }</h3>
            <img src="./assets/images/${ element.image }.jpg" alt="">
            <p>${ element.description }</p>
            <a href="#">Leer más</a>
    
        </article> 
    `;
    
    })
}

getNoticias();