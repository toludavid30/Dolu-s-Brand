import React, { createContext, useState } from 'react'

export const cartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
  const values =  {
    cartProducts,
    setCartProducts,
  }
  return (
    <cartContext.Provider value = {values}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider