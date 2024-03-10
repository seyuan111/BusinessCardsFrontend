import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const BusinessTable = ( {cards} ) => {
  return (
    <div className="overflow-x-auto bg-gray-400">
      <table className="w-full border-separate px-4 border-spacing-2">
        <thead>
          <tr>
            <th className="border border-gray-600 rounded-md">No.</th>
            <th className="border border-gray-600 rounded-md">Name</th>
            <th className="hidden md:table-cell border border-gray-600 rounded-md">Age</th>
            <th className="hidden md:table-cell border border-gray-600 rounded-md">Email</th>
            <th className="hidden md:table-cell border border-gray-600 rounded-md">Occupation</th>
            <th className="border border-gray-600 rounded-md">Contact</th>
            <th className="border border-gray-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card, index) =>(
            <tr key={card.id} className="h-8">
              <td className="text-white border border-slate-700 rounded-md text-center">
                {index +1}
              </td>
              <td className="text-white border border-slate-700 rounded-md text-center">
                {card.name}
              </td>
              <td className="hidden md:table-cell text-white border border-slate-700 rounded-md text-center">
                {card.age}
              </td>
              <td className="hidden md:table-cell text-white border border-slate-700 rounded-md text-center">
                {card.email}
              </td>
              <td className="hidden md:table-cell text-white border border-slate-700 rounded-md text-center">
                {card.occupation}
              </td>
              <td className="text-white border border-slate-700 rounded-md text-center">
                {card.contact}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/cards/details/${card._id}`}>
                    <BsInfoCircle className="text-2xl font-bold" />
                  </Link>
                  <Link to={`/cards/edit/${card._id}`}>
                    <AiOutlineEdit className="text-2xl font-bold text-blue-500" />
                  </Link>
                  <Link to={`/cards/delete/${card._id}`}>
                    <MdOutlineDelete className="text-2xl font-bold text-red-500" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BusinessTable