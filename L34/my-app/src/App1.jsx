import React from 'react'
import Parent from './Parent'

import dataContext from './abc'
import Chacha from './Chacha'

let obj = {
    name:'govind',
    age:27,
    city:'Noida'
}

const App1 = () => {
  return (
    <div>
        <dataContext.Provider value={obj}>
            <Parent />
        </dataContext.Provider>

        <Chacha/>
    </div>
  )
}

export default App1
