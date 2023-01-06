class Persona
{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    };
};

const personas = [];
personas[0] = new Persona ("Juan", 45);
personas[1] = new Persona ("Pedro", 31);
personas[2] = new Persona ("María", 28);
personas[3] = new Persona ("Ana", 37);

console.log(personas);

document.addEventListener('DOMContentLoaded', ()=>{

    
    const enviar = document.querySelector('#enviar');
    const listaFamilia = document.querySelector('#listaFamilia');
    //muestro la familia
    for (const persona of personas) {
        const li = document.createElement('li');
        li.textContent = persona.nombre + ' (' + persona.edad + ')';
        listaFamilia.appendChild(li);
    };
    
    enviar.addEventListener('click', (e)=>{
        const yearsNumero = document.querySelector('#numero').value;
        const listaFamiliaFuturo = document.querySelector('#listaFamiliaFuturo');
        
        fragment = document.createDocumentFragment();
        
        for (const persona of personas) {
            persona.edad = (persona.edad + parseInt(yearsNumero));
            const li = document.createElement('li');
            li.textContent = persona.nombre + ' (' + persona.edad + ')';
            fragment.appendChild(li);
            
        }
        
        listaFamiliaFuturo.appendChild(fragment);



        


        
        




    })






});