import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './style.css'

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <main>
        <Routes>
          <Route path="/" element={<h1>Home page!</h1>} />
          <Route path="/about" element={<h1>About page!</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
