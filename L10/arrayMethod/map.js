let arr = [23,45,87,19,13];



let x = arr.map((item,ind,arr)=>{
    // console.log("hello")
    // console.log(a,b,c);
    // return ind*5;
    return item-5;
})

console.log(x);

console.log(arr);