//codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado son "+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro es "+perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área es "+areaCuadrado+"cm²");
console.groupEnd();


//codigo del triangulo
console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("los lados del triangulo son "+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm, "+baseTriangulo+"cm, \nla altura del triangulo es "+alturaTriangulo+"cm ");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro es "+perimetroTriangulo+"cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área es "+areaTriangulo+"cm²");
console.groupEnd();

//codigo del circulo
console.group("Circulo");
const radio = 4;
const diametro = radio*2;
const pi = Math.PI;
console.log("El radio del circulo es "+radio+"cm, el diametro es "+diametro+"cm");

const perimetroCirculo = pi*diametro;
console.log("El perimetro es "+perimetroCirculo+"cm");

const areaCirculo = pi*Math.pow(radio,2);
console.log("El área es "+areaCirculo+"cm²");
console.groupEnd();