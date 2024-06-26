import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { CiCreditCard1 } from "react-icons/ci";
import 'tailwindcss/tailwind.css';

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="w-full h-[70px] border-neutral-700/90 bg-neutral-600/90 py-10 z-10">

        <div className="max-w-[1240px] mx-auto flex px-4 justify-between items-center h-full">

            <div className="flex font-Rubik border-2 px-4 py-2 rounded-xl items-center text-white cursor-pointer text-xl font-bold">
                <CiCreditCard1 className="mr-1 font-bold" size={40} />
                <h1><Link to="/">- Ology</Link></h1>
            </div>

            <div className="hidden md:flex">
                <ul className="flex text-white font-Zeyada items-center text-xl">
                <li className="ml-4 cursor-pointer font-bold"><Link to="/">Home</Link></li>
                    <li className="ml-4 cursor-pointer font-bold"><Link to="/Hero">View Cards</Link></li>
                    <li className="ml-4 cursor-pointer font-bold"><Link to="/cards/create">Add Card</Link></li>
                    <button className="ml-4 cursor-pointer font-bold"><Link to="/Login">Login</Link></button>
                </ul>
            </div>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white"/>}
            </div>

            <div className={nav ? "duration-300 pb-4 w-full border-neutral-700/90 bg-neutral-600/90 absolute top-[70px] left-0 text-center justify-center flex" : "absolute left-[-100%]"}>
                <ul className="text-white">
                    <li className="ml-4 mb-4 cursor-pointer font-bold font-Cinzel"><Link to="/Home">Home</Link></li>
                    <li className="ml-4 mb-4 cursor-pointer font-bold font-Cinzel"><Link to="/Hero">View Cards</Link></li>
                    <li className="ml-4 mb-4 cursor-pointer font-bold font-Cinzel"><Link to="/cards/create">Add Cards</Link></li>
                    <button className="ml-4 cursor-pointer font-bold font-Cinzel"><Link to="/Login">Login</Link></button>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default NavBar