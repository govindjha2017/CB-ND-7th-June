import React, { useContext } from 'react'
// import { createContext } from 'react'
// let dataContext = createContext()
import dataContext from './abc'
const Chacha = () => {
    let data = useContext(dataContext);
    console.log(data);
  return (
    <div>Chacha</div>
  )
}

export default Chacha
// export {dataContext};