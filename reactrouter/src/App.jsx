import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import './App.css'
import { BrowserRouter  } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Header/>
   </BrowserRouter>
  )
}

export default App
