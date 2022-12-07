function cambioContenido() {
    document.getElementById("ejemplo").innerHTML =
    "Contenido Cambiado";
}

function mostrarContenido() {
    console.log(5+5);
    console.log("Ejemplo de Texto");
}

function imprimir() {
    window.print();
}

function suma() {
    let a, b, c;
    a = 5; b = 9; c = a + b;
    console.log("Elemento 1 es = " + a);
    console.log("Elemento 2 es = " + b);
    console.log("La sumatoria es = " + c);
}

function variables(){
    let x;
    var a;
    const e = 2.71828182;
    const b = 17;
    const c = 4;
    x = 8; a = "Texto";
    console.log(x);
    console.log(a);
    console.log(e);
    let suma           = x + e;
        resta          = x - e;
        multiplicacion = x * e;
        division       = x / e;
        exponente      = x ** e;
        residuo        = b % c;
    var h = 5;
    h--;
    let j = h;
    console.log(resta);
    console.log("El residio es : " + residuo);
    console.log(h);
}

function operadoresMemoria() {
    let op = 5;
    op <<= 2;
    let op1 = op;

    console.log(op);
}

function arreglos() {
    let x = [5, "Volvo", 12e12, "Auto"];
    console.log(x)
}