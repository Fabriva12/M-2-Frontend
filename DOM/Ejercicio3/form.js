const esEmpleado = document.getElementById('Si');
const noEsEmpleado = document.getElementById('No');
const container = document.getElementById('container');

const newInput = () =>{
    if(esEmpleado.checked){
        if (!container.querySelector('input')){
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Número de empleado';
        container.appendChild(input);}
    }
    else if (noEsEmpleado.checked){
    container.innerHTML = '';
    }
}

esEmpleado.addEventListener('change', newInput);
noEsEmpleado.addEventListener('change', newInput);