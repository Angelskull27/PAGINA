# PAGINA
Clase: Tienda Online

Atributos:
nombre: String - El nombre de la tienda en línea.
ubicación: String - La ubicación virtual o dirección física de la tienda.
direcciónWeb: String - La dirección web de la tienda en línea.
númeroDeTeléfono: String - Número de contacto de la tienda.
calificaciónPromedio: Decimal - La calificación promedio de la tienda según las reseñas de los usuarios.
políticasDeEnvío: String - Información sobre las políticas de envío de la tienda.
Clase: Usuario

Atributos:
nombre: String - Nombre del usuario registrado.
correoElectrónico: String - La dirección de correo electrónico del usuario.
contraseña: String - La contraseña del usuario.
direcciónEnvío: String - La dirección donde se envían los productos.
historialCompras: Lista de "Órdenes de Compra" - Almacena un historial de las compras anteriores del usuario.
tarjetaDeCrédito: String - La información de la tarjeta de crédito asociada a la cuenta del usuario.
Clase: Celular

Atributos:
marca: String - La marca del teléfono celular.
modelo: String - El modelo específico del teléfono celular.
precio: Decimal - El precio del teléfono celular en la tienda en línea.
stock: Entero - La cantidad de unidades disponibles en el inventario.
sistemaOperativo: String - El sistema operativo del teléfono.
capacidadAlmacenamiento: Entero - La capacidad de almacenamiento del teléfono (por ejemplo, 64 GB, 128 GB, etc.).
descripción: String - Una descripción detallada del producto.
imágenes: Lista de String - URLs de imágenes del producto.
Clase: Orden de Compra

Atributos:
fechaCompra: Fecha/Time - La fecha y hora en que se realizó la compra.
cantidad: Entero - La cantidad de unidades de un celular específico que se compraron en la transacción.
direcciónEntrega: String - La dirección a la que se entregará la compra.
estado: String - El estado actual de la orden (pendiente, en tránsito, entregado, etc.).
númeroSeguimiento: String - Número de seguimiento del envío.
subtotal: Decimal - El costo total de los productos antes de impuestos y envío.

Nuestro proyecto se basa en una tienda online para la venta de celulares con el fin de que
los usuarios puedan comprarlos de forma sencilla. nosotros elegimos este proyecto ya
que nos inclinamos por la parte de la tecnología y es algo que nos gusta a todos y por eso
nos parece bien trabajar con este tema aparte de que nos gustaría aprender del como se
realiza el proceso de compra y todo cuando adquirimos un celular
