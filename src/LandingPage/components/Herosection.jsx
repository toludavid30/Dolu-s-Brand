import React, { useEffect } from 'react'
import { gsap } from 'gsap';

const Herosection = () => {
  { 

    useEffect(() => {
        gsap.fromTo(".heroPicture1",{
          duration: 2,
          opacity: 0,
          x: -400,
          y: 180,
          scale: 0.5,
          rotation: 150,
          ease: "power3.out",
        },{
              duration: 2.5,
              opacity: 1,
              x: 0,
              y: 60,
              scale: 1.7,
              rotation: 0,
              ease: "elastic.inOut",
        })

        gsap.fromTo(".heroPicture2",{
          duration: 2,
          opacity: 0,
          x: 400,
          y: 180,
          scale: 0.5,
          rotation: 150,
          ease: "power3.out",
        },{
              duration: 2.5,
              opacity: 1,
              x: 0,
              y: 60,
              scale: 1.7,
              rotation: 0,
              ease: "elastic.inOut",
        })

        gsap.fromTo(".heroPicture3",{
          duration: 2,
          opacity: 0,
          x: -400,
          y: 180,
          scale: 0.5,
          rotation: 150,
          ease: "power3.out",
        },{
              duration: 2.5,
              opacity: 1,
              x: 0,
              y: 65,
              scale: 1.7,
              rotation: 0,
              ease: "elastic.inOut",
        })

        gsap.fromTo(".heroPicture4",{
          duration: 2,
          opacity: 0,
          x: 400,
          y: 180,
          scale: 0.5,
          rotation: 150,
          ease: "power3.out",
        },{
              duration: 2.5,
              opacity: 1,
              x: 0,
              y: 65,
              scale: 1.7,
              rotation: 0,
              ease: "elastic.inOut",
        })
      },[])
    }
  return (
    <div className='heroWrapper container'>
      <div className="heroPicContainer gap-md-2 d-grid">
        <div className="topPicWrapper row d-flex w-100 justify-content-around">
          <div className="heroPics heroPicture1">
              <img src="/Shirt-Pant.jpeg" alt="" />
            </div>
            <div className="heroPics heroPicture2">
              <img src="/NPant-cross.jpeg" alt="" />
            </div>
        </div>
        <div className="bottomPicWrapper d-flex justify-content-between">
          <div className="heroPics heroPicture3">
              <img src="/Cargo-Tote.jpeg" alt="" />
            </div>
            <div className="heroPics heroPicture4">
              <img src="/cargo-cross.jpeg" alt="" />
            </div>
        </div> 
      </div>
      <div className="textContainer">
        <h1 className="typefaceContainer">
          DOLÚ
        </h1>
        <p className='text-center fs-6 fst-italic'>
          luxury made for elegance ...
        </p>
      </div>
    </div>
  )
}

export default Herosection