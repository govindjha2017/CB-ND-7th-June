console.log("Start");

// setTimeout(()=>{
//     console.log("MID");
// },4000)

// setTimeout(()=>{
//     console.log("MID");
// },0)

setTimeout(()=>{
    console.log("HEllo from SETTimeout")
},5000)


console.log('before loop')
// loop
let x = new Date().getTime()
while(new Date().getTime()<x+10000){
    
}
console.log("After loop")
console.log("END");

