// Primitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language 
// because it determines the type of a variable at runtime based on the value assigned to it, meaning you don't need to explicitly declare the variable type when defining it; the type is checked when the code is running, not during compilation

const score = 11
const scoreValue = 11.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // => false
// even if the value of id and anotherId is same they different because of the datatype symbol is used...

const bigNumber = 2326346453415634156341n

// Reference (non-primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Chirag", 
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof(heros));


// Undefined => "undefined"
// Null => "object"
// Boolean => "boolean"
// Number => "number"
// String => "string"
// Object => "object"
// Function => "function / object function"
// Array => "object"