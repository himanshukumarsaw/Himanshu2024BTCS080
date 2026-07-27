import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router"
import Home from "./features/Home/Home.jsx"
import About from "./features/About/About.jsx"
import Contact from "./features/Contact/Contact.jsx"
import Navbar from './features/shared/Navabar.jsx'
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
