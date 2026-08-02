console.log("START")

setTimeout(()=>{
    console.log("A")
},0)

let pr = Promise.resolve("B");

pr.then((x)=>{console.log(x)})

console.log("END");