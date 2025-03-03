const name = "Chirag"
const repoCount = 8

// console.log(name + repoCount) --outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Chirag-CP-com')
// const gameName = 'ChiragCP'

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt('3'));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

// const anotherString = gameName.slice(-5, 1)
// console.log(anotherString);

const newStringOne = "   Chirag   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chirag.com/chirag%20patil"
console.log(url.replace('%20', '-'))

console.log(url.includes('chirag'));

console.log(gameName.split('-'));

