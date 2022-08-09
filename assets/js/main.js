import impuestos from './impuestos.js';
import cliente from './cliente.js';

let calcularDe=document.getElementById('calcularDe')
calcularDe.addEventListener('click', deducciones)

function deducciones(event) {
    event.preventDefault()
    let ingreso = document.getElementById('monto').value
    console.log(ingreso)
    let deduccion = ( 19 * (parseInt(ingreso) / parseInt(100))) //calculadora de deducciones en el 19%
    document.getElementById('deducciones').innerHTML+=deduccion
}


let calcular=document.getElementById('calcular')
let resultado = document.getElementById('resultado')

calcular.addEventListener('click', calculadora)

function calculadora(event){
    event.preventDefault();
    let nombre=document.getElementById('nombre').value
    let monto = document.getElementById('monto').value
    let deduccion= ( 19 * (parseInt(monto) / parseInt(100)))

    if (parseInt(monto) && isNaN(nombre) && parseInt(deduccion)) {
    let impuestoCliente = new impuestos(parseInt(monto), parseInt(deduccion))
        let impuesto = new impuestos(parseInt(monto), parseInt(deduccion))
        let cliente1 = new cliente(nombre, impuesto)
    resultado=cliente1.calcularImpuesto()
    }else{
         return resultado.innerHTML=`Estimado/a ${this._nombre}, el valor de impuestos anuales a pagar es de ${impuesto} dejando un ingreso final de ${this._impuesto.monto_bruto_anual - this._impuesto.deduccion - impuesto}`
    }

}   



