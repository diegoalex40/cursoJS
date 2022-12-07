// LET vs VAR
let x = 5;
{
    let x = "Carro"
    console.log(x)
}

console.log(x)

var y = 6;
{
    var y = "CARRO"
    console.log(y)

}

console.log(y)

//Ejemplo de variables con CONST

function constante(){
    const carros = ["Ford", "BMW", "Hyundai", "KIA"];

    //Cambiar datos en un array
    carros[1] = "Porche"

    //Agregar un elemento en un array
    carros.push("Changan")

    document.getElementById("carros").innerHTML = carros;
}

// Objetos const

function ciudad() {

    const ciudades = {
    nombre     : "Quito",
    habitantes : 3000000000,
    region     : "Sierra"
    };

    //cambiar los atributos del objeto
    ciudades.nombre = "Cuenca";

    //Agregar un atributo a un objeto
    ciudades.alcalde = "Pedro Palacios"

    document.getElementById("ciudad").innerHTML = "la Ciudad de " + ciudades.nombre + " tiene " + ciudades.habitantes + " habitantes" + " y su alcalde es: " + ciudades.alcalde
}

function multiplicacion(){

    var respuesta = multiplicar(5, 10);

    document.getElementById("multiplicando").innerHTML = respuesta;

    function multiplicar(a,b) {
        return a * b
    }
}

//OBJETOS CON JS
function objetoPersona(){
    const persona = {
        nombre         : "Diego",
        apellido       : "Yánez",
        edad           : 29,
        estatura       : 171,
        colorOjos      : "Cafes",
        nombreCompleto : function() {
            return this.nombre + " " + this.apellido;
        }
    };

    document.getElementById("objetoPersonas").innerHTML =
    "Hola " + persona.nombre + " tu color de ojos es: " + persona.colorOjos + " y tu nombre completo es " + persona.nombreCompleto();
}

//Creacion de ARRAYS

function arrays(){
    const razas = [
        "Pastor Aleman",
        "Pitbul",
        "Labrador",
        "Boxer"
    ]
    console.log(razas)

    razas[2] = "Cocker"

    razas.push = "Salchicha"

    console.log(razas)
    console.log(razas.length)
    console.log(razas[2])
    console.log(razas[razas.length-1])


}

