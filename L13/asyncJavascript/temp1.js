console.log("Start");

let id = setInterval(()=>{
    console.log("MID");
},3000)

setTimeout(()=>{
    clearInterval(id);
},15000)

console.log("END")