import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import NavItems from '../../components/navbar/NavItems'

const Home = () => {
  return (
    <div>
        <Navbar navLinks={NavItems} />
    </div>
  )
}

export default Home