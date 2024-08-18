// Encriptador de Texto, Rodrigo Sanchez Corona
// La letra "e" es convertida para "enter".
// La letra "i" es convertida para "imes".
// La letra "a" es convertida para "ai".
// La letra "o" es convertida para "ober".
// La letra "u" es convertida para "ufat".

// Variables para elementos del DOM
const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".texto-procesado");
const botonCopiar = document.querySelector(".boton-copiar");

// Mostrar el div 'ocultar' al cargar la página
window.onload = () => {
    document.querySelector('.ocultar').classList.remove('hidden');
};

// Función para encriptar texto
const encriptar = (texto) => {
    const codigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    codigo.forEach(([letra, reemplazo]) => {
        if (texto.includes(letra)) {
            texto = texto.replaceAll(letra, reemplazo);
        }
    });

    return texto;
};

// Función para manejar el botón de encriptar
const botonEncriptar = () => {
    if (areaTexto.value === "") {
        mostrarMensajeError("¡Por favor, ingrese un texto o palabra!");
    } else if (/[^a-z\s]/.test(areaTexto.value)) {
        mostrarMensajeError("¡Por favor ingrese sólo minúsculas sin caracteres especiales ni tildes!");
    } else {
        procesarTexto(encriptar);
    }
};

// Función para desencriptar texto
const desencriptar = (texto) => {
    const codigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    codigo.forEach(([letra, reemplazo]) => {
        if (texto.includes(reemplazo)) {
            texto = texto.replaceAll(reemplazo, letra);
        }
    });

    return texto;
};

// Función para manejar el botón de desencriptar
const botonDesencriptar = () => {
    if (areaTexto.value === "") {
        mostrarMensajeError("Ingrese un texto o palabra");
    } else if (/[^a-z\s]/.test(areaTexto.value)) {
        mostrarMensajeError("Ingrese sólo minúsculas sin caracteres especiales ni tildes");
    } else {
        procesarTexto(desencriptar);
    }
};

// Función para copiar el texto encriptado o desencriptado
const copiar = () => {
    const resultado = mensaje.value;
    const tempAreaTexto = document.createElement("textarea");
    
    tempAreaTexto.value = resultado;
    document.body.appendChild(tempAreaTexto);
    tempAreaTexto.select();
    document.execCommand("copy");
    document.body.removeChild(tempAreaTexto);

    mostrarMensajeConfirmacion("Texto copiado al portapapeles.");
};

// Función para mostrar un mensaje de error
const mostrarMensajeError = (mensajeError) => {
    const mensajeErrorElem = document.getElementById("mensaje-error");
    mensajeErrorElem.textContent = mensajeError;

    setTimeout(() => {
        mensajeErrorElem.textContent = "";
    }, 5000);
};

// Función para mostrar un mensaje de confirmación
const mostrarMensajeConfirmacion = (mensajeConfirmacion) => {
    const mensajeConfirmacionElem = document.getElementById("mensaje-confirmacion");
    mensajeConfirmacionElem.textContent = mensajeConfirmacion;

    setTimeout(() => {
        mensajeConfirmacionElem.textContent = "";
    }, 5000);
};

// Función para procesar texto encriptado o desencriptado
const procesarTexto = (funcion) => {
    const textoProcesado = funcion(areaTexto.value);
    mensaje.value = textoProcesado;
    areaTexto.value = "";
    mensaje.style.backgroundImage = "none";
    document.querySelector('.ocultar').classList.add('hidden');
};
