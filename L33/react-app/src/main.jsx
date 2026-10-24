import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Counter from './Counter'
import Input from './Input'
import Temp from './Temp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h1>Hello</h1>
    <App/> */}
    {/* <Counter/> */}
    {/* <Input/> */}
    <Temp/>
  </StrictMode>,
)
