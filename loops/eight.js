// const array = [1,2,3]

// const { useReducer } = require("react")

// const total = array.reduce(function (acc,curval){
//     console.log(`value of ${acc} and curval is ${curval}`)
//     return acc + curval
// },9)

// console.log(total)

// const total =  array.reduce((acc,curval)=> acc + curval ,1000)

// console.log(total)


const shoppingCart = [{
    name:"pixel 8a",
    price:75000
},{
    name:"moto fusion 60",
    price:135000
},{
    name:"pixel 7a",
    price:65000
},]

const pricetopay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(pricetopay)