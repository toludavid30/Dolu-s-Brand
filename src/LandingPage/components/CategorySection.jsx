import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CategorySection = () => {
  return (
    <div id='categorySection' className='categorySection'>
        <div className='categoryWrap pt-4 pt-md-5 w-100'>

        <div className="e-card playing">
              <div className="image"></div>
              
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              

              <div className="infotop">
              <DotLottieReact
              src="https://lottie.host/0e62646c-1cc8-493d-b931-980059ab85a5/abZAKsWrr0.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '95%'}}
            />
              </div>
            </div>
           <div className="categoryListWrap pt-4 pt-md-5">
            <ul className='h-100 d-flex flex-column gap-3'>
              <li>
                <button className="btn-53">
                  <div className="original">NATIVE WEARS</div>
                  <div className="letters">
                    <span>N</span>
                    <span>A</span>
                    <span>T</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span>
                    <span> </span>
                    <span>W</span>
                    <span>E</span>
                    <span>A</span>
                    <span>R</span>
                    <span>S</span>
                  </div>
                </button>
              </li>
              <li>
              <button className="btn-53">
                  <div className="original">SHIRTS</div>
                  <div className="letters">
                    
                    <span>S</span>
                    <span>H</span>
                    <span>I</span>
                    <span>R</span>
                    <span>T</span>
                    <span>S</span>
                  </div>
                </button>
                <button className="btn-53">
                  <div className="original">PANTS</div>
                  <div className="letters">
                    
                    <span>P</span>
                    <span>A</span>
                    <span>N</span>
                    <span>T</span>
                    <span>S</span>
                  </div>
                </button>
              </li>
              <li>
              <button className="btn-53">
                  <div className="original">CARGO PANTS</div>
                  <div className="letters">
                    
                    <span>C</span>
                    <span>A</span>
                    <span>R</span>
                    <span>G</span>
                    <span>O</span>
                    <span> </span>
                    <span>P</span>
                    <span>A</span>
                    <span>N</span>
                    <span>T</span>
                    <span>S</span>
                  </div>
                </button>
                <button className="btn-53">
                  <div className="original">TOTE BAGS</div>
                  <div className="letters">
                    
                    <span>T</span>
                    <span>O</span>
                    <span>T</span>
                    <span>E</span>
                    <span> </span>
                    <span>B</span>
                    <span>A</span>
                    <span>G</span>
                    <span>S</span>
                  </div>
                </button>
                <button className="btn-53">
                  <div className="original">CROSS BAGS</div>
                  <div className="letters">
                    
                    <span>C</span>
                    <span>R</span>
                    <span>O</span>
                    <span>S</span>
                    <span>S</span>
                    <span> </span>
                    <span>B</span>
                    <span>A</span>
                    <span>G</span>
                    <span>S</span>
                  </div>
                </button>
              </li>
            </ul>
           </div>
        </div>
    </div>
  )
}

export default CategorySection