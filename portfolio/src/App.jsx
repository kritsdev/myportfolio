import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>Left</div>
      <div>Right</div>
   </div>
  )
}

export default App
