import { useEffect, useState } from 'react'

import './App.css'
import Adddtodo from './components/Adddtodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <div className="bg-dark min-vh-100 py-4">
        <div className="container  text-white">
          <h1 className="text-center mb-4">Manage Your Todos</h1>
          <div className="mb-3">
            <Adddtodo/>
          </div>
          <div className="d-flex flex-column">
            <Todos/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
