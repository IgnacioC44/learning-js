// Variable types

//var
/*
It is an old variable declaration keyword in JavaScript.
It is function-scoped or globally scoped.
It can be re-declared and updated.
It is hoisted to the top of its scope.
It is not recommended to use var in modern JavaScript.
*/
// Example:
var name = "John";
var age = 30;
var isStudent = true;
var hobbies = ["reading", "sports"];
var person = {
    name: "John",
    age: 30,
    isStudent: true
};
// hoisting means that the variable declaration is moved to the top of its scope during the compilation phase
// Example of hoisting with var
console.log(x); // undefined    
var x = 5; // x is hoisted to the top of its scope
// Example of function scope with var
function example() {
    var y = 10; // y is function-scoped
    console.log(y); // 10
}



// let
/*
It is a modern variable declaration keyword in JavaScript.
It is block-scoped.
It can be updated but not re-declared in the same scope.
It is not hoisted to the top of its scope.
It is recommended to use let in modern JavaScript.
*/
let name = "John";
let age = 30;
isStudent = true;
let hobbies = ["reading", "sports"];
let person = {
    name: "John",
    age: 30,
    isStudent: true
};
//Exmaple of global scope with let
let salutation = "Hello"; // global variable
if (true) {
    console.log(salutation); // Hello, it is accessible here
}
// Example of block scope with let
if (true) {
    let fruit = "apple";
    console.log(fruit); // apple, it is accessible here
}
console.log(fruit); // ReferenceError: fruit is not defined, it is not accessible here
// Example of block scope with let
{
    let z = 20; // z is block-scoped
    console.log(z); // 20
    z = 10; // z is updated
    console.log(z); // 10
}
// Example of hoisting with let
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5; // a is not hoisted to the top of its scope



// const
/*
It is a modern variable declaration keyword in JavaScript.
It is block-scoped.
It cannot be updated or re-declared in the same scope.
It is not hoisted to the top of its scope.
It is recommended to use const for constants in modern JavaScript.
*/
const name = "John";
const age = 30;
const isStudent = true;
const hobbies = ["reading", "sports"];
// Example of block scope with const
{
    const w = 30; // w is block-scoped
    console.log(w); // 30
}
// Example of hoisting with const
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 5; // b is not hoisted to the top of its scope
// Example of constant value with const
const pi = 3.14; // pi is a constant value
// pi = 3.14159; // TypeError: Assignment to constant variable
// Example of constant object with const
const person = {
    name: "John",
    age: 30,
    isStudent: true
};
// person = { name: "Jane", age: 25 }; // TypeError: Assignment to constant variable
// person.name = "Jane"; // This is allowed
// person.age = 25; // This is allowed