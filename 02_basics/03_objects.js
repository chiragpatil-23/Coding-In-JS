// singleton
Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Chirag",
    "full name": "Chirag Patil",
    [mySym]: "mykey1",
    age: 22,
    location: "Pune",
    email: "chirag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sun"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

//change the value or overwrite the value in the object
JsUser.email = "patil@gmail.com"

// using freeze you cant able to change the values the object
// Object.freeze(JsUser)

JsUser.email = "cj@gmail.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

myArray = ["h", "i"]
console.log(myArray[1]);
