import impuestos from './impuestos.js';
import cliente from './cliente.js';


let calcular=document.getElementById('calcular')
let resultado=document.getElementById('resultado')


calcular.addEventListener('click', calculadora)

function calculadora(event){
    event.preventDefault();
    let nombre=document.getElementById('nombre').value
    let monto=document.getElementById('monto').value
    let deducciones=document.getElementById('deducciones').value

   if (parseInt(monto) && isNaN(nombre) && parseInt(deducciones)){ let impuestoCliente = new impuestos(parseInt(monto), parseInt(deducciones))
    let impuesto= new impuestos (monto, deducciones)
    let cliente1 = new cliente (nombre, impuesto)
    resultado=cliente1.calcularImpuesto()
    }else{
        console.log('ingrese valores numéricos en la sección de ingresos y/o deducciones')
    }

}


