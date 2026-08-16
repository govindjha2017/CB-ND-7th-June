
// const child = document.querySelectorAll(".child");

// for(let elem of child){
//     elem.addEventListener("click",(e)=>{
//         console.log(e.target.innerText)
//     })
// }

const btn = document.getElementById("btn");
const container = document.querySelector(".container")

container.addEventListener("click",(e)=>{
    console.log(e.target)
})

btn.addEventListener("click",()=>{
    const div = document.createElement("div");
    div.classList.add("child");
    const num = document.querySelectorAll(".child").length;

    div.innerText=num+1;
    container.appendChild(div)
})


