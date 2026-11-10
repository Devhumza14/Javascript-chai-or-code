let score = 100
console.log(score);

const balance = new Number(100)    // new is a object specifizied as number type

console.log(balance);
console.log(balance.__proto__);
console.log(balance.toString().length);
console.log(balance.toFixed(3));  // output is 100.000 used widely in ecommerce apps precision values basically

let newNumber = 232.890
console.log(newNumber.toPrecision(3));  // will give precision at 3 number afterward it will will round of the the output is 233

let hundereds = 1000000
console.log(hundereds.toLocaleString("en-In"))  // give values with comma according to us standard is millions hundered thosand etc

////////////////////////////////////Maths////////////////////////////////////////////////////////////////////
console.log(`=========================================================================`)
console.log(Math)
console.log(Math.abs(-444))
console.log(Math.round(4.2323))  // if we want to chose upper value we use ceil and if we need to choose lower value we use floor like floor 4.9 is 4 and ceil 4.9 is 5
console.log(Math.min(1,23,44))
console.log(Math.max(32,99))
console.log(Math.floor(Math.random()*10) + 1)  // always gives value bwtween 0 and 1 in points


/// formula based 

const min = 10 
const max =  20

console.log(Math.floor((Math.random() * (max - min + 1) + min)))
