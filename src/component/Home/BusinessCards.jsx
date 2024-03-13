import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const BusinessCards = ( {cards} ) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((item) => (
        <div key={item._id} className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-md">
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-yellow-300 rounded-md">
            <FaPhone className="text-blue-400 text-2xl" />
            {item.contact}
          </h2>
          <div className="flex justify-start items-center gap-x-2">
            <FaRegUser className="text-blue-400 text-xl" />
            <h2 className="my-1">{item.name}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-blue-400 text-xl" />
            <h2 className="my-1">{item.email}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
          <Link to={`/cards/details/${item._id}`}>
            <BsInfoCircle className="text-2xl text-purple-600 hover:text-blue-600"/>
          </Link>
          <Link to={`/cards/edit/${item._id}`}>
            <AiOutlineEdit className="text-2xl text-purple-600 hover:text-blue-600"/>
          </Link>
          <Link to={`/cards/delete/${item._id}`}>
            <MdOutlineDelete className="text-2xl text-purple-600 hover:text-blue-600"/>
          </Link>
        </div>
        </div>
      ))}
    </div>
  )
}

export default BusinessCards