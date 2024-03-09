import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './pages/Hero'
import AddCard from './pages/AddCard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Hero" element={<Hero />}></Route>
      <Route path='/cards/create' element={<AddCard />}></Route>
    </Routes>
  );
}

export default App;
