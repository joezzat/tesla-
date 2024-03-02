import React from 'react'

// framework & library
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Discover from './components/Discover'
import Contact from './components/Contact'
import FindUs from './components/FindUs'


const App = () => {
    return (
    <BrowserRouter>

                  <div className='APP'> 
                  <Header/>
               
               
        <Routes>
        
                <Route path='/' element={<Home/>} />
                <Route path='/Shop' element={<Shop/>} />
                <Route path='/Discover' element={<Discover/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/FindUs' element={<FindUs/>} />




        </Routes>
              </div>  
    </BrowserRouter>
 
)
}

export default App