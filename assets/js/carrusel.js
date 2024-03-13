document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.contenedor_redactores');
    const carouselItems = document.querySelectorAll('.grupo-tarjetas');
    const numItems = carouselItems.length;
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Agregar puntos de navegación
    for (let i = 0; i < numItems; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', function() {
            goToIndex(i);
        });
        dotsContainer.appendChild(dot);
    }

    function goToIndex(index) {
        currentIndex = index;
        const translateX = -currentIndex * 100 + '%';
        carouselInner.style.transform = `translateX(${translateX})`;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Inicializar puntos y carrusel
    goToIndex(0);
});
