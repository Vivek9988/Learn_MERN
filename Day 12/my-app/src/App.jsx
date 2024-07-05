import { useState } from 'react'
import {BrowserRouter, Routes, Route} form "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
        <Routes>

          <Routes path="/" element={<LandingScreen /> /}
      <Routes/> 
    </BrowserRouter>
    
    </>
  )
}

export default App
