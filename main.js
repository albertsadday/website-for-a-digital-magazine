// Carga poemas desde poemas.js
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-poemas');
    poemsData.forEach(poema => {
        const card = document.createElement('div');
        card.className = 'card-poema';
        card.innerHTML = `
            <h4>${poema.titulo}</h4>
            <p>${poema.fragmento}</p>
            <button onclick="mostrarPoema('${poema.titulo}', '${poema.texto}')">Leer completo</button>
        `;
        contenedor.appendChild(card);
    });
});

// Modal interactivo
function mostrarPoema(titulo, texto) {
    document.getElementById('titulo-poema').textContent = titulo;
    document.getElementById('texto-poema').textContent = texto;
    document.getElementById('modal-poema').style.display = 'block';
}

document.querySelector('.cerrar').addEventListener('click', () => {
    document.getElementById('modal-poema').style.display = 'none';
});
