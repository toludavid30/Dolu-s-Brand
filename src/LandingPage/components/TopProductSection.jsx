import React from 'react'
import useCart from '../../context/CartContext/component/useCart'

const TopProductSection = () => {
    const {addtoCart} = useCart()

  return (
    <div id='TopProductSection' className='py-3 gap-2'>
        <h2 className='sectionTitle text-center py-2'>
            Top Products
        </h2>
        <div className="sectionWrapper container d-flex flex-wrap justify-content-around">
            <div className="cardWrapper card w-25 ">
                <img src="/Ankara-Cross, Cargo.jpeg" alt="" className='card-img-top' />
                <div className="cardText card-body d-flex flex-column justify-content-evenly">
                    <h6 className='card-title'>
                        Name: Cargo + Crossbag
                    </h6>
                    <p className='card-text'>
                        Price: 20,000 NGN
                    </p>
                    <button className='btn btn-sm btn-dark mx-auto' onClick={()=>addtoCart("11-22")}>Add to Cart</button>
                </div>
            </div>
            <div className="cardWrapper card w-25">
                <img src="/White Native Sample.jpg" alt="" className='card-img-top' />
                <div className="cardText card-body d-flex flex-column justify-content-evenly" >
                    <h6 className='card-title'>
                        Name: Custom Native Wear
                    </h6>
                    <p className='card-text'>
                        Price: 15,000 NGN
                    </p>
                    <button className='btn btn-sm btn-dark mx-auto' onClick={()=>addtoCart("33")}>Add to Cart</button>
                </div>
            </div>
            <div className="cardWrapper card w-25">
                <img src="/TFM Tote.jpeg" alt="" className='card-img-top' />
                <div className="cardText card-body d-flex flex-column justify-content-evenly">
                    <h6 className='card-title'>
                        Name: Custom Tote Bag
                    </h6>
                    <p className='card-text'>
                        Price: 5,000 NGN
                    </p>
                    <button className='btn btn-sm btn-dark mx-auto' onClick={()=>addtoCart("44")}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProductSection