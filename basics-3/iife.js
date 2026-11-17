// immediatly invoke function expression
// ()() this is it 

(function connection(){
    // named IEFE
    console.log(`DB connected`)
})(); // needs to be ended with ; as he dont know where to end his context  /// this is IFEE i get invoked immediatley without getting pollucted from global variable scope

( (myname) =>{
    // UNNAMED IEFE
    console.log(`DB connected ${myname}`)
} )("Humza")