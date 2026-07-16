let edadLadoIzquierdo = []; //declaramos los arreglos
let edadLadoDerecha = [];

function agregarEdad (){
    let edad = recuperarInt("edad"); //utilizamos utilitarios para recuperar la id edad en html caja de texto
    edadLadoIzquierdo.push(edad); //guardamos con push el arreglo Izquierdo
    pintarArregloIzquierda(); //llama a la funcion
}

function pintarArregloIzquierda() {

    let cmpTabla = document.getElementById("tablaIzquierda"); //recuperamos el cuerpo de la tabla en html usando su id
    
    let contenidoTabla = ""; //preparamos una variable vacia 

    for (let i = 0; i < edadLadoIzquierdo.length; i++) { //recorremos nuestro arreglo

        let miEdad = edadLadoIzquierdo[i]; //guardamos la edad actual en una variable

        contenidoTabla += "<tr><td>"; 
        contenidoTabla += miEdad;       //creamos la tabla segun la edad que pusimos y concatenamos
        contenidoTabla += "</td></tr>";
    }
    cmpTabla.innerHTML = contenidoTabla; //metemos todo el texto dentro del html
}