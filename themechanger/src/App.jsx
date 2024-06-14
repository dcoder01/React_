
import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './contexts/Theme'
import Themebutton from './components/Themebutton'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode]= useState('light')
  // const lighttheme= ()=>{
  //   setThemeMode('light')
  // }

  // const darkTheme=()=>{
  //   setThemeMode('dark')
  // }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  
  return (

    <Themeprovider value={{themeMode,setThemeMode}}>


      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebutton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </Themeprovider>
  )
}

export default App
