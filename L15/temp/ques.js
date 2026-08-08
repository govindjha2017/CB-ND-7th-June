let obj = {
    name:"john",
    getName: function (){
        return this.name
    }
}

let getName = obj.getName;

console.log(getName());

// console.log(obj.getName())