import React from 'react'
import useCart from './useCart'
import '../../styling/cart.css'

const Cart = () => {
    const {cartProducts} = useCart()
    const currentUser = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
        <div className="cartWrapper container">
            <div className="userInfo">
                <div className="profilePic">
                    <img src="/vecteezy_user-profile-icon-symbol-vector-template_36744532.jpg" alt="" />
                </div>
                <div className="userName">
                    <h5 className='text-center'>Welcome {currentUser?.name}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart