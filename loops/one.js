// for (let i = 0; i <= 20; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`${element} comes this time`);
        
        
//     }
//     console.log(element)   
// }

for (let i = 0; i <= 5; i++) {
    // outer loop
    // console.log(`Outer loop value is ${i}`)
    for (let j = 0; j <= 5; j++) {
    // INNER LOOP   
    // console.log(`INNER loop value is ${j}`)
    // console.log(`${i} * ${j} = ${i*j}`)
    
}
    
}


const myArray = ["babloo","dabloo","shabloo"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   console.log(element)
    
}

// break and continue 

for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`${index} is detected we are stopping the loop`)
        break
        // continue
    }
    console.log(`i am printing index ${index}`)
    
}