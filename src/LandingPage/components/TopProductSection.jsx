import React, { useEffect } from 'react'
import useCart from '../../context/CartContext/component/useCart'

const TopProductSection = () => {
    const {isLoggedIn, checkIsLoggedIn, addtoCart} = useCart()

    useEffect(()=>{
          checkIsLoggedIn()
        }, [])
  return (
    <div id='TopProductSection' className='py-4 gap-2'>
        <h2 className='sectionTitle text-center fw-bold py-2'>
            Top Products
        </h2>
        <div className="sectionWrapper container d-flex flex-wrap justify-content-around">
            <div className="cardWrapper card w-25">
                <img src="/Ankara-Cross, Cargo.jpeg" alt="" className='card-img-top' />
                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center">
                    <h6 className='card-title'>
                        Cargo + Crossbag
                    </h6>
                    <p className='card-text'>
                        NGN 23,499
                    </p>
                    <a className='btn btn-sm btn-dark mx-auto' href='/products/403-603'>View Product</a>
                </div>
            </div>
            <div className="cardWrapper card w-25">
                <img src="/White Native Sample.jpg" alt="" className='card-img-top' />
                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center" >
                    <h6 className='card-title'>
                        Custom Native Wear
                    </h6>
                    <p className='card-text'>
                        NGN 44,999
                    </p>
                    {/* <button className='btn btn-sm btn-dark mx-auto' onClick={
                        isLoggedIn ?
                        ()=>addtoCart("105")
                        :
                        () => {
                                    Swal.fire({
                                        title: 'Error',
                                        text: 'Kindly sign in to Access this function',
                                        icon: 'info',
                                        confirmButtonText: 'OK'
                                    });
                        }
                        }>Add to Cart</button> */}
                        <a className='btn btn-sm btn-dark mx-auto' href="/products/105">View Product</a>
                </div>
            </div>
            <div className="cardWrapper card w-25">
                <img src="/TFM Tote.jpeg" alt="" className='card-img-top' />
                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center">
                    <h6 className='card-title'>
                        Custom Tote Bag
                    </h6>
                    <p className='card-text'>
                        NGN 7,499
                    </p>
                    <a className='btn btn-sm btn-dark mx-auto' href='/products/503'>View Product</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProductSection