import React, { useEffect } from 'react'
import useCart from './useCart'
import '../../styling/cart.css'

const Cart = () => {
    const {cartProducts, retrieveCartItems, retrievedCart, setRetrievedCart, removeFromCart} = useCart()
    const currentUser = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        const fetchAll = async () => {
            const items = await Promise.all(
            cartProducts.map(async elem => {
                const product = await retrieveCartItems(elem.id, elem.color, elem.size, elem.quantity);
                return product;
            })
            );
        setRetrievedCart(items);
        };
        fetchAll();
    }, [cartProducts]);
    

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
            <div className="userCart w-100">
                <h4>Your Cart:</h4>
                <div id='cartItemsWrap' className="cartItemsWrap w-100 py-2">
                {retrievedCart && retrievedCart.length > 0 ? (
                    retrievedCart.map((item, idx) => (
                    <div className="itemsWrap container d-flex py-2 border-bottom border-3" key={item.id || idx}>
                        <div className="left d-flex gap-4">
                        <div className="imgWrap">
                            <img src={item.image} alt={item.name} className='rounded-3'/>
                        </div>
                        <div className="productInfo d-flex flex-column gap">
                            <h5>{item.name}</h5>
                            <h6>Color: {item.color}</h6>
                            <h6>Size: {item.size}</h6>
                        </div>
                        </div>
                        <div className="right d-flex">
                        <div className="input-body d-flex gap-3">
                        <p>Quantity:</p>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            className='quantityContain p-1'
                            value={item.quantity}  
                        />
                        </div> 
                        <div className="priceContainer d-flex align-items-center">
                        <span>Total Price:</span>
                        <h6 className='m-0 totalPrice'>
                            NGN 
                            {parseInt(item.quantity) * parseInt(item.price.replace(/,/g, ''))}
                        </h6>
                        </div>                      
                        
                        <div className="removeIcon" onClick={() => removeFromCart(item.id)}>
                            <i className="bi bi-x-square btn btn-small fs-4"></i>
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <div id='noItems' className='text-center p-5'>No items in cart.</div>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart