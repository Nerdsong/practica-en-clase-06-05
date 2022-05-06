const USUARIO_REGISTRADO = "Nelson"
const CONTRASENIA_REGISTRADA = "123"

let usuarioIngresado = "usuario por defecto"
let contraseniaIngresada = "contraseña por defecto"

function verificacion(){
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contraseniaIngresada = document.querySelector('#contrasenia_ingresada').value;

    if (usuarioIngresado == USUARIO_REGISTRADO && contraseniaIngresada == CONTRASENIA_REGISTRADA) {
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Usuario ${usuarioIngresado} bienvenido! </h1>
        `;
    }
    else {
        document.querySelector('#mensaje_resultado').innerHTML = `
        <h1> Usuario y/o contraseña incorrectos </h1>
    `;
    }
}