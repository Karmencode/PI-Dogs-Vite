import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Landing from './components/landing page/Landing';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import CreateDog from './components/create/CreateDog';

function App() {
 

  return (
    <div className='App' >
         <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/create' element={<CreateDog />} />
         </Routes>

      </div>
  )
}

export default App
