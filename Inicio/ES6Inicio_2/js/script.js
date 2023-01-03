const a = 2;
const b = 8;

const resultado = a * b;

let texto = [a, b, resultado];

document.addEventListener('DOMContentLoaded', () => {
    const parrafoResultado = document.querySelector('#resultado');
    const fragment = document.createDocumentFragment();
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;
    fragment.appendChild(parrafo);
    parrafoResultado.appendChild(fragment);
    
})


