let arr = [34,56,19,68,27,13];

let reduceVal = arr.reduce((acc,item,ind,arr)=>{
   console.log(acc);
   return ind*5;
},"Coding")

 