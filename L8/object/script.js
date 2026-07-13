
let obj = {
    name:"rahul",
    age:45,
    city:"Delhi"
}


// let student = {
//     "firstName":"rahul",
//     "lastName": "Singh",
//     age:45,
//     "course":"Btech",
//     marks:[8.1,7.2,8.6],
// }
// console.log(student.age);
// console.log(student.course);
// console.log(student.marks[1])

let student = {
    "full name":"Rahul singh",
    age:45,
    "course":"Btech",
    marks:[8.1,7.2,8.6],
    key:"abc"
}
// console.log(student["full name"]);
// console.log(student.age);
// console.log(student["age"]);

for (let key in student){
    console.log(student[key])
}