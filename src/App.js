import React from 'react'

import './App.css'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Platforms from './Components/Platforms/Platforms'
const App = () => {
  return (
    <div>
<Navbar/>
     <Home/>
     <Platforms/>
     <Footer/>
    </div>
  )
}

export default App
