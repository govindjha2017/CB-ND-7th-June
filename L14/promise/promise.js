let pr = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let arr = [33,45,66,78];
        resolve(arr);
     },4000)
})

// console.log(pr);

console.log("Start");

pr
    .then((data)=>{
        console.log(data)
    })
    .catch(()=>{

    })

console.log("END")
//milion
//10min