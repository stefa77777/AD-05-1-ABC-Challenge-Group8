let contadorLetras = 0;

// Función para voltear las cards e incrementar el contador
function voltear(cardElement) {
  // 1. Verificar si es la primera vez que se descubre la card
  if (!cardElement.classList.contains('volteada')) {
    contadorLetras++;
    document.getElementById('contador').textContent = contadorLetras;
  }

  // 2. Alternar la clase 'volteada' para ejecutar el efecto CSS
  cardElement.classList.toggle('volteada');
}

// Función para filtrar por "vocales" o "todas" usando clases de Bootstrap
function filtrar(tipo) {
  const contenedores = document.querySelectorAll('.card-container');

  contenedores.forEach(container => {
    if (tipo === 'todas') {
      container.classList.remove('d-none');
    } else if (tipo === 'vocales') {
      if (container.dataset.tipo === 'vocal') {
        container.classList.remove('d-none');
      } else {
        container.classList.add('d-none');
      }
    }
  });
}