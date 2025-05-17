import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './LayoutComponents/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    // <div>
    //   <LandingPage/>

    // </div>
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      {/* <Route path='/about' element={<About/>}/> */}
      {/* <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App