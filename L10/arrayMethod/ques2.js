let arr = [
    {firstName:'raj', lastName:'Jha',age:25},
    {firstName:'Donald', lastName:'Trump',age:76},
    {firstName:'Vimpol', lastName:'Xyz',age:20},
    {firstName:'Depika', lastName:'Padukone',age:25}
];

// op {25:2,76:1,20:1}

let ans = arr.reduce((acc,item)=>{
    if(acc[item.age]){
        acc[item.age]++;
    }else{
        acc[item.age]=1;
    }

    return acc;
},{})

console.log(ans);