import React, {useState} from 'react'
import BackButton from '../component/BackButton'
import Blank from '../component/Blank'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const DeleteCard = () => {
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams();
    const handleDeleteCards = () => {
        setLoading(true)
        axios.delete(`http://localhost:8080/cards/${id}`)
        .then(() => {
            setLoading(false);
            navigate('/Hero')
        })
        .catch((err) => {
            setLoading(false)
            alert("We can't delete this card. Please try again.")
            console.log(err)
        })
    }

  return (
    <div className="p-4">
        <BackButton />
        {loading ? <Blank /> : ""}
        <div className="my-6 flex flex-col items-center border-2 rounded-xl w-[300px] p-8 mx-auto">
            <h3 className="text-2xl">Are you sure you want to delete this book</h3>
            <button className="p-4 border-2 rounded-lg text-white m-8 w-full" onClick={handleDeleteCards}>Delete</button>  
        </div>
    </div>
  )
}

export default DeleteCard