const head = document.getElementById("head");
// head.style.color="red"

function abc(){
    console.log("Clicked!");
    head.style.border="2px solid red"
}


head.addEventListener("click",abc)

const para = document.querySelector("#para");

para.addEventListener("copy",()=>{
    para.innerText = "kuchh bhi"
    window.alert("cheating karta hai")
})


const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");

btn.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log(inp.value);
    inp.value=""
})


const div = document.querySelector("div");

div.addEventListener("mouseenter",(e)=>{
     console.log(e.target);
     e.target.style.border="2px solid green"
     e.target.style.fontSize="1.5em"
})

div.addEventListener("mouseleave",(e)=>{
    e.target.style.border="";
     e.target.style.fontSize="1em"
})

div.addEventListener("dblclick",(e)=>{
    e.target.style.backgroundColor="blue"
})