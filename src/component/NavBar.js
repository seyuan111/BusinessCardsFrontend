import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import 'tailwindcss/tailwind.css';

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="w-full h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 py-10 z-10">

        <div className="max-w-[1240px] mx-auto flex px-4 justify-between items-center h-full">

            <div className="text-green-700 cursor-pointer text-2xl font-bold">
                <h1><Link to="/">Business Cards</Link></h1>
            </div>

            <div className="hidden md:flex">
                <ul className="flex text-gray-600 items-center text-xl">
                    <li className="ml-4 cursor-pointer font-bold"><Link to="/Hero">View Cards</Link></li>
                    <li className="ml-4 cursor-pointer font-bold"><Link to="/cards/create">Add Card</Link></li>
                    <button className="ml-4 cursor-pointer font-bold"><Link to="/Login">Login</Link></button>
                </ul>
            </div>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-black" /> : <AiOutlineMenu size={30} className="text-black"/>}
            </div>

            <div className={nav ? "duration-300 pb-4 w-full bg-gradient-to-r bg-gray-400 absolute top-[70px] left-0 text-center justify-center flex" : "absolute left-[-100%]"}>
                <ul className="text-white">
                    <li className="ml-4 mb-4 cursor-pointer font-bold font-Cinzel"><Link to="/Hero">View Books</Link></li>
                    <li className="ml-4 mb-4 cursor-pointer font-bold font-Cinzel"><Link to="/books/create">Add Books</Link></li>
                    <button className="ml-4 cursor-pointer font-bold font-Cinzel"><Link to="/Login">Login</Link></button>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default NavBar