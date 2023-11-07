

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const user = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
  
      // Hacer una solicitud de autenticación, por ejemplo, a través de una API o verificación de usuario en local
      // Supongamos que tenemos una lista de usuarios en un archivo JSON llamado 'users.json'
      const response = await fetch('../../data/users.json');
      const users = await response.json();
      console.log(users);
  
      // Buscar el usuario en la lista
      const foundUser = users.find((usersData) => 
      (usersData.user === user && usersData.password === password));
      console.log(foundUser)
      if (foundUser) {
        // Usuario encontrado, guardar los datos en el sessionStorage
        sessionStorage.setItem('user', JSON.stringify(foundUser));
  
        if (foundUser.rol === 'admin') {
          // Si el usuario tiene rol de admin, redirigirlo a la página de administrador
          window.location.href = "admin.html";
        } else if (foundUser.rol === 'user') {
          // Si el usuario tiene rol de usuario, redirigirlo a la página principal
          window.location.href = "index.html";
        }
      } else {
        // Usuario no encontrado, muestra un mensaje de error
        alert("Credenciales inválidas. Por favor, intente de nuevo.");
      }
    });
  });
  