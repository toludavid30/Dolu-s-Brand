import React, { useEffect, useState } from 'react'
import useCart from '../../context/CartContext/component/useCart'
import Loader from '../../LayoutComponents/Loader/Loader'

const Products = () => {
    const {isLoggedIn, checkIsLoggedIn, addtoCart} = useCart()
    useEffect(()=>{
        checkIsLoggedIn()
    })
    var keyword = ""
    const [nativeProducts, setNativeProducts] = useState([])
    const [shirtProducts, setShirtProducts] = useState([])
    const [pantsProducts, setPantsProducts] = useState([])
    const [cargoProducts, setCargoProducts] = useState([])
    const [toteProducts, setToteProducts] = useState([])
    const [crossProducts, setCrossProducts] = useState([])
    const [isloading, setIsLoading] = useState(false)
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
            // console.log(data.products);
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
            // console.log(data.products);
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
            // console.log(data.products);
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
            // console.log(data.products);
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
            // console.log(data.products);
            setToteProducts(data.products)            
        } catch (error) {
            console.log(error);
        }
    }

    const getCrossProducts = async()=>{
        keyword = "Cross"
        setIsLoading(true)
        try {
            const res = await fetch("https://noderender-i690.onrender.com/product/search", {
                method: "POST",
                body: JSON.stringify({keyword}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            // console.log(data.products);
            setCrossProducts(data.products)            
        } catch (error) {
            console.log(error);
        } finally{
            setIsLoading(false)
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
        <div className="sectionWrapper w-100 d-flex flex-column gap-5 py-3">
            <div id='NativeSection' className="nativeSection row gap-3 gap-md-4 gap-lg-5 mx-auto" >
                <h5 className='sectionHeader text-start'>Traditional Wears</h5>
                {
                    isloading ? (
                        <Loader/>
                    ):
                    (
                        nativeProducts?.map((elem,index) =>(
                            <div className='card cardWrapper' key={index}>
                                <img src={elem.productImage} alt="" className='card-image-top'/>
                                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center px-2">
                                    <h6>
                                        {elem.name}
                                    </h6>
                                    <p> ₦ {elem.price}</p>
                                    <button className='btn btn-sm btn-dark mx-auto' onClick={
                                        isLoggedIn ?
                                        ()=>addtoCart(`${elem.id}`)
                                        :
                                        () => {
                                                    Swal.fire({
                                                        title: 'Error',
                                                        text: 'Kindly sign in to access this function',
                                                        icon: 'info',
                                                        confirmButtonText: 'OK'
                                                    });
                                        }
                                        }>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
            <div id='ShirtSection' className="ShirtSection row gap-3 gap-md-4 gap-lg-5 mx-auto">
                    <h5 className='sectionHeader'>Shirts</h5>
                    
                    {
                        isloading ? (
                            <Loader/>
                        ):(
                        shirtProducts?.map((elem,index) =>(
                            <div className='card cardWrapper' key={index}>
                                <img src={elem.productImage} alt="" className='card-image-top'/>
                                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center px-2">
                                    <h6>
                                        {elem.name}
                                    </h6>
                                    <p> ₦ {elem.price}</p>
                                    <button className='btn btn-sm btn-dark mx-auto' onClick={
                                        isLoggedIn ?
                                        ()=>addtoCart(`${elem.id}`)
                                        :
                                        () => {
                                                    Swal.fire({
                                                        title: 'Error',
                                                        text: 'Kindly sign in to access this function',
                                                        icon: 'info',
                                                        confirmButtonText: 'OK'
                                                    });
                                        }
                                    }>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    )
                    }
            </div>

            <div id='PantsSection' className="pantsSection row gap-3 gap-md-4 gap-lg-5 mx-auto">
                    <h5 className='sectionHeader'>Pants</h5>
                    {
                        isloading ? (
                            <Loader/>
                        ):(
                        pantsProducts?.map((elem,index) =>(
                            <div className='card cardWrapper' key={index}>
                                <img src={elem.productImage} alt="" className='card-image-top'/>
                                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center px-2">
                                    <h6>
                                        {elem.name}
                                    </h6>
                                    <p> ₦ {elem.price}</p>
                                    <button className='btn btn-sm btn-dark mx-auto' onClick={
                                        isLoggedIn ?
                                        ()=>addtoCart(`${elem.id}`)
                                        :
                                        () => {
                                                    Swal.fire({
                                                        title: 'Error',
                                                        text: 'Kindly sign in to access this function',
                                                        icon: 'info',
                                                        confirmButtonText: 'OK'
                                                    });
                                        }
                                    }>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    )
                    }
            </div>

            <div id='CargoSection' className="cargoSection row gap-3 gap-md-4 gap-lg-5 mx-auto">
                    <h5 className='sectionHeader'>Cargo Pants</h5>
                    {
                        isloading ? (
                            <Loader/>
                        ):(
                        cargoProducts?.map((elem,index) =>(
                            <div className='card cardWrapper' key={index}>
                                <img src={elem.productImage} alt="" className='card-image-top'/>
                                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center px-2">
                                    <h6>
                                        {elem.name}
                                    </h6>
                                    <p> ₦ {elem.price}</p>
                                    <button className='btn btn-sm btn-dark mx-auto' onClick={
                                        isLoggedIn ?
                                        ()=>addtoCart(`${elem.id}`)
                                        :
                                        () => {
                                                    Swal.fire({
                                                        title: 'Error',
                                                        text: 'Kindly sign in to access this function',
                                                        icon: 'info',
                                                        confirmButtonText: 'OK'
                                                    });
                                        }
                                    }>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    )
                    }
            </div>

            <div id='ToteSection' className="toteSection row gap-3 gap-md-4 gap-lg-5 mx-auto">
                    <h5 className='sectionHeader'>Totebags</h5>
                    {
                        isloading ? (
                            <Loader/>
                        ):(
                        toteProducts?.map((elem,index) =>(
                            <div className='card cardWrapper' key={index}>
                                <img src={elem.productImage} alt="" className='card-image-top'/>
                                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center px-2">
                                    <h6>
                                        {elem.name}
                                    </h6>
                                    <p> ₦ {elem.price}</p>
                                    <button className='btn btn-sm btn-dark mx-auto' onClick={
                                        isLoggedIn ?
                                        ()=>addtoCart(`${elem.id}`)
                                        :
                                        () => {
                                                    Swal.fire({
                                                        title: 'Error',
                                                        text: 'Kindly sign in to access this function',
                                                        icon: 'info',
                                                        confirmButtonText: 'OK'
                                                    });
                                        }
                                    }>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    )
                    }
            </div>
            <div id='CrossSection' className="crossSection row gap-3 gap-md-4 gap-lg-5 mx-auto">
                    <h5 className='sectionHeader'>Crossbags</h5>
                    {
                        isloading ? (
                            <Loader/>
                        ):(
                        crossProducts?.map((elem,index) =>(
                            <div className='card cardWrapper' key={index}>
                                <img src={elem.productImage} alt="" className='card-image-top'/>
                                <div className="cardText card-body d-flex flex-column justify-content-evenly text-center px-2">
                                    <h6>
                                        {elem.name}
                                    </h6>
                                    <p> ₦ {elem.price}</p>
                                    <button className='btn btn-sm btn-dark mx-auto' onClick={
                                        isLoggedIn ?
                                        ()=>addtoCart(`${elem.id}`)
                                        :
                                        () => {
                                                    Swal.fire({
                                                        title: 'Error',
                                                        text: 'Kindly sign in to access this function',
                                                        icon: 'info',
                                                        confirmButtonText: 'OK'
                                                    });
                                        }
                                    }>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    )
                    }
                    
            </div>
        </div>
    </div>
  )
}

export default Products