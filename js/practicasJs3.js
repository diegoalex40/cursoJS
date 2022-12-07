let text = "Hola me llamo Diego";
let text1 = 'Hola me llamo Diego';

let text3 = "Este es un ejemplo de 'Comillas'";
let text4 = 'Este es otro ejemplo de "Comillas"';

let largo = text4.length;

let text5 = "Texto de entrada 1 \'ejemplo\' Texto de entrada 2";
let text6 = "Texto de entrada 1 \"Ejemplo 2\" Texto de entrada 2";


function ejemplo1(){
    document.getElementById("ejemplo1").innerHTML = text5;
}

function ejemplo2(){
    document.getElementById("ejemplo2").innerHTML = text6;
}

function ejemplo3(){
    document.getElementById("ejemplo3").innerHTML = "Texto 1 : " + text + "Texto 2 :  " + text1 + "Texto 3 :   " + text3 + "Texto 4 :   " + text4
    document.getElementById("ejemplo4").innerHTML = largo + " Este es el largo del texto 4"
}

/*METODO SLICE()  -  EXTRAER TEXTO DE UN STRING EN BASE A SU POSICION*/
function ejemplo4(){
    let texto7 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Eget mauris pharetra et ultrices. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Magna fringilla urna porttitor rhoncus. Nam libero justo laoreet sit amet cursus sit amet dictum. Morbi tristique senectus et netus et malesuada fames ac turpis. Dui accumsan sit amet nulla. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Neque sodales ut etiam sit.";
    let fragmento = texto7.slice(20, 30);
    let fragmento1 = texto7.slice(40);
    let fragmento2 = texto7.slice(-40);
    let fragmento3 = texto7.slice(-20,-10);

    document.getElementById("ejemplo5").innerHTML = fragmento;
    document.getElementById("ejemplo6").innerHTML = fragmento1;
    document.getElementById("ejemplo7").innerHTML = fragmento2;
    document.getElementById("ejemplo8").innerHTML = fragmento3;
}

/*METODO REMPLACE() - REMPLAZAR TEXTO ENTRO DE UN STRING*/
function ejemplo5(){
    /*Remplazo de la primera coincidencia*/
    let texto8 = document.getElementById("ejemplo9").innerHTML;
    document.getElementById("ejemplo9").innerHTML = texto8.replace(/js/i, "PHYTHON");

}

function ejemplo6(){
    /*Remplazo de todas las coincidencias*/
    let texto9 = document.getElementById("ejemplo10").innerHTML;
    document.getElementById("ejemplo10").innerHTML = texto9.replaceAll(/JS/g, "PHYTHON");
}

function ejemplo7(){
    /*Cambio todo a mayusculas*/

    let texto10 = document.getElementById("ejemplo11").innerHTML;
    document.getElementById("ejemplo11").innerHTML = texto10.toUpperCase();
}

function ejemplo8(){
    /*Cambio todo a mminusculas*/

    let texto10 = document.getElementById("ejemplo11").innerHTML;
    document.getElementById("ejemplo11").innerHTML = texto10.toLowerCase();
}

//METODOS DE BUSQUEDA

function ejemplo9(){
    /*Indexof() - La ubicacion de la primera coincidencia desde izq. a der. empezando en 0*/

    let texto11 = document.getElementById("ejemplo12").innerHTML;
    document.getElementById("resultado1").innerHTML = "La palabra 'honraba' aparece en el puesto: " + texto11.indexOf("honraba")
}

function ejemplo10(){
    /*lastIndexOf() - La ubicacion de la ultima coincidencia desde izq. a der. empezando en 0*/

    let texto11 = document.getElementById("ejemplo12").innerHTML;
    document.getElementById("resultado1").innerHTML = "La palabra ' de ' aparece por ultim vez en el puesto: " + texto11.lastIndexOf("de", 200)
}

function ejemplo11(){
    /*serch() - La ubicacion de la primera coincidencia desde izq. a der. empezando en 0*/

    let texto11 = document.getElementById("ejemplo12").innerHTML;
    document.getElementById("resultado2").innerHTML = "La palabra 'Tenía' aparece en el puesto: " + texto11.search(/Tenía/i)
}

function ejemplo12(){
    /*match() - Las conincidencias con el stirng y la mete dentro de un array*/

    let texto11 = document.getElementById("ejemplo12").innerHTML;
    const coincidencia = texto11.match("de");
    const coincidencia1 = texto11.match(/de/g);
    const coincidencia2 = texto11.match(/de/gi);


    document.getElementById("resultado3").innerHTML = coincidencia.length + " " + texto11.match("de");
    document.getElementById("resultado4").innerHTML = coincidencia1.length + " " + texto11.match(/de/g);
    document.getElementById("resultado5").innerHTML = coincidencia1.length + " " + texto11.match(/de/gi);

}



