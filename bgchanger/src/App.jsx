import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("#EEF")


  return (
    <>

      <div className='vh-100 d-flex'
        style={{ backgroundColor: color }}
      >
        <div className='d-flex  justify-content-center fixed-bottom p-3 ' style={{backgroundColor:"pink"}}>
        <div>
          <button onClick={()=>setColor("red")}  className='btn rounded-4 mx-2' style={{color:"white", height:"50px", width:"100px" , padding:"5px" , backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColor("blue")} className='btn rounded-4 mx-2' style={{color:"white",height:"50px", width:"100px" , padding:"5px" ,backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("green")} className='btn rounded-4 mx-2' style={{color:"white",height:"50px", width:"100px" , padding:"5px",backgroundColor:"green"}}>green</button>
          
        </div>

        </div>
        
      </div>

    </>
  )
}

export default App
