export default class cliente{
    constructor(nombre, impuesto){
        this._nombre=nombre
        this._impuesto=impuesto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre=nombre
    }
    calcularImpuesto(){

        let impuesto = (this._impuesto.monto_bruto_anual - this._impuesto.deduccion) * 0.21;
        return resultado.innerHTML=`Estimado/a ${this._nombre}, el valor de impuestos anuales a pagar es de ${impuesto}, dejando un ingreso final de ${this._impuesto.monto_bruto_anual - this._impuesto.deduccion - impuesto}`  
    }
}
