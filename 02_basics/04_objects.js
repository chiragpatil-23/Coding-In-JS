// object declaration in two ways 

// Singleton
// const tinderUser = new Object() // Singleton

// Object literals
// const tinderUser = {} 

const tinderUser = {}

tinderUser.id = "123abxc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Chirag",
            lastname: "Patil"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={
    1: "a",
    2: "b"
}

const obj2 = {
    3: "q",
    4: "w"
}

// const obj3 = { obj1, obj2} // don't use 
// const obj3 = Object.assign({}, obj1, obj2) // can be used

const obj3 = {...obj1, ...obj2} // mostly prefer these to use
console.log(obj3);

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// Array and Object
const users = [
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    }
]

console.log(users[1].email);


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
