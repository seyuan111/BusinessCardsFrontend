import React, {useState} from 'react'
import Blank from '../component/Blank'
import BackButton from '../component/BackButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from '../component/NavBar'

const AddCard = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [occupation, setOccupation] = useState("")
    const [contact, setContact] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSaveCards = () => {
        const data = {
            name,
            age,
            email,
            occupation,
            contact
        }
        setLoading(true)
        axios.post('http://localhost:8080/cards', data)
        .then(() => {
            setLoading(false)
            navigate('/Hero')
        })
        .catch((err) => {
            setLoading(false)
            alert("An error has occured. Please try again")
            console.log(err)
        })
    }

  return (
    <div>
        <NavBar />

        <br></br>

        <BackButton></BackButton>

        <h1 className="text-3xl my-6 ml-10">Add Business Card</h1>
        {loading ? <Blank /> : ""}
        <div className="flex flex-col border-2 border-blue-400 rounded-xl w-[300px] p-4 mx-auto m-6">

            <div className="my-4">
                <label className="text-xl mr-4 text-slate-600">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName=(e.target.value)}
                    className="rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>

            <div className="my-4">
                <label className="text-xl mr-4 text-slate-600">Age</label>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge=(e.target.value)}
                    className="rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>

            <div className="my-4">
                <label className="text-xl mr-4 text-slate-600">Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail=(e.target.value)}
                    className="rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>

            <div className="my-4">
                <label className="text-xl mr-4 text-slate-600">Email</label>
                <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation=(e.target.value)}
                    className="rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>

            <div className="my-4">
                <label className="text-xl mr-4 text-slate-600">Contact</label>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact=(e.target.value)}
                    className="rounded-xl border-2 border-gray-400 px-4 py-2 w-full" 
                />
            </div>
            <button className="text-white font-bold p-2 bg-blue-500 m-8 rounded-xl w-[80%]" onClick={handleSaveCards}>Submit</button>
        </div>
    </div>
  )
}

export default AddCard