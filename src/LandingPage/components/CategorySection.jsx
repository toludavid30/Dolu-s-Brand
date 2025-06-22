import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CategorySection = () => {
  return (
    <div id='categorySection' className='categorySection'>
        <div className='categoryWrap pt-4 pt-md-5 w-100'>

        <div class="e-card playing">
              <div class="image"></div>
              
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              

              <div class="infotop">
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
                <button class="btn-53">
                  <div class="original">NATIVE WEARS</div>
                  <div class="letters">
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
              <button class="btn-53">
                  <div class="original">SHIRTS</div>
                  <div class="letters">
                    
                    <span>S</span>
                    <span>H</span>
                    <span>I</span>
                    <span>R</span>
                    <span>T</span>
                    <span>S</span>
                  </div>
                </button>
                <button class="btn-53">
                  <div class="original">PANTS</div>
                  <div class="letters">
                    
                    <span>P</span>
                    <span>A</span>
                    <span>N</span>
                    <span>T</span>
                    <span>S</span>
                  </div>
                </button>
              </li>
              <li>
              <button class="btn-53">
                  <div class="original">CARGO PANTS</div>
                  <div class="letters">
                    
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
                <button class="btn-53">
                  <div class="original">TOTE BAGS</div>
                  <div class="letters">
                    
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
                <button class="btn-53">
                  <div class="original">CROSS BAGS</div>
                  <div class="letters">
                    
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