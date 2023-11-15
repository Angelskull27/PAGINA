const getNoticias = async() => {

    const data = await fetch('../../data/accesorios.json');
    const noticias = await data.json();
    console.log(noticias);
    let news = document.querySelector('#usos');
    
    noticias.forEach( (element) => {
    
        news.innerHTML += `
        <section class="accesorios">
        <div class="accesorio">
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