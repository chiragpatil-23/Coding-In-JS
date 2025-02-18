let score = "33"

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN; type => number
// true => 1; false => 0
 
let isLoggedIn = 1

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn)
// 1 => true; 0 => false
// "" => false; "Chirag" => true

//***********************************OPERATIONS*****************************************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Chirag"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //=> 12
console.log(1 + "2"); //=> 12
console.log("1" + 2 + 2); //=> 122
console.log(1 + 2 + "2"); //=> 32

console.log(true) // => true
console.log(+true) // => 1

let num1, num2, num3

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);