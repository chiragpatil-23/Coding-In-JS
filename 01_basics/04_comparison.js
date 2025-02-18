// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //js convert string into number for comparison
// console.log("02" > 1);

//Avoid these type of comparisons

console.log(null > 0) // => false
console.log(null == 0) // => false
console.log(null >= 0) // => true -- value conversion problem sometime convert into NaN or sometimes 0

console.log(undefined > 0) 
console.log(undefined == 0)
console.log(undefined >= 0)

// ===

console.log("2" === 2) // => false -- also compare the datatype also