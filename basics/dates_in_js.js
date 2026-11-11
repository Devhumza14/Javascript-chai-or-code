let myDate = new Date()

console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())


// let myCreatedDate =  new Date(2001,3,8)  // year month date and month starts from 0 in JS // there is also more to locale string that can be used 
// let myCreatedDate =  new Date(2001,3,8,5,3)   // 5 is hour and minutes
let myCreatedDate =  new Date("08-04-2001")   // dd-mm-yy // here mothin started from 01 we also have mm-yy-dd

console.log(myCreatedDate.toLocaleString())

let myTimestamp = Date.now()
console.log(myTimestamp)   // 1794395051584 in milli secounds

// we can get time from the mycreatde date with this method as this is object
console.log(myCreatedDate.getTime()) // in ms
//if we want the time in secound which is not encouraged for comparison we do
console.log(Math.floor(Date.now()/1000))


// more methods 

let  myDates = new Date()
console.log(myDate.getDate())
console.log(myDate.getMonth() + 1)


myDates.toLocaleString('default', {
    weekday: "long"
})