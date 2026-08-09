// const fav = document.getElementById("fav");
const fav = document.querySelector("#fav");
console.log(fav);

console.log(fav.previousElementSibling)

fav.previousElementSibling.style.color="magenta";
fav.nextElementSibling.style.color="magenta";

fav.nextElementSibling.nextElementSibling.style.color="blue";

const ul = fav.parentElement;
console.log(ul);

ul.style.border="2px solid red";


console.log(ul.children)

ul.children[3].style.color="grey"



// -----------------------------------------------------------------

const para = document.createElement("p");

// para.innerText="Hello from p tag"
para.innerHTML="hello from p tag"

// para.innerText='<h2>Hello World</h2>'
para.innerHTML='<h2>Hello World</h2>'

console.log(para);

const div = document.querySelector("div");

// div.append("abc");
// div.append(para)

div.appendChild(para)