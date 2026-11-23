// const mynum = [1,2,3,4,5,6,7,8,9,10]

// const hellog = mynum.map((num) => num + 10 )
// // console.log(hellog)

// const myarray = [1,2,3]
// let helllo = myarray.forEach((num)=>{
//     return num + 10
// })

// console.log(myarray)


// chaining 

const array = [1,2,3,4,5,10]

const chainarray = array.map((num)=> (num * 10)) .map((num)=> num + 1) .filter((num)=> num < 50)
console.log(chainarray)

