window.document.addEventListener('DOMContentLoaded', function() {

    const uno = document.querySelector('#uno');
    const dos = document.querySelector('#dos');
    const tres = document.querySelector('#tres');
    const cuatro = document.querySelector('#cuatro');
    const cinco = document.querySelector('#cinco');
    const seis = document.querySelector('#seis');
    const siete = document.querySelector('#siete');
    const ocho = document.querySelector('#ocho');
    const nueve = document.querySelector('#nueve');
    const cero = document.querySelector('#cero');

    const sumar = document.querySelector('#sumar');
    const restar = document.querySelector('#restar');
    const multiplicar = document.querySelector('#multiplicar');
    const dividir = document.querySelector('#dividir');

    const igual = document.querySelector('#igual');

    const pantalla = document.querySelector('#pantalla');
    const pantalla2 = document.querySelector('#pantalla2');
   
    let botonesPulsadosParaOperar = [];

    uno.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
        
        
    });
    
    dos.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
        
    });
    
    tres.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    
    cuatro.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    
    cinco.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    
    seis.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    
    siete.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    
    ocho.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    
    nueve.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    
    cero.addEventListener("click", (e) => {
        botonesPulsadosParaOperar.push(e.target.value);
        pantalla.textContent = e.target.value;
        mostrarPantalla();
    });
    

    let suma = false;
    sumar.addEventListener("click", (e) => {
        suma = true;
        pantalla.textContent = "+";

    });

    restar.addEventListener("click", (e) => {
        pantalla.textContent = "-";
    });

    multiplicar.addEventListener("click", (e) => {
        pantalla.textContent = "x";
    });

    dividir.addEventListener("click", (e) => {
        pantalla.textContent = "/";
    });

    console.log(botonesPulsadosParaOperar);

    
    function mostrarPantalla() {
        for (const numero of botonesPulsadosParaOperar) {
            const acumuladoNumero = botonesPulsadosParaOperar.join('');
            pantalla2.textContent = acumuladoNumero;
        }
    };
    
    
    igual.addEventListener("click", (e) => {
        if (suma = true) {
            sumarNumeros();
        }
    });



    function sumarNumeros() {
        let resultado = 0;
        for (let numero of botonesPulsadosParaOperar) {
            resultado += parseInt(numero);
        }

        pantalla.textContent = resultado;
    };







});




    


        





    
