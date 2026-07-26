// let person = {
//     firstName:"Govind",
//     lastName:"jha",
//     printFullName: function(){
//         console.log(this.firstName+" " + this.lastName)
//     }
// }

// person.printFullName()

// let person1 = {
//     firstName:"teena",
//     lastName:"raj",
// }

// person.printFullName.call(person1)





// let printFullName = function(){
//         console.log(this.firstName+" " + this.lastName)
//     }

// let person = {
//     firstName:"Govind",
//     lastName:"jha"
// }

// printFullName.call(person)

// let person1 = {
//     firstName:"teena",
//     lastName:"raj",
// }

// printFullName.call(person1)









let printFullName = function(homeTown,state){
        console.log(this.firstName+" " + this.lastName + " from "+homeTown+ " " + state)
    }

let person = {
    firstName:"Govind",
    lastName:"jha"
}

// printFullName.call(person,"ABC","Bihar")
// printFullName.apply(person,["ABC","Bihar"])

let person1 = {
    firstName:"teena",
    lastName:"raj",
}

// printFullName.call(person1,"Vrindvan","UP")
// printFullName.apply(person1,["Vrindvan","UP"])

let x = printFullName.bind(person1,"Vrindvan","UP")
console.log(x);

x()