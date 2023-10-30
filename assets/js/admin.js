const rol = sessionStorage.getItem('rol');

if (rol === 'admin') {
  console.log('Bienvenido admin');
  window.location.href = "admin.html";
} else if (rol === 'user') {
  console.log('Bienvenido usuario');
  window.location.href = "index.html";
} else {
  console.log('Rol no encontrado, redirigiendo al login');
  window.location.href = "login.html";
}
