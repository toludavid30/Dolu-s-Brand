import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../CartProvider'
import _default from 'eslint-plugin-react-refresh'
import { Await } from 'react-router-dom'

const useCart = () => {
    const {cartProducts, setCartProducts} = useContext(cartContext)
    // const BaseUrl = "https://noderender-i690.onrender.com/auth"
    const BaseUrl = "https://noderender-i690.onrender.com/auth"
    const BaseUrl2 = "https://noderender-i690.onrender.com/product"
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [retrievedCart, setRetrievedCart] = useState()
    const checkIsLoggedIn = () => {
        const currentUser = JSON.parse(localStorage.getItem("user"))
        const currentToken = JSON.parse(localStorage.getItem("token"))
        if(currentUser && currentToken){
            setIsLoggedIn(true)
            // console.log(isLoggedIn);   
        }
    }
    const logOutUser = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("cartItems")

        setIsLoggedIn(false)
        window.location.reload()
    }  
    const addtoCart = async(productID, productColor, productSize, quantity) => {
        await setCartProducts((prev) => {
            const existingIndex = prev.findIndex(item => item.id === productID);
                if (existingIndex !== -1) {
                    const updated = [...prev];
                    updated[existingIndex] = {...updated[existingIndex], 
                        // quantity: updated[existingIndex].quantity + 1,
                        quantity: quantity, 
                        color : productColor, 
                        size : productSize};
                    return updated;
                } else {
                    return [...prev, {id: productID, quantity: quantity, color: productColor, size: productSize}];
                }
        }) 
        Swal.fire({
                        title: 'Success',
                        text: 'Product added to cart',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        themeColor: '#000000',
                        btnColor: '#7CFC00',
                        btnColor: true
                    });
    }
    useEffect(()=>{
        const prevCartItems = JSON.parse(localStorage.getItem("cartItems"))
        if(prevCartItems) {
            setCartProducts(prevCartItems)
        }
    },[])

    useEffect(()=>{ 
        const syncPrevCart = () =>{
            localStorage.setItem("cartItems", JSON.stringify(cartProducts))
        const currentUser = JSON.parse(localStorage.getItem("user"))
           const cartPayload = {
            userId: currentUser._id,
            cartItems: cartProducts
           }
        const syncCart = async() =>{
        try { 
                const res = await fetch( `${BaseUrl}/updateCart`,{
                    method: "POST",
                    body: JSON.stringify(cartPayload),
                    headers:{
                        "Content-Type" : "application/json"
                    }
                })
                const data = await res.json()
                console.log(data);
                console.log(cartPayload); 
                } catch (error) {
                    console.log(error);      
                }
        }
        syncCart()
        }
        setTimeout(syncPrevCart, 100)
        
    },[cartProducts])

    const retrieveCartItems = async(productID, productColor, productSize, productQuantity)=>{
        try{
            const res = await fetch(`${BaseUrl2}/${productID}`)
            const data =  await res.json()
            const product = data.product
        return {
            id: productID,
            name: product.name,
            color: productColor,
            size: productSize,
            quantity: productQuantity,
            image: product.productImage,
            price: product.price
        };
               
        }catch(error){
            console.log(error);
            return null
        }
        
    }

    const removeFromCart = (productID) => {setCartProducts(prev => prev.filter(item => item.id !== productID))};

  return {
    addtoCart,
    isLoggedIn,
    logOutUser,
    checkIsLoggedIn,
    cartProducts,
    setRetrievedCart,
    retrieveCartItems,
    retrievedCart,
    removeFromCart
  }
}


export default useCart