import React, { useEffect } from 'react'
import { useState } from 'react';

const Temp =  () => {
    /// side effect
    let [count,setCount] = useState(0);
    let handleClick = ()=>{
        setCount(count+1);
    }

    // useEffect(()=>{
    //     async function fetchData(){
    //             let res = await fetch('https://dummyjson.com/products');
    //             console.log(res);
    //     }
    //     fetchData();
    // },[])

     useEffect(()=>{
        async function fetchData(){
                let res = await fetch('https://dummyjson.com/products');
                console.log(res);
        }
        fetchData();
        setCount(count+1);
    },[count])
    
    

  return (
    <div>
        <h1>count is : {count}</h1>
        <button onClick={handleClick} >Click</button>
    </div>
  )
}

export default Temp