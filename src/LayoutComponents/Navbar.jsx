import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styling/nav.css'
import useCart from '../context/CartContext/component/useCart'

const Navbar = () => {
  const [cartFilled, setCartFilled] = useState(false)
  const [searchItems, setSearchItems] = useState([])
  const{addtoCart} = useCart()
//   const[noSearchItem, setNoSearchItem] = useState()
    // var searchItems = []
  
  const search = async(e) =>{
    const searchInput = e.target.value
    if(!searchInput){
        setSearchItems([]);
        return;
    }
    try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword: searchInput}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if(e.target.value){
                setSearchItems(data.products)
            }
            
        } catch (error) {
            console.log(error);
        }
  }

  return (
    <div>
        <nav className="container-fluid" id='navbar'>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <Link className="h-100" id='logoContainer' to="/">
                <img id='logo' src="/Dolu's logo.jpg" alt="LOGO"/>
                </Link>
                <div className="input-group h-100 py-3">
                    <span className='input-group-text'><i className="bi bi-search"></i></span>
                    <input id='searchInput' type="text" className='border form-control' onChange={search}/>
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
                        <li className="nav-item fw-bold h-100">
                            <Link className="cart-link text-dark" to="/cart">
                              <span className='fs-5 fs-md-4 cartIcon h-100'>
                                {cartFilled ? <i className="bi bi-cart fs-4 fs-md-6"></i> : <i className="bi bi-cart-check-fill fs-4 fs-md-6"></i>}
                              </span>
                            </Link>
                        </li>
                        <button
                        className="h-100 dropdown navbar-toggler d-md-none fs-4"
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
                            <i className="bi bi-list fs-4 fs-md-6"></i>
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
            {
                 searchItems? (
                    <div id='searchDisplay' className="searchDisplay">
                        {
                    searchItems?.map((elem, index)=>(
                        <div className='container itemWrap border border-2 p-2' key={index}>
                            <div className="container itemWrapper d-flex">
                                <img src={elem.productImage} alt="" className='card-img-top'/>
                                <div className="card-body w-75 d-flex">
                                    <div className="itemInfo w-75 p-3 d-flex h-100 flex-column">
                                        <p>
                                            Name: {elem.name}
                                        </p>
                                        <p>
                                            Price: NGN {elem.price}
                                        </p>
                                    </div>
                                    <div className="button w-25">
                                        <button className='btn btn-sm btn-dark' onClick={()=>addtoCart(`${elem.id}`)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>  
                ):("")  
            }
        
    </div>
  )
}

export default Navbar