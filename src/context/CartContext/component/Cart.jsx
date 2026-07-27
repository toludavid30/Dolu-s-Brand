import React, { use, useContext, useEffect, useState } from 'react'
import useCart from './useCart'
import '../../styling/cart.css'
import { cartContext } from '../CartProvider'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const {cartProducts, retrieveCartItems, retrievedCart, setRetrievedCart, removeFromCart} = useCart()
    const [accTotal, setAccTotal] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const currentUser = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        setIsLoading(true)
        try {
            const fetchAll = async () => {
            const items = await Promise.all(
            cartProducts?.map(async elem => {
                const product = await retrieveCartItems(elem.id, elem.color, elem.size, elem.quantity);
                return product;
            })
            );
        setRetrievedCart(items);
        };
        fetchAll();
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false)
        }
        
    }, [cartProducts]);

        useEffect(() => {
        if (!retrievedCart || retrievedCart.length === 0) {
            setAccTotal(0);
        }
        let total = 0;
        retrievedCart?.forEach(elem => {
            total += parseInt(elem.quantity) * parseInt(elem.price.replace(/,/g, ''));
        });
        setAccTotal(total);
    }, [retrievedCart]);

    const saveTotal = () => {
        localStorage.setItem("cartTotal", JSON.stringify(accTotal))
    };
    const handleOrder = async() =>{
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
            body: JSON.stringify({
                userId: currentUser?.id,
                products: [...retrievedCart.map(item => ({productId: item.id, quantity: item.quantity}))],
                amount: accTotal
            })
        });
        const data = await res.json();
        if(data.status === 201 || data.status === "success"){
            localStorage.setItem("orderId", JSON.stringify(data.newOrder._id))
            // console.log(data.newOrder._id);
            alert("proceeding to checkout!")
        }else{
            alert(data.message || "Error placing order. Please try again.")
        }
    };

    const proceedToCheckout = () => {
        if (accTotal > 0) {
            handleOrder();
            saveTotal();
            navigate('/checkout');
            // window.location.href = "/checkout";
        }
    };

    // useEffect(() => {
    //     setCartTotal(accTotal)
    // }, [accTotal])
    

  return (
    <div>
        <div className="cartWrapper container">
            <div className="userInfo">
                <div className="profilePic">
                    <img src="/vecteezy_user-profile-icon-symbol-vector-template_36744532.jpg" alt="" />
                </div>
                <div className="userName">
                    <h5 className='text-center'>Welcome to your cart, {currentUser?.name}!</h5>
                </div>
            </div>
            <div className="userCart w-100">
                <h4>Your Cart:</h4>
                <div id='cartItemsWrap' className="cartItemsWrap w-100 py-2">
                {
                retrievedCart && retrievedCart.length > 0 ? (
                    retrievedCart.map((item, idx) => (
                    <div className="itemsWrap container d-flex py-2 border-bottom border-3" key={item.id || idx}>
                        <div className="left d-flex gap-2 gap-md-4">
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
                        <div className="input-body d-flex gap-1 gap-md-3">
                        <p>Qty:</p>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            className='quantityContain p-1'
                            value={item.quantity}  
                        />
                        </div> 
                        <div className="priceContainer d-flex align-items-center">
                        <span>Price:</span>
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
                {
                    retrievedCart && retrievedCart.length > 0 ? (
                        <div className='checkoutButton w-100 text-center py-4 py-md-5'>
                            {/* <div className="btn btn-large bg-dark text-light text-center py-2 px-4" onClick={
                                () => {
                                    Swal.fire({
                                        title: 'Error',
                                        text: 'Sorry, Checkout is curently unavailable',
                                        icon: 'info',
                                        confirmButtonText: 'OK'
                                    });
                                }
                            }>
                                Checkout NGN{accTotal}
                            </div> */}
                            <div className="btn btn-large bg-dark text-light text-center py-2 px-4" onClick={
                                () => {
                                    proceedToCheckout()
                                }
                            }>
                                Checkout NGN{accTotal}
                            </div>
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Cart