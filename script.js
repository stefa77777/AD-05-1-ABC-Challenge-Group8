
document.addEventListener('DOMContentLoaded', () => {
    const elementosH5 = document.querySelectorAll('h5');

    elementosH5.forEach(h5 => {
        h5.addEventListener('click', () => {
            h5.style.color = obtenerColorAleatorio();
        });
    });
});