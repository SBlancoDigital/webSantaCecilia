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