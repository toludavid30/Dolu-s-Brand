import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './LayoutComponents/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Verify from './Auth/Verify';
import Auth from './Auth/Auth';
import NotFound from './NotFound';
import CartProvider from './context/CartContext/CartProvider';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './LayoutComponents/Footer';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/verify/:token' element={<Verify/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App