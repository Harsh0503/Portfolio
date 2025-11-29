import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './component/NavBar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
    <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
