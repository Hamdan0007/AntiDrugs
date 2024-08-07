import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Donate from './pages/Donate'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

 
      </Routes>
    </div>
    
  )
}

export default App