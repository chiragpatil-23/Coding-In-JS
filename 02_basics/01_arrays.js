// JS arrays are resizeable
// contain mix of different datatypes

const myArr = [0, 1, 2, 3, 4, 5, 9]

// const myHeros = ["CA", "IM", "SM"]

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// shallow copy -- copy of an object whose properties shares the same reference

// deep copy -- copy of an object whose properties do not shares the same reference

// myArr.push(6)    // add element at the end of the array
// console.log(myArr);
// myArr.pop()    // removes a element from the end
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift() // removes a element from the start
// console.log(myArr)

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr)); // =>string

//slice, splice

console.log("A  ", myArr); // original array

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr); // array after slice

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr); // array after splice
