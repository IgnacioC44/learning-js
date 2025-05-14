// Types of variables

// 1. String
let name = "John Doe"; // String
let fruit = 'apple' // String
let message = `Hello, ${name}!`; // Template literal

// 2. Number
let age = 30; // Number
let pi = 3.14; // Number
let count = 10; // Number
let hex = 0xFF; // Hexadecimal
let binary = 0b1010; // Binary
let octal = 0o12; // Octal

// 3. Boolean
let isStudent = true; // Boolean
let isEnrolled = false; // Boolean

// 4. Null
let emptyValue = null; // Null

// 5. Undefined
let notAssigned; // Undefined

// 6. Symbol
let uniqueId = Symbol("id"); // Symbol

// 7. BigInt
let bigInt = 1234567890123456789012345678901234567890n; // BigInt


console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof emptyValue); // object (this is a known quirk in JavaScript)
console.log(typeof notAssigned); // undefined
console.log(typeof uniqueId); // symbol
console.log(typeof bigInt); // bigint
