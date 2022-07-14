export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    };
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerrHTML= "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerrHTML= mostrarMensajesDeError(tipoDeInput,input);
    };
};

const tipoDeErrores = [
    "valueMissing",
    "typeMissing",
    "patterMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMissing: "Este correo no es valido",
    },
    password: {
        valueMissing: "Es campo contraseña no puede estar vacio",
        patterMismatch: "Al menos 6 caracteres, maximo 12, debe contener un Mayuscula, un letra minuscula, y un numero",
    },
    nacimiento: {
        valueMissing: "El campo fecha no puede estar vacio",
        customError: "debes tener al menos 18 años de edad pilluelo",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "El formato requerido es xxxxxxxxx 9 numeros",
    },
    direccion: {
        valueMissing: "El campo direccion no puede estar vacio",
        patterMismatch: "La direccion debe tener entre 10 y 40 caracteres",
    },
    ciudad: {
        valueMissing: "El campo ciudad no puede estar vacio",
        patterMismatch: "La ciudad debe tener entre 10 y 40 caracteres",
    },
    estado: {
        valueMissing: "El campo estado no puede estar vacio",
        patterMismatch: "El estado debe tener entre 10 y 40 caracteres",
    },
};

const validadores = {
    nacimiento: (input)=> validarNacimiento(input),
};

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad pilluelo";
    };
    input.setCustomValidity(mensaje);
};

function mostrarMensajesDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje= mensajesDeError[tipoDeInput][error];
        };
    });
return mensaje;
};

function mayorEdad (fecha){
    const fechaActual = new Date();
    const diferenciaFechas= new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas<=fechaActual;
};