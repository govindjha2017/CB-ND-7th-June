const head = document.getElementById("head");
console.log(head);

head.style.color="blue"
head.style.display="flex";

const para = document.getElementsByTagName("p");
console.log(para);
console.log(para[0])

para[0].style.color="green"

for(let paragraph of para){
    paragraph.style.color="green";
    paragraph.style.border="2px solid red";
    paragraph.style.padding="10px"
}

// Element.style.propertyName = 'property_value'

const spcl = document.getElementsByClassName("spcl");

console.log(spcl);

for(let special of spcl){
    special.style.backgroundColor="yellow"
}


const head1 = document.querySelectorAll('#head');
console.log(head1);

const paragraph = document.querySelectorAll("p");
console.log(paragraph);

for(let p of paragraph){
    p.style.color="red"
}

const x = document.querySelector(".spcl");
x.style.color="green"




// ----------------------------------------

const img = document.querySelector("img");
console.log(img);

// img.setAttribute("src","https://images.unsplash.com/photo-1786175087766-8f4af1c05903?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

// img.style.height="200px";
// img.setAttribute("id","abc");
// img.setAttribute("class","one");
// img.setAttribute("class","two");
// img.setAttribute("class","one two");

// console.log(img.getAttribute("src"));

// console.log(img.getAttribute("id"));

// img.removeAttribute("src");
// img.removeAttribute("id");

// classlist :- add remove toggle contains


img.setAttribute("src","https://images.unsplash.com/photo-1786108503439-0838d331242c?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
img.classList.add("one")
img.classList.add("two");

img.classList.remove("two");

console.log(img.classList.contains("two"));
console.log(img.classList.contains("one"));

img.classList.toggle("two")
img.classList.toggle("two")