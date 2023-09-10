import React from 'react'
import Home from './Home/Home'
import AboutUs from './About/AboutUs'
import Services from './Services/Services'

const LandingPage = () => {
  return (
    <React.Fragment>
        <Home />
        <AboutUs />
        <Services />
    </React.Fragment>
  )
}

export default LandingPage