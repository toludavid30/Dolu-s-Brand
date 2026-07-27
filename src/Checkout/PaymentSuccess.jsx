import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  useEffect(() => {
    const successCheckout = ( ) =>{
      // localStorage.removeItem("cart")
      localStorage.removeItem("cartItems")
      localStorage.removeItem("cartTotal")
      localStorage.removeItem("orderId")
      localStorage.removeItem("deliveryAddress")
      localStorage.removeItem("logististicsCost")
    }
    successCheckout()
    return () => {
      Swal.fire({
                        title: 'Success',
                        text: 'Order placed successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        themeColor: '#000000',
                        btnColor: '#7CFC00',
                        btnColor: true
                    });
    }
  }, [])
  return (
    <div className='text-center p-4'>
        <h3>Payment Success</h3>
        <p>Thank you for your patronage. Continue Shopping? <Link to="/">home</Link></p>
        <p></p>
    </div>
  )
}

export default PaymentSuccess