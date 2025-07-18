import React, { useEffect, useState } from 'react'
import useCart from '../../context/CartContext/component/useCart'

const Products = () => {
    const {addtoCart} = useCart()
    var keyword = ""
    const [nativeProducts, setNativeProducts] = useState([])
    const [shirtProducts, setShirtProducts] = useState([])
    const [pantsProducts, setPantsProducts] = useState([])
    const [cargoProducts, setCargoProducts] = useState([])
    const [toteProducts, setToteProducts] = useState([])
    const [crossProducts, setCrossProducts] = useState([])
    const getNativeProducts = async()=>{
        keyword = "Native wear"
        // setKeyword("Native")
        try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data.products);
            setNativeProducts(data.products)
            
        } catch (error) {
            console.log(error);
        }
    }

    const getShirtProducts = async()=>{
        keyword = "Shirt"
        // setKeyword("Native")
        try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data.products);
            setShirtProducts(data.products)            
        } catch (error) {
            console.log(error);
        }
    }

    const getPantsProducts = async()=>{
        keyword = "Trousers, Corporate"
        try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data.products);
            setPantsProducts(data.products)            
        } catch (error) {
            console.log(error);
        }
    }

    const getCargoProducts = async()=>{
        keyword = "Cargo"
        try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data.products);
            setCargoProducts(data.products)            
        } catch (error) {
            console.log(error);
        }
    }

    const getToteProducts = async()=>{
        keyword = "Tote"
        try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data.products);
            setToteProducts(data.products)            
        } catch (error) {
            console.log(error);
        }
    }

    const getCrossProducts = async()=>{
        keyword = "Cross"
        try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data.products);
            setCrossProducts(data.products)            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getNativeProducts()
        getShirtProducts()
        getPantsProducts()
        getCargoProducts()
        getToteProducts()
        getCrossProducts()
    },[])
  return (
    <div id='ProductsSection' className='py-4 container'>
        <h2 className='sectionTitle text-center fw-bold'>Products</h2>
        <div className="sectionWrapper w-100 py-3">
            <div id='NativeSection' className="nativeSection row gap-3 gap-md-4 gap-lg-5 mx-auto" >
                <h4 className='sectionHeader'>Traditional Wears</h4>
                    {
                        nativeProducts?.map((elem,index) =>(
                            <div className='card cardWrapper' key={index}>
                                <img src={elem.productImage} alt="" className='card-image-top'/>
                                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center px-2">
                                    <h6>
                                        {elem.name}
                                    </h6>
                                    <p> ₦ {elem.price}</p>
                                    <button className='btn btn-sm btn-dark mx-auto' onClick={()=>addtoCart(`${elem.id}`)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <div id='ShirtSection' className="ShirtSection">

            </div>
        </div>
    </div>
  )
}

export default Products