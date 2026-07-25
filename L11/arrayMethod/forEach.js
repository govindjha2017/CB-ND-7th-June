let arr = [13,65,44,57,98];
console.log("before ",arr)
let x = arr.forEach((item,ind,arr)=>{
    console.log(item,ind,arr);
     
    //logic use

    if(ind==2){
        arr[ind]=0;
    }
})
console.log("after ",arr)
// console.log(x);