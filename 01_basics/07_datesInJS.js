let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // (yyyy, mm, dd, hh, min, sec)
let myCreatedDate = new Date("01-14-2023") // formatted (mm-dd-yyyy)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date,now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})


