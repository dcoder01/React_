import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet, useNavigation} from 'react-router-dom'
import './Layout.css';
function Layout() {
  const navigation=useNavigation()
  return (
    <>
    <Header/>
    <div id='load' className= {navigation.state === 'loading' ? 'loading' : ''}>
    <Outlet/>
    </div>
   
    <Footer/>
    </>
  )
}

export default Layout