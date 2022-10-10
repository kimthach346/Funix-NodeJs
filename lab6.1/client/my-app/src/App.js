
import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom"
import Main from './main';
import User from './users';
import { Routes, Route } from "react-router-dom"


function App() {
  const [user, setUser] = useState([])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/users" element={<User/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App