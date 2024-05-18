import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import NavBar from '../component/NavBar'
import BusinessCards from '../component/Home/BusinessCards'
import BusinessTable from '../component/Home/BusinessTable'
import Blank from '../component/Blank'

const Hero = () => {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')
    const [sortOrder, setSortOrder] = useState('asc')

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios('http://localhost:8080/cards');
                const fetchedCards = response.data.data

                const sortedCards = fetchedCards.sort((a,b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
                })

                setCards(sortedCards)
                setLoading(false)
            } catch(err){
                console.log(err)
                setLoading(false)
            }
        }
        fetchData()
    }, [sortOrder])

    const toggleSortOrder = () => {
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
      };

  return (
    <div className="w-full h-full">
    <NavBar />
      <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-x-4">
        <button className="mx-3 border px-4 py-1 rounded-lg text-white duration-300 mb-2 md:mb-0" onClick={() => setShowType("table")}>
        Table
        </button>
        <button className="mx-3 border px-4 py-1 rounded-lg text-white duration-300" onClick={() => setShowType("card")}>
        Card
        </button>
      </div>
      <div className="flex sm:flex-col justify-between items-center px-6">
        <h1 className="text-3xl my-8">My Business Cards</h1>
        <Link to="/cards/create"><MdOutlineAddBox className="text-white text-3xl" /></Link>
      </div>
      {loading ? <Blank /> : showType === "table" ? (<BusinessTable cards={cards}/>) : (<BusinessCards cards={cards}/>)}
    </div>
  )
}

export default Hero