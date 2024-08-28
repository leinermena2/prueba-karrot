import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/Home.jsx'
import Colombia from './views/Colombia.jsx'
import Mexico from './views/Mexico.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colombia" element={<Colombia />} />
          <Route path="/mexico" element={<Mexico />} />
        </Routes>
   
    </Router>
  </StrictMode>,
)
