import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styling/nav.css'

const Navbar = () => {
  const [cartFilled, setCartFilled] = useState(false)

  return (
    <div>
        <nav className="container-fluid" id='navbar'>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <Link className="h-100" id='logoContainer' to="/">
                <img id='logo' src="/Dolu's logo.jpg" alt="LOGO"/>
                </Link>
                <div className="input-group h-100 py-3">
                    <span className='input-group-text'><i className="bi bi-search"></i></span>
                    <input type="text" className='border form-control'/>
                </div>
                <div className="navRight h-100">
                    <ul className="w-100 h-100 navRightWrap justify-content-around  d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link d-none d-md-block" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-none d-md-block" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-none d-md-block" to="/auth">Sign Up</Link>
                        </li>
                        <li className="nav-item h-100">
                            <Link className="nav-link" to="/cart">
                              <span className='fs-5 fs-md-4 cartIcon h-100'>
                                {cartFilled ? <i className="bi bi-cart"></i> : <i className="bi bi-cart-check-fill"></i>}
                              </span>
                            </Link>
                        </li>
                        <button
                        className="h-100 dropdown navbar-toggler d-md-none fs-5"
                        type="button"
                        aria-label="Toggle navigation"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            padding: '0 10px',
                            fontSize: '2rem'
                        }}
                                    >
                        <span className="navbar-toggler-icon w-100 h-100" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-list"></i>
                        </span>
                        <ul className="dropdown-menu h-auto">
                            <li><a className="dropdown-item" href="/about">About</a></li>
                            <li><a className="dropdown-item" href="/Contact">Contact Us</a></li>
                            <li><a className="dropdown-item" href="/auth">Sign Up</a></li>
                        </ul>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar