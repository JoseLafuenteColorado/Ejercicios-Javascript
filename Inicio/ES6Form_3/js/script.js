console.log('prueba');

document.addEventListener('DOMContentLoaded', function() {

    const ejecuta = document.querySelector('#B1');
    const respuesta = document.querySelector('#respuesta');

    ejecuta.addEventListener('click', ()=> {

        calcula();

        function calcula() {
           const entrada = eval(document.datos.entrada.value);
           respuesta.textContent = entrada;

        };

    });





});