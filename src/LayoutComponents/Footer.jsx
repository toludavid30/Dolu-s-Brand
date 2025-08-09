import React, { useEffect } from 'react'
import "./styling/footer.css"
import { Link } from 'react-router-dom'
import useCart from '../context/CartContext/component/useCart'

const Footer = () => {

  const {isLoggedIn, checkIsLoggedIn, logOutUser} = useCart()

  useEffect(()=>{
      checkIsLoggedIn()
    }, [])
  return (
    <div id='footer' className='bg-dark'>
      <div className="footerWrapper container">
        <div className="quickLinksWrap py-5">
          <h6 className='text-light'>
            Quick Links
          </h6>
          <ul className=''>
            <li>
              <Link className='quickLinks' to ="/">Home</Link>
            </li>
            <li>
              <Link className='quickLinks' to="/about">About</Link>
            </li>
            <li>
              <Link className='quickLinks' to="/contact">Contact</Link>
            </li>
            <li>
              { isLoggedIn ?
                <Link className='quickLinks' onClick={logOutUser}>Log Out</Link>
                :
                <Link className='quickLinks' to="/auth">Sign Up</Link>
              }
            </li>
          </ul>
        </div>
        <a href='#' className='btn-53 w-25 mx-auto'>
          <div className="original ">Scroll to Top</div>
                  <div className="letters">
                    <span>S</span>
                    <span>c</span>
                    <span>r</span>
                    <span>o</span>
                    <span>l</span>
                    <span>l</span>
                    <span></span>
                    <span>U</span>
                    <span>p</span>
                  </div>
        </a>
        <div className='rights py-5'>
          © 2025 DOLU by A.T.D, All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer