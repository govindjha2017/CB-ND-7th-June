// let x = new Date();

// let y = new Date().getTime();

// console.log(x);
// console.log(y);


let x = new Date().getTime();

let y = x+10000

while( new Date().getTime()<y){
     console.log(new Date().getTime())
}