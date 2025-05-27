import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './LayoutComponents/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Verify from './Auth/Verify';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/verify/:token' element={<Verify/>} />
      
      {/* <Route path='/about' element={<About/>}/> */}
      {/* <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App