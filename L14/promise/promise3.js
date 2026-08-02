let pr = new Promise((resolve, reject) => {
    resolve("promise resolved Data")
})

console.log(pr);


let x = Promise.resolve("promise resolved data");
console.log(x);

let y = Promise.reject("something wrong");

console.log(y);