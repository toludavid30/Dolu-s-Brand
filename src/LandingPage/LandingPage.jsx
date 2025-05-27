import React from 'react'
import Herosection from './components/Herosection'
import "./styling/style.css"
import CategorySection from './components/CategorySection'
const LandingPage = () => {
  return (
    <div>
        <Herosection/>
        <CategorySection/>
    </div>
  )
}

export default LandingPage