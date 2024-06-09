import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './pages/components/Header'
import Admin from './admin/Admin'
import Upload from './admin/Upload'
import Login from './admin/Login'
import NotFound from './pages/Page/NotFound'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/upload" element={<Upload />} />
          <Route path="/admin/login" element={<Login />} />


          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
