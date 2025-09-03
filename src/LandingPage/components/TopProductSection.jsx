import React, { useEffect } from 'react'
import useCart from '../../context/CartContext/component/useCart'
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Power3 } from 'gsap/src';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);


const TopProductSection = () => {
    const {isLoggedIn, checkIsLoggedIn, addtoCart} = useCart()

    useEffect(()=>{
          checkIsLoggedIn()
          const tl = gsap.timeline({
            scrollTrigger: {
            trigger:".sectionWrapper",
            start: "top 80%", 
            end: "bottom 20%",
            // scrub: true

            }
            })
          tl.fromTo(".leftCard", {
            opacity: 0,
            x: -300,
            ease: Power3.easeIn
          },{
            duration: 2,
            opacity: 1,
            x: 0,
            },"first")

            tl.fromTo(".rightCard", {
            opacity: 0,
            x: 300,
            ease: Power3.easeIn,
            display: "none"
          },{
            duration: 2,
            opacity: 1,
            x: 0,
            display:"block"
        },"first")

            tl.fromTo(".centerCard", {
            opacity: 0,
            y: 300,
            ease: Power3.easeIn
          },{
            duration: 2,
            opacity: 1,
            y: 20,
        }, "first -=1")
        }, [])
  return (
    <div id='TopProductSection' className='py-4 gap-2'>
        <h2 className='sectionTitle text-center fw-bold py-2'>
            Top Products
        </h2>
        <div className="sectionWrapper container d-flex flex-wrap justify-content-around">
            <div className="cardWrapper leftCard card w-25">
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
            <div className="cardWrapper centerCard card w-25">
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
            <div className="cardWrapper rightCard card w-25">
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