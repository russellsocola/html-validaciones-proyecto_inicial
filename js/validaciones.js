export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    };
};

const validadores = {
    nacimiento: (input)=> validarNacimiento(input),
};

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años pilluelo"
    }
    
    input.setCustomValidity(mensaje);
}

function mayorEdad (fecha){
    const fechaActual = new Date();
    const diferenciaFechas= new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas<=fechaActual;
}