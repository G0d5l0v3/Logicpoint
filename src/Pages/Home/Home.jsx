import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import NavItems from '../../components/navbar/NavItems'

const Home = () => {
  return (
    <div className="bg-[#fffce0] w-full min-h-screen">
        <Navbar navLinks={NavItems} />
    </div>
  )
}

export default Home