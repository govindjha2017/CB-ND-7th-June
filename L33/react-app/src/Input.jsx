import React, { useRef, useState } from 'react'

const Input = () => {
    
//     let [val,setVal] = useState("");
//     console.log(val);
//     let handleClick = ()=>{
//         console.log(val);
//     }

//   return (
//     <div>
//         <input onChange={(e)=>{setVal(e.target.value)}} id='inp' type='text' placeholder='Enter something Here...'></input>
//         <button onClick={handleClick}>Click</button>
//     </div>
//   )

    let inputRef = useRef(null);

    let handleClick = ()=>{
        console.log(inputRef.current);
    }

  return (
    <div>
        <input ref={inputRef} type='text' placeholder='Enter something Here...'></input>
        <button  onClick={handleClick}>Click</button>
    </div>
  )


}

export default Input