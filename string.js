const name = "Humza"
console.log(name)

let newOne = new String("Humza")
console.log(newOne.toUpperCase());
console.log(newOne.toLowerCase());
console.log(newOne.concat(" x"));
console.log(newOne.__proto__)
console.log(newOne.indexOf("a"));

let names = "shahg"
let rollno = 23;

console.log(`hello people call me ${names} and my roll no is ${rollno}`)


// slicing

console.log(names.substring(1,3)) /// last one is not included :=> this is dividing a string into sub string but this is not known as  slicing

console.log(names.slice(0,3)) // last one not included you also give negetive values 

let username = "     google      "
console.log(username)
console.log(username.trim())   // it removes starting and end spaces


const url = "https://smhumzanaqvi@gmail/humza%20shah"

console.log(url.replace("%20", "-" ))
console.log(url.includes("smhumza"))


let paragrap