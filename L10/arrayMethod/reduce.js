let arr = [34,56,19,68,27,13];


// let reduceVal = arr.reduce((acc,item,ind,arr)=>{
//     // console.log(item,ind,arr);
//     // console.log(acc);
//     // return "hello"
//     return ind*5;
// })

// console.log(reduceVal);

let sum = arr.reduce((acc,item)=>{
    return acc+item;
})
console.log(sum);