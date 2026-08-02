let pr1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hello");
    },10000)
});

let pr2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("World");
    },5000)
});

let pr3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("ABCD");
    },7000)
});

// Promise.race([pr1,pr2])
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// Promise.allSettled([pr1,pr2])
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })


// Promise.any([pr1,pr2])
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


Promise.all(([pr1,pr2,pr3]))
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err);
    })