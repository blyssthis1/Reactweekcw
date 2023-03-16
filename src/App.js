import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import{useState} from'react'
import { BrowserRouter,
  Routes,
  Route,
  Link
}from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import CarSingle from './views/CarSingle';

function App() {
  return(
    <BrowserRouter>
    <nav>
      <ul>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Inventory">Inventory</Link>
        </li>
        <li>
        <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/car/:id" element={<CarSingle/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;