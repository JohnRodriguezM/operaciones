let numeral1 = document.getElementById('numero1');
var numeral2 = document.getElementById('numero2');


function sumaNumeros() {
    let sumadora = document.getElementById('numero3').innerHTML = Number(numeral1.value) + Number(numeral2.value);
    return sumadora;
}
function restaNumeros() {
    let restadora = document.getElementById('numero4').innerHTML = Number(numeral1.value) - Number(numeral2.value);
    return restadora;
}
function multiplicaNumeros() {
    let multiplicadora = document.getElementById('numero5').innerHTML = Number(numeral1.value) * Number(numeral2.value);
    return multiplicadora;
}
function divideNumeros() {
    let divisora = document.getElementById('numero6').innerHTML = Number(numeral1.value) / Number(numeral2.value);
    return divisora;
}

function factorialNumero1() {
    let factor = 1;
    for(i = 1; i <= numeral1.value; i++){
        factor *= i;
    }
    let factor1 = document.getElementById('numero7').innerHTML =  factor;
    return factor1;
}
function factorialNumero2() {
    let factorr = 1;
    for(i = 1; i <= numeral2.value; i++){
        factorr *= i;
    }
    let factor2 = document.getElementById('numero8').innerHTML =  factorr;
    return factor2;
}