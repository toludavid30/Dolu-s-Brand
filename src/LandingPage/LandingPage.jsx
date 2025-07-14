import React from 'react'
import Herosection from './components/Herosection'
import "./styling/style.css"
import "./styling/mediaQuery.css"
import CategorySection from './components/CategorySection'
import TopProductSection from './components/TopProductSection'
const LandingPage = () => {
  return (
    <div>
        <Herosection/>
        <CategorySection/>
        <TopProductSection/>
    </div>
  )
}

export default LandingPage