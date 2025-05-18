import React, { useEffect } from 'react'
import { gsap } from 'gsap';

const Herosection = () => {
  { 

    useEffect(() => {
      // gsap.from(".heroPicture1", 
      //   {
      //     duration: 2,
      //     opacity: 0,
      //     x: 400,
      //     y: 180,
      //     scale: 0.5,
      //     rotation: 150,
      //     ease: "power3.out",
      //     onComplete: () => {
      //       gsap.to(".heroPicture1", {
      //         duration: 2,
      //         opacity: 1,
      //         x: 0,
      //         y: 0,
      //         scale: 1.5,
      //         rotation: 0,
      //         ease: "elastic.inOut",
      //       });
      //     },
      //   }
        gsap.fromTo(".heroPicture1",{
          duration: 2,
          opacity: 0,
          x: 400,
          y: 180,
          scale: 0.5,
          rotation: 150,
          ease: "power3.out",
        },{
              duration: 2,
              opacity: 1,
              x: 0,
              y: 100,
              scale: 1.5,
              rotation: 0,
              ease: "elastic.inOut",
        })
      },[])
    }
  return (
    <div className='heroWrapper'>
      <div className="heroPicContainer">
      <div className="heroPics heroPicture1">
            <img src="/98c6f712-e5e4-494e-9f2e-b47c36ebbc4b.jpg" alt="" />
          </div>
          <div className="heroPics heroPicture2">
            <img src="/cfb37e23-c9f3-499f-875a-ca847843dcb6.jpg" alt="" />
          </div> 
          <div className="heroPics heroPicture3">
            <img src="/Semi-Wide Loose Pants – DAXUEN.jpg" alt="" />
          </div>
          <div className="heroPics heroPicture4">
            <img src="/Women’s Canvas Tote in 4 Colors Lining texture….jpg" alt="" />
          </div>
      </div>
      <div className="textContainer">
        <h1 className="typefaceContainer">
          DOLÚ
        </h1>
        <p className='text-center fs-6'>
          luxury made for elegance ...
        </p>
      </div>
    </div>
  )
}

export default Herosection