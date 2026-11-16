function saymyname(){
    console.log("h")
    console.log("a")
    console.log("m")
    console.log("z")
    console.log("a")
}

saymyname()  // function reference

// function addtonum(num1, num2){
//     console.log(num1 + num2)
// }

function addtonum(num1, num2){
    sum = num1 + num2
    return sum
}


const sumof = addtonum(12,3)
console.log("result" , sumof)


function userLoggediN(username = "Naqvi"){
    if(username === undefined){
        console.log("please enter a user name")
        return
    }

    return `${username} just logged in`

}

console.log(userLoggediN())


const user = {
    "price": 100,
    "name" : "Humza"
}

function checkObj(obj){
    console.log(`user name is ${obj.name} and price is ${obj.price}`)
}

console.log(checkObj(user))

// we can pass the user directly 

console.log(checkObj({
    name:"sam",
    price:1000
}))


const mynewArray = [100,200,400,488]
function returnthirdvalue(array){
    return array[0]
}

console.log(returnthirdvalue([21212]))