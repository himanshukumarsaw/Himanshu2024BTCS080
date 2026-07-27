import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router"
import Home from "./features/Home/Home.jsx"
import About from "./features/About/About.jsx"
import Contact from "./features/Contact/Contact.jsx"
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
