// Efecto hover en artículos
document.querySelectorAll('.articulo').forEach(articulo => {
    articulo.addEventListener('mouseenter', () => {
        articulo.style.transform = 'scale(1.05)';
    });
    articulo.addEventListener('mouseleave', () => {
        articulo.style.transform = 'scale(1)';
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
