alert("Bienvenido a nuestro generador de contraseñas");

// Obtener los elementos del DOM
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

// Conjunto de caracteres para generar contraseñas
const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@·/(+*$#?";

// Función para generar la contraseña
function generar() {
  let numeroDigitado = parseInt(cantidad.value);

  // Validación de la cantidad de caracteres
  if (numeroDigitado < 8) {
    alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
    return; // Salir de la función si no se cumple la condición
  }

  let password = "";
  for (let i = 0; i < numeroDigitado; i++) {
    // Obtener un carácter aleatorio de la cadenaCaracteres
    let caracterAleatorio = cadenaCaracteres.charAt(
      Math.floor(Math.random() * cadenaCaracteres.length)
    );
    password += caracterAleatorio;
  }

  contrasena.value = password; // Asignar la contraseña generada al campo de texto
}

// Función para limpiar el campo de la contraseña
function limpiarInput() {
  contrasena.value = ""; // Usar directamente la variable contrasena
}
