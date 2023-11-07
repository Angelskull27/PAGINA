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
