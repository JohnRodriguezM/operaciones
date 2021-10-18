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

/*inicia operaciones geometricas*/

let perimetro_Area_Cuadrado = document.getElementById('numeroPerimetro_Area');
let selector = document.getElementById('opcionesPerimetroCuadrado')

function perimetroCuadrado(){
    let x = document.getElementById('parrafoRespuestaPerimetro').innerHTML = `El perimetro del cuadrado es igual a ${perimetro_Area_Cuadrado.value * 4} ${selector.value}`
    return x;
}
function areaCuadrado(){
    let x = document.getElementById('parrafoRespuestaArea').innerHTML = `El area del cuadrado es igual a ${perimetro_Area_Cuadrado.value**2} ${selector.value} cuadrados`
    return x;
}

/*altura del triangulo*/ 
let numeroUnoAltura = document.getElementById('alturaNumero1');
let numeroDosAltura = document.getElementById('alturaNumero2')
let medidas = document.getElementById('medidasDelTrianguloOpciones');



function alturaTriangulo() {
    let operacion = (Math.sqrt((numeroUnoAltura.value * numeroUnoAltura.value) + (numeroDosAltura.value * numeroDosAltura.value)))
    operacion = operacion.toFixed(2);
    let altura = document.getElementById('alturaTrianguloParrafo').innerHTML = "La altura del triangulo es igual a " + operacion  + ' ' + medidas.value;
    
    return altura;

}