const family = ["mommi" , "papa" , "mama" , "sister"]
// family.forEach( function(value){
//     console.log(value)

// } )


// const family = ["mommi" , "papa" , "mama" , "sister"]
// family.forEach((item)=>{
//     console.log(item)
// })

// function printme(item,index,value){
//     console.log(item,index,value)
// }

// family.forEach(printme)


const myDatabase = [
    {
        "country":"pakistan",
        "nationality":"pk"
},   {
        "country":"india",
        "nationality":"in"
},   {
        "country":"turkey",
        "nationality":"tr"
}]

myDatabase.forEach((item)=>{
    console.log(item.nationality);
    
})
