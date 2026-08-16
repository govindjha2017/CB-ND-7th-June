const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const todosList = document.querySelector(".todosList")

btn.addEventListener("click",(e)=>{
     //logic

    if(inp.value!=""){
        const div = document.createElement("div");
        div.classList.add("todos")

        div.innerHTML= `<div class="sectionA">
                        <input class="checkBox" type="checkbox">
                        <p>${inp.value}</p>
                    </div>
                    <div class="sectionB">
                        <span class="up-arrow">↑</span>
                        <span class="bin"><i class="bin fa-solid fa-trash-can"></i></span>
                        <span class="down-arrow">↓</span>
                    </div>`
        inp.value="";
        todosList.appendChild(div)
    }

})



todosList.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log(e.target.getAttribute("class"));
    if(e.target.getAttribute("class")=="checkBox"){
        e.target.nextElementSibling.classList.toggle("checked")
    } else if(e.target.getAttribute("class")=="up-arrow"){
        let currTask = e.target.parentElement.parentElement;
        let prevTask = currTask.previousElementSibling;
        if(prevTask){
            prevTask.before(currTask)
        }

    } else if(e.target.getAttribute("class")=="down-arrow"){
        let currTask = e.target.parentElement.parentElement;
        let nextTask = currTask.nextElementSibling;
        // currTask.before(nextTask);
        if(nextTask){
            currTask.before(nextTask)
        }
    }else if(e.target.getAttribute("fill")=="currentColor"){
        console.log(e.target.parentElement.parentElement.parentElement.parentElement)
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
    }
})