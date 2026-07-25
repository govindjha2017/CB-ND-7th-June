let obj = {
    name:"Raj",
    age:41,
    city:'noida',
    email:'raj@gmail.com'
}

// let name = obj.name;
// let age = obj.age;

let {name,age,city,email} = obj;

console.log("name :",name," age: ",age);


let arr = [11,45,63,67];

// let a = arr[0];
// let b= arr[1];
// let c= arr[2];
// let d = arr[3];

let [a,b,c,d] = arr;

console.log("a=",a,"b:",b,"c:",c,"d:",d);