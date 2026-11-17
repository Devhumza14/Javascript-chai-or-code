const chai = () => {
    const username = "humza"
    console.log(this.username)
    console.log(this);
    
}

// chai()

const chai2 = function(){
    const username = "Humza"
    console.log(this.username)
    console.log(this)
} 

// chai2()

function chai3(){
    const username  =  "Humza"
    console.log(this.username)
    console.log(this)
    // return(num + 1)

}
// chai3(3)


// const addnum = (num1 , num2) => {
//     return num1 + num2
// }

// const addnum = (num1 , num2) =>  num1 + num2 
const addnum = () =>  ({"username": "HUmza"}) 

 /*(num1 + num2) */  // this is implicit return single line statement to write an arrow function no need for return keyword 

console.log(addnum(12,12))