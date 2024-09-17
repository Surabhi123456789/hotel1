import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import About1 from '../components/About1'
import About2 from '../components/About2'
import About3 from '../components/About3'
import About4 from '../components/About4'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
        <About1/>
        <About2/>
        <About3/>
        <About4/>
      <Footer/>
    </div>
  )
}

export default AboutUs
