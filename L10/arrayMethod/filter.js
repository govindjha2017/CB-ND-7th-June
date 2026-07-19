let arr = [34,56,19,68,27,13];


let filterArr = arr.filter((item,ind,arr)=>{
    if(item%2==0){
        return true;
    }
})

console.log(filterArr);