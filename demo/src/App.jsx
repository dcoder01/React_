import Test from './test.jsx'
import { useState } from 'react'
import './App.css'
function App() {
  let [counter, setCounter]=useState(10);
  
  function inreament(){
    
    if(counter<20)
      {setCounter(counter+1)
        console.log(counter);
      }
    
    else
      {setCounter(counter)
        console.log(counter);
      }
  }
  const deccrement=()=>{
    if(counter>0)
      setCounter(counter-1)
    else
      setCounter(counter)
  }
  return (
    <>
    <button onClick={inreament}>increment{counter}</button>
    <button onClick={deccrement}>decrement{counter}</button>
    <p>val of {counter}</p>
    </>
  )
}

export default App
