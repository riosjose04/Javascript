//codigo del cuadrado

function perimetroCuadrado(){
    return l*4;
}
function areaCuadrado(l){
    return l*l;
}

//codigo del triangulo

function perimetroTriangulo(l1, l2, b){
    return l1+l2+b;
}

function areaTriangulo(b, a){
    return (b*a)/2
}

//codigo del circulo
const pi = Math.PI;
function diametroCirculo(radio){
    return radio*2;
}
function perimetroCicrculo(radio){
    return diametroCirculo(radio)*pi;
}

function areaCirculo(radio){
    return pi*Math.pow(radio,2);
}


function CalcularAreaCuadrado(){
    var area = areaCuadrado(document.getElementById("inputCuadrado").value);
    var result = "El resultado es: "+area;
    document.getElementById("resultado").textContent = result;
}