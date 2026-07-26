// let arr = [34,45,66];
// console.log(arr);

// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__==Object.prototype);
// console.log(arr.__proto__==Array.prototype)


// function fun(){
//     console.log("Hello from fun function")
// }
// console.log(fun.__proto__.__proto__==Object.prototype)
// console.log(fun.__proto__.__proto__.__proto__)


let fun = {
    greet:function(){
        console.log("Heelo ji")
    }
}

let obj = {
    a:10,
    b:20
}
// console.log(obj.__proto__)
// console.log(obj.__proto__==Object.prototype)
// console.log(obj.__proto__.__proto__);

// greet.call(obj)

obj.__proto__=fun;
console.log(obj.__proto__)

obj.greet()