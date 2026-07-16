let edadLadoIzquierdo = [];
let edadLadoDerecha = [];

function agregarEdad (){
    let edad = recuperarInt("edad");
    edadLadoIzquierdo.push(edad);
    pintarArregloIzquierda();
}