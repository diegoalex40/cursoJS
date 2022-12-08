//CREACION DE ARRAYS

function Practica1(){
    const octavos = [
    "España",
    "Marruecos",
    "Senegal",
    "Inglaterra",
    "Francia",
    "Polonia",
    "Japon",
    "Croacia",
    "Brazil",
    "Corea del Sur",
    "Suiza",
    "Portugal",
    "Argentina",
    "Australia",
    "Paises Bajos",
    "Estados Unidos"
    ]

    document.getElementById("Practica1").innerHTML = octavos
}

function Practica2(){
    const cuartos = []

    cuartos[0]="Brazil";
    cuartos[1]="Argentina";
    cuartos[2]="Marruecos";
    cuartos[3]="Inglaterra";
    cuartos[4]="Francia";
    cuartos[5]="Portugal";
    cuartos[6]="Croacia";
    cuartos[7]="Paises Bajos";

    document.getElementById("Practica2").innerHTML = cuartos[5];

    cuartos[5]="España";

    document.getElementById("Practica3").innerHTML = cuartos;
}

function Practica3(){
    const cuartos = []

    cuartos[0]="Brazil";
    cuartos[1]="Argentina";
    cuartos[2]="Marruecos";
    cuartos[3]="Inglaterra";
    cuartos[4]="Francia";
    cuartos[5]="Portugal";
    cuartos[6]="Croacia";
    cuartos[7]="Paises Bajos";

    document.getElementById("Practica4").innerHTML = "El primer elemento es: " + cuartos[0] + "Ultimo Elemento: " + cuartos[cuartos.length-1];
}

function Practica4(){
    const semifinales = ["Brazil", "Argentina", "Portugal", "Francia"];
    let largo = semifinales.length;

    let text = "<ul>";
    for (let i = 0; i < largo; i++) {
        text += "<li>" + semifinales[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("Practica6").innerHTML = text;
}

function Practica5(){
    //Uso de PUSH() dentro de un ARRAY
    const semifinales = ["Brazil", "Argentina", "Maruecos", "Inglaterra"];
    let largo = semifinales.length;
    document.getElementById("Practica7").innerHTML = "El laego del archivo es: " + largo + ". El Array es: "+ semifinales;

    semifinales.push("VAR");
    largo = semifinales.length;
    document.getElementById("Practica8").innerHTML = "El laego del archivo es: " + largo + ". El Array es: "+ semifinales;

}

function Practica6(){
    //Uso del POP() en un Array
    const semifinales = ["Brazil", "Argentina", "Maruecos", "Inglaterra"];
    semifinales.pop();

    document.getElementById("Practica9").innerHTML = semifinales
}

function Practica7(){
    //Uso del SHIFT, UNSHIFT, DELETE en un Array
    const seleccionesSorpresa = ["Belgica", "Alemania", "España", "Uruguay", "Mexico", "Suiza"];
    seleccionesSorpresa.shift();

    document.getElementById("Practicas10").innerHTML = seleccionesSorpresa;

    seleccionesSorpresa.unshift("Polonia");
    document.getElementById("Practicas11").innerHTML = seleccionesSorpresa;

    seleccionesSorpresa[seleccionesSorpresa.length] = "Belgica"
    document.getElementById("Practicas12").innerHTML = seleccionesSorpresa;

    delete seleccionesSorpresa[0];
    document.getElementById("Practicas13").innerHTML = seleccionesSorpresa;
}

function Practica8(){
    //CONCAT ENTRE VARIOS ARRAYS
    const grupo1 = ["Qatar", "Ecuador", "Paises Bajos", "Senegal"];
    const grupo2 = ["Inglaterra","Iran", "Estados Unidos", "Gales"];
    const grupo3 = ["Argentina", "Arabia Saudita", "Mexico", "Polonia"];
    const grupo4 = ["Dinamarca", "Francia", "Tunez", "Australia"];

    const union1 = grupo1.concat(grupo2,grupo3);

    document.getElementById("Practicas14").innerHTML = union1;

    const union2 = grupo1.concat("VAR");
    document.getElementById("Practicas15").innerHTML = union2;

    // SPLICE & SLICE en un ARRAY

    grupo4.splice(1, 0, "Cancha", "555555");
    document.getElementById("Practicas16").innerHTML = grupo4;

    const paises = union1.slice(2,8);
    document.getElementById("Practicas17").innerHTML = paises;
}

function Practica9(){
    //TOARRAY() y SORT()

    const paises = ["Qatar", "Ecuador", "Paises Bajos", "Senegal", "Argentina", "Arabia Saudita", "Mexico", "Polonia"]
    const numeros = [1, 3, 5, 7 , 12, 15 , 1, 2, 4, 6, 8, 22];

    document.getElementById("Practicas18").innerHTML = paises.toString();
    document.getElementById("Practicas19").innerHTML = paises.sort();
    document.getElementById("Practicas20").innerHTML = paises.reverse();
    document.getElementById("Practicas21").innerHTML = numeros.sort();

    //Ordenar numeros de menor a mayor
    numeros.sort(function(a,b){return a - b});
    document.getElementById("Practicas22").innerHTML = numeros;

    //Ordenar numeros de mayor a menor
    numeros.sort(function(a,b){return b - a});
    document.getElementById("Practicas23").innerHTML = numeros;
}

function practica10(){
    //Orden Aleatorio
    const numeros = [1, 3, 5, 7 , 12, 15 , 1, 2, 4, 6, 8, 22];
    document.getElementById("Practicas24").innerHTML = numeros;

    numeros.sort(function(){return 0.5 - Math.random()});
    document.getElementById("Practicas25").innerHTML = numeros;

}