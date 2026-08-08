
// async function fun(){
//      let pr = new Promise((resolve, reject) => {
//         resolve("data1")
//      })
//      return pr;
// }

// let x = fun();

// console.log(x);





let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise reslved data");
    },5000)
})


// function fetchData(){
//     pr
//         .then((data)=>{
//             console.log(data);
//         })
// }

// fetchData()


async function fetchData(){
    let data = await pr;
    console.log(data);
}

fetchData()
