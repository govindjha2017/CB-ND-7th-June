const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandParent.addEventListener("click",(e)=>{
    console.log("grandParent clicked@")
},true)

parent.addEventListener("click",(e)=>{
    console.log("parent clciked!")
},true)

child.addEventListener("click",(e)=>{
    console.log("child clicked!")
},true)