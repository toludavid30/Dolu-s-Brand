import React, { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../CartProvider'
import _default from 'eslint-plugin-react-refresh'

const useCart = () => {
    const {cartProducts, setCartProducts} = useContext(cartContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
        setIsLoggedIn(false)
        window.location.reload()
    }  
    const addtoCart = (productID) => {
        setCartProducts((prev) => {
            const existingIndex = prev.findIndex(item => item.id === productID);
                if (existingIndex !== -1) {
                    const updated = [...prev];
                    updated[existingIndex] = {...updated[existingIndex], quantity: updated[existingIndex].quantity + 1};
                    return updated;
                } else {
                    return [...prev, {id: productID, quantity: 1}];
                }
        }) 
        console.log(cartProducts);
        
    }
        // alert("Kindly sign in to Access this function")
    //     {
    //             Swal.fire({
    //                 title: 'Error',
    //                 text: 'Kindly sign in to Access this function',
    //                 icon: 'info',
    //                 confirmButtonText: 'OK'
    //             });
    // }

  return {
    addtoCart,
    isLoggedIn,
    logOutUser,
    checkIsLoggedIn
  }
}


export default useCart