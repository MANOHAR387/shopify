import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import CheckOut from './Components/CheckOut'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import Cart from './Components/Cart'
import { Outlet } from 'react-router-dom'
import Search from './Components/Search'

function App() {



  return(
    <>
        <Header />
     
        <Outlet />
   
       
        
    </>
    
  )
}
 

export default App;
