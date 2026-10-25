import React, { useContext } from 'react'
// import {dataContext} from './App1'

import dataContext from './abc'

const Grandchild = () => {
    const data = useContext(dataContext);
    console.log(data);
  return (
    <div>
        <p>Hello from grand child</p>
    </div>
  )
}

export default Grandchild