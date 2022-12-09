//Uso de operadores comparativos

function ejercicio1(){
    x = 10;
    y = 11;
    z = "10";

    document.getElementById("1").innerHTML = "Comparacion usando == " + (x == y) + " " +(x == z) + " " + (z == y)
    document.getElementById("2").innerHTML = "Comparacion usando === " + (x === y) + " " +(x === z) + " " + (z === y)
    document.getElementById("3").innerHTML = "Comparacion usando != " + (x != y) + " " +(x != z) + " " + (z != y)
    document.getElementById("4").innerHTML = "Comparacion usando !== " + (x !== y) + " " +(x !== z) + " " + (z !== y)
}

//Uso de operadores Logicos
function ejercicio2(){
    x = 10;
    y = 11;
    z = "10";

    document.getElementById("5").innerHTML = "Comparacion usando && = " + "(x == y && x == z)" + (x == y && x == z) + " " + "(x == z && z == y)" + (x == z && z == y)
    document.getElementById("6").innerHTML = "Comparacion usando || = " + "(x == y || x == z)" + (x == y || x == z) +" " + "(y == z || x == y)" + (y == z || x == y)
    document.getElementById("7").innerHTML = "Comparacion usando ! : " + "!(x != y)" + !(x != y) + " " + "!(x != z)" + !(x != z)
}

//IF en Js
function ejercicio3(){
    hora = 19;
    //document.getElementById("hora")[0].value;
    if (hora <= 12){
        saludo = "Buenas Dias";
    } else if (hora <= 16) {
      saludo = "Buenas Tardes";
    } else {
      saludo = "Buenas Noches";
    }

document.getElementById("8").innerHTML = saludo
}

// Swich en JS
function ejercicio4(){
    //En una tienda venden una lista de frutas y dependiendo de su fruta y peso se le dara un precio.
    //Bananas = $1.5xkg; Piñas = $2 x kg; Manzanas = $2.1 x kg; Frutilla = $3.5 x kg; Sandia = $5 x kg.
    fruta    = prompt("Ingrese la fruta de esta lista: Bananas = $1.5xkg; Piñas = $2 x kg; Manzanas = $2.1 x kg; Frutilla = $3.5 x kg; Sandia = $5 x kg.");
    cantidad = prompt("¿Cuantos kilos desea?");

    switch (fruta) {
        case "Bananas":
            precio = cantidad * 1.5;
            respuesta = "Usted debe pagar la cantidad de: " + precio + " dolares";
            break;
        case "Piñas":
            precio = cantidad * 2;
            respuesta = "Usted debe pagar la cantidad de: " + precio + " dolares";
            break;
        case "Manzanas":
            precio = cantidad * 2.1;
            respuesta = "Usted debe pagar la cantidad de: " + precio + " dolares";
            break;
        case "Frutilla":
            precio = cantidad * 3.5;
            respuesta = "Usted debe pagar la cantidad de: " + precio + " dolares";
            break;
        case "Sandia":
            precio = cantidad * 5;
            respuesta = "Usted debe pagar la cantidad de: " + precio + " dolares";
            break;
        default:
            respuesta = "No poseemos esa variedad lo sentimos";
            break;
    }
    document.getElementById("9").innerHTML = respuesta;
}

//FOR EN JS
//Imprimir todos los datos de un Array de forma ordenada

function ejercicio5(){
    const seleccionesSorpresa = ["Belgica", "Alemania", "España", "Uruguay", "Mexico", "Suiza"];
    console.log(seleccionesSorpresa);
    document.getElementById("10").innerHTML = seleccionesSorpresa;
    texto = " ";

    for (let i = 0; i < seleccionesSorpresa.length; i++) {
        texto += i+1 + ".- " + seleccionesSorpresa[i] + "<br>";
    }
    document.getElementById("11").innerHTML = texto;
}

//FOR IN para OBJETOS

function ejercicio6(){
    const persona = {
        nombre       : "Diego",
        apellido     : "Yanez",
        edad         : 29,
        nacionalidad : "Ecuatoriano"
    };
    texto = " ";
    for (let x in persona){
        texto += persona[x] + " ";
    }
    document.getElementById("12").innerHTML = texto;

}

// FOR OF - Dividir parala en letras

function ejercicio7(){
    let palabra = "JAVASCRIPT";
    let numero  = "5555505055505505";
    texto = "";
    for (const x of numero) {
        texto += x + "<br>";
    }
    document.getElementById("13").innerHTML = texto;

}

//WHILE EN JS - CUENTA REGRESIVA

function ejercicio8(){
    let texto = "";
    let i = 10;

    while (i >= 0) {
        texto += "<br> Faltan : " + i;
        i = i-1;
    }
    document.getElementById("14").innerHTML = texto;
}

function ejercicio9(){
    var texto = "";
    var i = 0;

    do {
        texto += "<br> Son : " + i;
        i = i + 1;
    } while (i < 10);
    document.getElementById("15").innerHTML = texto;

    var texto1 = "";
    var j = 10;

    do {
        texto1 += "<br> Faltan : " + j;
        j = j - 1;
    } while (j >= 0);
    document.getElementById("16").innerHTML = texto1;
}

