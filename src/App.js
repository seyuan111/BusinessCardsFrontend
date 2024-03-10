import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './pages/Hero'
import AddCard from './pages/AddCard'
import DeleteCard from './pages/DeleteCard'
import EditCards from './pages/EditCards'
import DetailedCards from './pages/DetailedCards'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Hero" element={<Hero />}></Route>
      <Route path='/cards/create' element={<AddCard />}></Route>
      <Route path='/cards/delete/:id' element={<DeleteCard />}></Route>
      <Route path='/cards/edit/:id' element={<EditCards />}></Route>
      <Route path='/cards/details/:id' element={<DetailedCards />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
    </Routes>
  );
}

export default App;
