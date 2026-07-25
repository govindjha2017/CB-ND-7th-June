let students = [
    {
        name:'rahul',
        marks:75,
        city:"Noida"
    },
    {
        name:'ajay',
        marks:64,
        city:"Delhi"
    },
    {
        name:'teena',
        marks: 56,
        city:'Pune'
    }
];

// students.find((item,ind,arr)=>{
//     console.log(item,ind,arr);
// })

// let x = students.find((item)=>{
//     return item.name=="ajay"
// })

let x = students.find(item => item.name=="ajay")

// console.log(x);

let y = students.find((item)=> item.marks>60);

// console.log(y);


// (x)=>{
//     return 40
// }

// let fun = x=> 40

// let p = fun();

// console.log(p);

let fun = x=> x*2

let p = fun(15);

console.log(p);