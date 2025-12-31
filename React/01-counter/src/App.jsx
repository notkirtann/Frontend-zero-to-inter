import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let count = 5
  
  const addValue = ()=>{
    if(count<20){
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
    }
  }

  const removeVal = ()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  const resetVal = ()=>{
    setCount(0)
  }
  return (
    <>
      <h1>First counter project</h1>
      <h2>Counter value {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeVal}>Remove Value</button>
      <br />
      <button onClick={resetVal}>Reset Value</button>
    </>
  )
}

export default App
