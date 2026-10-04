
console.log(window.location.search)
let id = new URLSearchParams(window.location.search).get("id");

const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const form = document.getElementById('editForm');

fetchStudent = async ()=>{
    let res = await axios.get(`http://localhost:5000/students/${id}`);
    console.log(res);
    if(res.status==200 && res.statusText=="OK"){
        console.log(res.data.student);
        name.value=res.data.student.name;
        email.value=res.data.student.email;
        course.value= res.data.student.course;
    }else{
        alert("failed to fetch student!")
    }
}

fetchStudent()

form.addEventListener("submit",async(e)=>{
    e.preventDefault();

    const student = {
        name:name.value,
        email:email.value,
        course:course.value
    }

    let res = await axios.put(`http://localhost:5000/students/${id}`,student)

    if(res.status==200){
        alert("student updated!");
        window.location.href = 'index.html'
    }else{
        alert("something went wrong!")
    }
})