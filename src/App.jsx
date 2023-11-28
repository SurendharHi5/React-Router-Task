import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavbarPage from './Navbar/NavbarPage'
import Home from './pages/Home'
import Car from './pages/Car'
import Bike from './pages/Bike'
import SignUp from './pages/SignUp'


function App() {

  return (
    <Router>
      <NavbarPage />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='Home' element = {<Home />} />
        <Route path='Car' element = {<Car />} />
        <Route path='Bike' element = {<Bike />} />
        <Route path='SignUp' element = {<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
