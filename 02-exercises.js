// 1. Escribe un comentario en una línea

// Hello World

// 2. Escribe un comentario en varias líneas

/*
Hello
World
!
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let cadena = "string";
let numero = 123;
let booleano = true;
let nulo = null;
let indefinido;
let simbolo = Symbol("simbolo");
let grande = BigInt(1234567890123456789012345678901234567890n);

// 4. Imprime por consola el valor de todas las variables

console.log(cadena, numero, booleano, nulo, indefinido, simbolo, grande);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof cadena);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof grande);


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadena = "s t r i n g";
numero = 456;
booleano = false;
nulo = undefined;
indefinido = null;
simbolo = Symbol("lalolanda");
grande = BigInt(3432532525245443546546546777774564354325325423542n);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadena = false;
numero = "456";
booleano = "allo";
nulo = BigInt(8734524856498598435987327457432753209n);
indefinido = Symbol("sdd");
simbolo = true;
grande = 321;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const fruit = "kiwi";
const age = 23;
const isMember = false;
const notDefined = undefined;
const notExist = null;
const theSymb = Symbol("apple");
const networth = BigInt(846928639812473120401973249712192432143124n)

// 9. A continuación, modifica los valores de las constantes

// fruit = "mango";
// age = 25;
// isMember = true;
// notDefined = 1;
// notExist = undefined;
// theSymb = Symbol("lalola");
// networth = BigInt(222222222000000000028888888888888888888n);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse