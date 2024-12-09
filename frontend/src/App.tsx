import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/blog/:id" element={<Blog/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
