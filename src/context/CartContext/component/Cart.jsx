import React, { useEffect } from 'react'
import useCart from './useCart'
import '../../styling/cart.css'

const Cart = () => {
    const {cartProducts, retrieveCartItems, retrievedCart} = useCart()
    const cartContainer = document.getElementById("cartItemsWrap")
    const currentUser = JSON.parse(localStorage.getItem("user"))
    useEffect(()=>{
        cartProducts.forEach(elem => {
        retrieveCartItems(elem.id, cartContainer)
        setTimeout(()=>{
        console.log(retrievedCart);
    }, 10000)
    });
    
    },[])
    

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
            <div className="userCart">
                <h5>Your Cart:</h5>
                <div id='cartItemsWrap' className="cartItemsWrap">
                    <div className="containerWrapper container">
                        <div className="itemsWrap">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart