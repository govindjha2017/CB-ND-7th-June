
const ul = document.createElement("ul");


const city = ["Delhi","Kolkata","Mumbai","jaipur","Pune"];

for(let c of city){
    const li = document.createElement("li");
    li.innerText=c;
    ul.append(li);
}

console.log(ul);

const body = document.querySelector("body");
body.appendChild(ul);