// for of loop
// const myArray = [1,4,5]
// for (const element of myArray) {
//     console.log(element)
// }


const grettings = "Hello Baby"
for (const element of grettings) {
    if (element == " ") {
        // console.log("Space detected")
        continue
        
    }
    // console.log(element)
}

// map are like objrct they store key value pairs but used for unique value and also they are ordder specific unlike objects

const myMap = new Map()
myMap.set("PK", "Pakistan")
myMap.set("IN", "India")
myMap.set("FR", "France")


// console.log(myMap)
for (const [keys,value] of myMap) {
    console.log(keys + " => " + value)
    
}





