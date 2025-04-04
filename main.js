const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
});
cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
});



document.addEventListener("DOMContentLoaded", () => {
    const videoFrame = document.querySelector(".video-frame");

    if (videoFrame) {
        videoFrame.addEventListener("click", () => {
            videoFrame.classList.toggle("fullscreen"); // Alterna la clase fullscreen
        });
    } else {
        console.error("No se encontró ningún elemento con la clase .video-frame");
    }
});

/* El siguiente código es para el formulario de contacto. Cuando se envía el formulario, se muestra un mensaje de éxito y se oculta el formulario. */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // Selecciona el formulario
    const mensajeEnviado = document.getElementById("mensaje-enviado"); // Selecciona el contenedor del mensaje
    const inputs = form.querySelectorAll(".input"); // Selecciona todos los campos con la clase .input

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario recargue la página

        let formularioValido = true;

        // Validar que todos los campos estén rellenados
        inputs.forEach((input) => {
            if (!input.value.trim()) {
                formularioValido = false;
                input.style.borderColor = "red"; // Resalta el campo vacío en rojo
                input.nextElementSibling.textContent = "Este campo es obligatorio"; // Muestra un mensaje de error
                input.nextElementSibling.style.color = "red"; // Cambia el color del mensaje a rojo
            } else {
                input.style.borderColor = ""; // Restaura el borde si está correcto
                input.nextElementSibling.textContent = ""; // Limpia el mensaje de error
            }
        });

        if (formularioValido) {
            mensajeEnviado.textContent = "¡Mensaje enviado con éxito!"; // Añade el texto del mensaje
            mensajeEnviado.style.display = "block"; // Muestra el mensaje
            mensajeEnviado.style.color = "green"; // Cambia el color del mensaje a verde
            form.reset(); // Limpia los campos del formulario
        } else {
            mensajeEnviado.textContent = "Por favor, completa todos los campos."; // Mensaje de error general
            mensajeEnviado.style.display = "block"; // Muestra el mensaje
            mensajeEnviado.style.color = "red"; // Cambia el color del mensaje a rojo
        }
    });
});