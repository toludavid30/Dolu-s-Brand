import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styling/nav.css'

const Navbar = () => {
  const [cartFilled, setCartFilled] = useState(false)
  return (
    <div>
        <nav className="container-fluid" id='navbar'>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <Link className="" id='logoContainer' to="/">
                <img id='logo' src="/Dolu's logo.jpg" alt="LOGO"/>
                </Link>
                <div className="input-group">
                    <span className='input-group-text'><i class="bi bi-search"></i></span>
                    <input type="text" className='border form-control'/>
                </div>
                <div className="navRight">
                    <ul className="w-100 justify-content-around h-100 d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                              <span className='fs-4'>
                                {cartFilled ? <i className="bi bi-cart"></i> : <i className="bi bi-cart-check-fill"></i>}
                              </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar