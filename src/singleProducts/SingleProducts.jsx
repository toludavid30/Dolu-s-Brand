import React, { useEffect, useState } from 'react'
import "./styling.css"
import { useParams } from 'react-router-dom'
import Loader from '../LayoutComponents/Loader/Loader'
import useCart from '../context/CartContext/component/useCart'

const SingleProducts = () => {
    const BaseUrl = "http://localhost:5005/product"
    const {productID} = useParams()
    // const {addtoCart} = useCart()
    const {isLoggedIn, checkIsLoggedIn, addtoCart} = useCart()
    const [product,setProduct] = useState({})
    const [colorValue, setColorValue] = useState()
    const [sizeValue, setSizeValue] = useState()
    const [quantityValue, setQuantityValue] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const retrieveProducts = async() =>{
        setIsLoading(true)
        try {
            const res = await fetch(`${BaseUrl}/${productID}`);
            const data =  await res.json()
            setProduct(data.product)
            console.log(productID);
            
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    }

    const setColor = (value) =>{
        const colorContain = document.getElementById("colorValue")
        colorContain.innerText = value
        setColorValue(value)
    }
    const setSize =(value) =>{
        const sizeContain = document.querySelector(".sizeValue")
        sizeContain.innerText = value
        setSizeValue(value)
    }
    const setQuantity = (value) =>{
        setQuantityValue(value)
    }

    useEffect(()=>{
        retrieveProducts()
        checkIsLoggedIn()
    },[])
  return (
    <div id='productWrapper' className='py-4'>
        {
            isLoading ? 
            <Loader/>
            :
            <div className='container wrap d-flex gap-5'>
                <div className="productImage">
                    <img src={product?.productImage} alt="" />
                </div>
                <div className="infoAndProp">
                    <div className="productInfo text-dark">
                        <h4>{product?.name}</h4>
                        <p>NGN {product?.price}</p>
                    </div>
                    <div className="productProp">
                        <div className="colorWrapper">
                            <p>COLOR: <span id='colorValue' className='colorValue'></span></p>
                            <ul className='colorSamples'>
                                <li tabindex="0"  className='blackSample border border-2 btn btn-small' onClick={()=>setColor("Black")}></li>
                                <li tabindex="0"  className='murberrySample border border-2 btn btn-small' onClick={()=>setColor("Murberry")}></li>
                                <li tabindex="0"  className='sageGreenSample border border-2 btn btn-small' onClick={()=>setColor("Sage Green")}></li>
                                <li tabindex="0"  className='chineseWhiteSample border border-2 btn btn-small' onClick={()=>setColor("Chinese White")}></li>
                                <li tabindex="0"  className='whiteSample border border-2 btn btn-small' onClick={()=>setColor("White")}></li>
                            </ul>
                        </div>
                        <div className="sizeWrapper">
                            <p>SIZE: <span id='sizeValue' className='sizeValue'></span></p>
                            <ul className='sizeSamples'>
                                <li tabindex="0"  className='small border border-2 btn btn-small' onClick={()=>setSize("Small")}>S</li>
                                <li tabindex="0"  className='medium border border-2 p- btn btn-small' onClick={()=>setSize("Medium")}>M</li>
                                <li tabindex="0"  className='large border border-2 btn btn-small' onClick={()=>setSize("Large")}>L</li>
                                <li tabindex="0"  className='Xlarge border border-2 btn btn-small' onClick={()=>setSize("Extra-Large")}>XL</li>
                                <li tabindex="0"  className='XXlarge border border-2 btn btn-small' onClick={()=>setSize("2x Extra-Large")}>XXL</li>
                            </ul>
                        </div>
                    </div
                    >
                    <div className="py-4">
                        <p>Quantity:</p>
                        <div className="productButtons">
                            <input type="number" name="" id="" min="1" max="5" className='quantityContain p-1' onChange={()=>setQuantity(document.querySelector(".quantityContain").value)}/>
                            <button className='btn btn-small bg-dark text-light'
                            onClick={
                            isLoggedIn ?
                                quantityValue && colorValue && sizeValue ? 
                                ()=>addtoCart(product.id, colorValue,sizeValue, quantityValue):
                                () => {
                                    Swal.fire({
                                        title: 'Error',
                                        text: 'Kindly choose the color, size and quantity of product',
                                        icon: 'info',
                                        confirmButtonText: 'OK'
                                    });
                        }
                            :
                            () => {
                                    Swal.fire({
                                        title: 'Error',
                                        text: 'Kindly sign in to Access this function',
                                        icon: 'info',
                                        confirmButtonText: 'OK'
                                    });
                        }
                        }
                        > Add to Cart</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        }
    </div>
  )
}

export default SingleProducts