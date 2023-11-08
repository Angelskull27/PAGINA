const validateUser = ()=>{
  const user = JSON.parse(sessionStorage.getItem('user'));

  if (user.rol === 'admin') {
    console.log('Bienvenido admin');
  } else if (user.rol === 'user') {
    console.log('Bienvenido usuario');
    window.location.href = "index.html";
  } else {
    console.log('Rol no encontrado, redirigiendo al login');
    window.location.href = "login.html";
  }
  
}
validateUser();
const tableShow = window.location.search.split('=')[1];
const tableSection = document.querySelector('#tableSection');

console.log(tableSection);

fetch(`./data/${tableShow}.json`)
.then( response => response.json())
.then( data => {

    // console.log(Object.keys())
    tableSection.innerHTML = `
    <table class="table table-striped" id="myTable">
        <thead>
            <tr>
                ${Object.keys(data[0]).map( key => `<th scope="col">${key.toUpperCase()}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${data.map( row => `
                <tr>
                    ${Object.keys(row).map( cell => `<td>${row[cell]}</td>`).join('')}
                </tr>
            `).join('')}
        
        <tbody>
        </tbody>
    </table>
    `

    let table = new DataTable('#myTable', {
        // options
    });

    
})
