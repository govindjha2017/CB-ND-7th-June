// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // let arr= [45,11,23]
//         // resolve(arr);
//         // resolve("promise resolved Data")
//         reject("Promise rejected msg")
//     },2000)
// })

// console.log(pr);




let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Promise resolved DATA")
    },5000)
})
console.log("START")


pr 
    .then((data)=>{
        console.log("inside .then");
        console.log(data);
    })
    .catch((err)=>{
        console.log("inside .catch");
        console.log(err);
    })

console.log("END");