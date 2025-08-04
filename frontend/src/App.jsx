/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Signin } from './pages/Signin'
import Feed from './pages/Feed'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/feed' element={<Feed/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
