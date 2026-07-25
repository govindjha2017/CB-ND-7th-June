//spread operator
let arr = [13,45,66,7];

let newArr = [...arr,11,65];

// console.log(newArr);

let arr1 = [98,65,24,34];

let mergeArr = [...arr,...arr1];
// console.log(mergeArr);

let obj = {
    name:'govind',
    age:27,
    city:'noida'
}

let newObj = {
    ...obj,
    email:"govind@gmail.com",
    age:45
}

// console.log(newObj);


//rest operator

// function fun(a,...nums){
//     console.log(a);
//     console.log(nums);
//     ;
// }


// fun(3,14,25,36,47);

let nums = [34,56,78,99];

let [a,b,...c] = nums;
console.log(a,b,c)
