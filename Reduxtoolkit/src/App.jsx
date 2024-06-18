import { useEffect, useState } from 'react'

import './App.css'
import Adddtodo from './components/Adddtodo'
import Todos from './components/Todos'

function App() {

  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <>
      <div className="min-vh-100 py-4">
        <div className="container  text-white">
          <h1 style={{color:"darkblue"}} className="text-center mb-4">Manage Your Todos</h1>
          <div className="mb-3">
            <Adddtodo selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo}/>
          </div>
          <div className="d-flex flex-column">
            <Todos setSelectedTodo={setSelectedTodo}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
