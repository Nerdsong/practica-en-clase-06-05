const VALOR_BTC_A_ETH = 13.44
const VALOR_BTC_A_USD = 35591.40

let valorBtcIngresado = "valor ingresado por usuario";
let TotalUsd = "valor total en USD";
let TotalEth = "valor total en ETH";

function cambioEth(){
    valorBtcIngresado = document.querySelector('#valor_btc_ingresado').value;
    TotalEth = valorBtcIngresado * VALOR_BTC_A_ETH; 
    document.querySelector('#mensaje_resultado').innerHTML = `<h3> Recibirás un total de ${TotalEth} ETH</h3>`
    }

function cambioUsd(){
    valorBtcIngresado = document.querySelector('#valor_btc_ingresado').value;
    TotalUsd = valorBtcIngresado * VALOR_BTC_A_USD; 
    document.querySelector('#mensaje_resultado').innerHTML = `<h3> Recibirás un total de ${TotalUsd} USD</h3>`
        }