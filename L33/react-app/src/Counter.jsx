import React, { useState } from 'react'

const Counter = () => {
    // let count =0;
    // let handleClick = ()=>{
    //     console.log("clicked!")
    //     count++;
    //     console.log(count);
    // }

    let [count,setCount] = useState(0);
    let handleClick = ()=>{
        setCount(count+1);
    }


  return (
    <div>
        <h1>count is : {count}</h1>
        <button onClick={handleClick} >Click</button>
    </div>
  )
}

export default Counter