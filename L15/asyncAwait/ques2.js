console.log("START");
setTimeout(()=>{
    let pr = Promise.resolve("A")
    console.log("Hello");
    pr.then((data)=>{console.log(data)})
},5000)

setTimeout(()=>{
    let pr = Promise.resolve("B")
    console.log("World");
    pr.then((data)=>{console.log(data)})
},0)

let x =Promise.resolve("C");

x.then((data)=>{console.log(data)});


console.log("END");