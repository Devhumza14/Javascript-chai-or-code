const fbUser = new Object()
const fbeUser = {}


fbUser.id = 123
fbUser.name = "Syed Muhammad Humza Naqvi"
console.log(fbUser)


const regularApp = {
    userID:123,
    username:{
        fullusername:{
            firstname:"Humza",
            lastname: "Naqvi"
        }

    }
    
}
// console.log(regularApp.username.fullusername.firstname)


const obj1 = {1:"a" , 2: "b"}
const obj2 = {1:"c" , 2: "d"}

// const obj3 = Object.assign({},obj1,obj2)  // {} is target and other are source // in arraymerge we use concat and in object we use assign to merge two objects

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

console.log(Object.keys(fbUser))
console.log(Object.values(fbUser))
console.log(Object.entries(fbUser))

console.log(fbUser.hasOwnProperty("name"));
