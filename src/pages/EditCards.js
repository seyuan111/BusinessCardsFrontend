import React, {useState, useEffect} from 'react'
import BackButton from '../component/BackButton'
import Blank from '../component/Blank'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import NavBar from '../component/NavBar'

const EditCards = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [occupation, setOccupation] = useState("")
    const [contact, setContact] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:8080/cards/${id}`)
        .then((response) => {
            setName(response.data.data.name)
            setEmail(response.data.data.email)
            setOccupation(response.data.data.occupation)
            setContact(response.data.data.contact)
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
            alert("there is an error editing.")
            console.log(err)
        })
    },[])

    const handleEditCards = () => {
        const data = {
            name,
            email,
            occupation,
            contact
        }
        setLoading(true)
        axios.put(`http://localhost:8080/cards/${id}`, data)
        .then(() => {
            setLoading(false)
            navigate('/Hero')
        })
        .catch((err) => {
            setLoading(false)
            alert("An error has occured while editing. Please try again.")
            console.log(err)
        })
    }

  return (
    <div>
        <NavBar />
        <br></br>
        <BackButton />

        <h1 className="text-3xl my-6 ml-10">Edit Business Card</h1>
        {loading ? <Blank /> : ""}
        <div className="flex flex-col border-2 rounded-xl w-[300px] p-4 mx-auto m-6">

            <div className="my-4">
                <label className="text-xl mr-4 text-neutral-400">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-4 rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>

            <div className="my-4">
                <label className="text-xl mr-4 text-neutral-400">Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-4 rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>

            <div className="my-4">
                <label className="text-xl mr-4 text-neutral-400">Occupation</label>
                <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="mt-4 rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>

            <div className="my-4">
                <label className="text-xl mr-4 text-neutral-400">Contact</label>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="mt-4 rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>
            <button className="text-white font-bold p-2 border-2 m-8 rounded-xl w-[80%]" onClick={handleEditCards}>Submit</button>
        </div>
    </div>
  )
}

export default EditCards