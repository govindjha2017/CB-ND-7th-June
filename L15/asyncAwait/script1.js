

let pr = Promise.resolve("kuchh bhi");

console.log("Start");
async function fetchData(){
    console.log("Hello")
    let data = await pr;
    console.log("World")
    console.log(data);
    console.log("console after promise")
}

fetchData();

console.log("End");