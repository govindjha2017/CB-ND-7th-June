let baseUrl = 'http://localhost:5000';
const studentList = document.querySelector(".student-List");

const fetchStudents =async ()=>{
    // const res = axios.get('http://localhost:5000/students')
    const res = await axios.get(`${baseUrl}/students`)
    console.log(res.data.data);
    displayStudent(res.data.data)
}

fetchStudents();

const displayStudent = (data)=>{
    studentList.innerHTML="";
    for(let student of data){
        const div = document.createElement("div");
        div.classList.add("card");
        const str = `<p>${student.name}</p>
                <p>${student.email}</p>
                <p>${student.course}</p>
                <div>
                    <button onclick="editStudent('${student._id}')">Edit</button>
                    <button onclick="deleteStudent('${student._id}')">Delete</button>
                </div>`
        div.innerHTML= str;
        studentList.append(div);
    }
}

let deleteStudent = async (id)=>{
    console.log(id)
    const res = await axios.delete(`${baseUrl}/student/${id}`)

    console.log(res);

    if(res.status==200 && res.statusText=="OK"){
        window.alert("Student delted")
        fetchStudents();
    }else{
        window.alert("something went wrong!")
    }
}


const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener('click',()=>{
    window.location.href= "add.html"
})

let editStudent = (id)=>{
    window.location.href=`edit.html?id=${id}`
}