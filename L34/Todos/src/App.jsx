import React, { useRef, useState } from 'react'

const App = () => {
    let x = localStorage.getItem('todos');
    let [todos,setTodos] = useState(JSON.parse(x))

    let titleRef = useRef(null);
    let descRef = useRef(null);
    let handleClick = ()=>{
        console.log(titleRef.current.value)
        console.log(descRef.current.value);
        let title = titleRef.current.value;
        let desc = descRef.current.value;
        titleRef.current.value="";
        descRef.current.value="";
        localStorage.setItem("todos",JSON.stringify(todos))
        // setTodos([...todos,{title,desc}])

        setTodos((a)=>{
            return [...a,{title,desc}]
        })
    }

  return (
    <div>
        <div className='input'>
            <input ref={titleRef} type='text' placeholder='Enter title'></input>
            <br></br>
            <input ref={descRef} type='text' placeholder='Enter description'></input>
            <br></br>
            <button onClick={handleClick}>add Todo</button>
        </div>

        <div className='list'>
            {todos.map((item,ind)=>{
                return <li key={ind}>{item.title} , {item.desc}</li>
            })}
        </div>
    </div>
  )
}

export default App