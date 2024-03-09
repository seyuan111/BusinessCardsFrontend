import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../component/NavBar'
import Sliders from '../component/Sliders'

const Home = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-blue-300">

        <NavBar />

        <div className="w-full h-[80%] text-center flex flex-col items-center justify-center px-4 text-gray-500">
            <h1 className="font-bold text-2xl underline">The Business Cards</h1>
            <h1 className="text-[25px] mt-8 text-gray-500">Lost your business card? No problem, add it online.</h1>
            <p className="mb-5 font-bold">You can add business cards here to secure contacts. Rip up business card? no problem add it here before ripping it up.</p>
            <div className="text-white flex flex-col sm:flex-row">
                <button className="w-full sm:w-auto bg-blue-500 text-white hover:bg-blue-900 rounded-xl px-6 py-2 duration-300 mb-2 sm:mb-0"><Link to="/Hero">View Cards</Link></button>
                <button className="w-full sm:w-auto px-6 py-2 mt-4 sm:mt-0 bg-red-500 hover:bg-red-900 rounded-xl text-white duration-300 ml-0 sm:ml-6"><Link to="/posts/create">Add Cards</Link></button>
            </div> 
        </div>
        
        <Sliders />
    </div>
  )
}

export default Home