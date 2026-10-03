const addForm = document.querySelector("#addForm");

addForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const course = document.getElementById("course");

    let studentData = {
        name:name.value,
        email:email.value,
        course:course.value
    }
    console.log(studentData);

    let res = await axios.post("http://localhost:5000/students",studentData)

    if(res.status==200){
        alert("Student created!");
        window.location.href = "index.html"
    }else{
        alert("Something went wrong!")
    }
})