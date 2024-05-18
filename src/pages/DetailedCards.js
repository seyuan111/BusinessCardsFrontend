import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBar from '../component/NavBar'
import Blank from '../component/Blank'
import BackButton from '../component/BackButton'

const DetailedCards = () => {
    const [cards, setCards] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:8080/cards/${id}`)
        .then((response) => {
            setCards(response.data.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        <NavBar />
        <br></br>
        <BackButton />
        <h1 className="text-3xl my-6 ml-10">Detailed Cards</h1>
        {loading ? (<Blank />) : (
            <div className="m-6 flex flex-col border-2 rounded-md">
                <div className="p-4">
                    <span className="text-xl mr-4 text-neutral-400">Name:</span>
                    <span>{cards.name}</span>
                </div>
                <div className="p-4">
                    <span className="text-xl mr-4 text-neutral-400">Email:</span>
                    <span>{cards.email}</span>
                </div>
                <div className="p-4">
                    <span className="text-xl mr-4 text-neutral-400">Occupation:</span>
                    <span>{cards.occupation}</span>
                </div>
                <div className="p-4">
                    <span className="text-xl mr-4 text-neutral-400">Contact:</span>
                    <span>{cards.contact}</span>
                </div>
                <div className="p-4">
                    <span className="text-xl mr-4 text-neutral-400">Create Time:</span>
                    <span>{new Date(cards.createdAt).toString()}</span>
                </div>
                <div className="p-4">
                    <span className="text-xl mr-4 text-neutral-400">Update Time:</span>
                    <span>{new Date(cards.updatedAt).toString()}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default DetailedCards