import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../CartProvider'

const useCart = () => {
    const {cartProducts, setCartProducts} = useContext(cartContext)
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
  return {
    addtoCart,
  }
}

export default useCart