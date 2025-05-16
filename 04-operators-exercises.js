
// 1. Crea una variable para cada operación aritmética

let suma = 1+1;
console.log("la suma da " + suma);
let resta = 2-2;
console.log("la resta da " + resta);
let multiplicacion = 2*2;
console.log("la multiplicacion da " + multiplicación);
let division = 8/4;
console.log("la division da " + division);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let sumaasig = suma += 1;
console.log( "La suma asignada da: " + sumaasig);
let restaasig = resta -= 1;
console.log("La resta asignada da: " + restaasig);
let multiplicacionasig = multiplicación *= 0;
console.log("La multiplicacion asignada da: " + multiplicacionasig);
let divisionasig = division /= 1;
console.log("La division asignada da: " + divisionasig);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log( 5 == 5)
console.log("verde"==="verde")
console.log(2<4)
console.log(9>8)
console.log(8 != 4)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log( 5 <= 2)
console.log(4>=9)
console.log(2!==2)
console.log(true != 1)
console.log(false != "")

// 5. Utiliza el operador lógico and

console.log(2<3 && 3<4)

// 6. Utiliza el operador lógico or

console.log(2 == 3 || 8 > 1)

// 7. Combina ambos operadores lógicos

console.log( 2 > 1 && 6 < 7 || 8 != 8)

// 8. Añade alguna negación

console.log (!(5 == 5))

// 9. Utiliza el operador ternario

let a = "tress";
"tres" == a ? console.log("es verdadero"):console.log("es falso")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let x = 1;
let y =  10;

x+y == 11 && y-x == 9 ? console.log(":)") : console.log(":(")