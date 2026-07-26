"use strict"
// a=10;
// console.log(a);


// console.log(this);

// function fun(){
//     console.log(this);
// }
// fun();
// window.fun();


let obj = {
    name:'Govind',
    age:27,
    city:'Noida',
    PrintDetails: function PrintDetails(){
        // console.log(this);
        console.log(this.name , "is ", this.age)
    }
}

obj.PrintDetails()

let obj1 = {
    name:'ajay',
    age:35,
    city:'Delhi',
    PrintDetails: ()=>{
        console.log(this);
        // console.log(this.name , "is ", this.age)
    }
}

obj1.PrintDetails()