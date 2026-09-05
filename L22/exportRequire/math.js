let add = (a,b)=>{
    return a+b;
}

let multy = (a,b)=>{
    return a*b;
}

console.log("inside math.js file")

// module.exports = {
//     add,multy
// }

module.exports = {
    "add":add,
    multy:multy
}