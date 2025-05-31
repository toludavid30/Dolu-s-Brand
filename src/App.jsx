import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './LayoutComponents/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Verify from './Auth/Verify';
import Auth from './Auth/Auth';
import NotFound from './NotFound';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/verify/:token' element={<Verify/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App