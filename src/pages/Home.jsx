import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../component/NavBar'
import Sliders from '../component/Sliders'

const Home = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-neutral-900">

        <NavBar />

        <div className="w-full h-[80%] text-center flex flex-col items-center justify-center px-4 text-white">
            <h1 className="text-4xl sm:text-5xl text-center tracking-widetext-2xl">The Business Cards</h1>
            <h1 className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Lost your business card? No problem, add it online.</h1>
            <p className="mb-10 text-lg text-center text-neutral-500 max-w-4xl">You can add business cards here to secure contacts. Rip up business card? no problem add it here before ripping it up.</p>
            <div className="flex justify-center">
              <Link to="/Hero" className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-4 mx-3 rounded-md">View Cards</Link>
              <Link to="/cards/create" className="py-3 px-4 mx-3 rounded-md border">Add Cards</Link>
            </div>
        </div>
        
        <Sliders />
    </div>
  )
}

export default Home