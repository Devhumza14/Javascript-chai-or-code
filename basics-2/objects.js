// object literals they make not non singleton object and  singleton a made when we make objects with literals

// Object.create // constructor method signleton object is made apne tharan ka aik


// THIS IS LITERAL METHOD IT WILL HAVE MULTIPLE INSTANCES
const objJS = {

    name:"Humza",
    "Full name": "Syed Muhammad Humza Naqvi",
    number: 14,
    lastLoggedIn: ["monday", "tuesday"],
    isloggedIn: true

    
    
}

console.log(objJS.name)
console.log(objJS["Full name"])
console.log(objJS.lastLoggedIn)

objJS.number = 15 // overwrite
// Object.freeze(objJS)  // it freezes the object so it cant be over written

objJS.greeting = function(){
    console.log("Hello")
}

objJS.greetingtwo = function(){
    console.log(`Hello my name is ${this["Full name"]}`)
}

console.log(objJS.greeting())
console.log(objJS.greetingtwo())

