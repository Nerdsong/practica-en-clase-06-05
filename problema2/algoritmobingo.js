let primerNumero = "primer numero ingresado"
let segundoNumero = "segundo numero ingresado"
let tercerNumero = "tercer numero ingresado"

function validarBingo(){
    primerNumero = document.querySelector('#primer_numero').value;
    segundoNumero = document.querySelector('#segundo_numero').value;
    tercerNumero = document.querySelector('#tercer_numero').value;
    if (primerNumero == segundoNumero && primerNumero == tercerNumero){
        document.querySelector('#resultado').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/9mmF8zOlh_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
}