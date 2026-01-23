import './App.css'
import Ballpit from './components/Ballpit'
import FlowingMenu from './components/FlowingMenu'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Account from './pages/Account';
import { useState } from 'react';

const demoItems = [
  { link: '#', text: 'Our Best Sellers', image: 'https://imgs.search.brave.com/5lW-mPkx-StZIkABSJ5XAQvLELDWfUXhDx4xJ4I17dA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/NjE1LzYyNy9zbWFs/bC9pY2UtY3JlYW0t/aW4tdGhlLWNvbmUt/b24td2hpdGUtYmFj/a2dyb3VuZC1waG90/by5qcGc' },
  { link: '#', text: 'DIY your Cone', image: 'https://media.gettyimages.com/id/469711614/vector/ice-cream-cones.jpg?s=612x612&w=0&k=20&c=yFeNx2XvTu0uhXxVB_PGcgKTy3HnA0net8Zy5nWEe7A=' },
  { link: '#', text: 'Previous Picks', image: 'https://imgs.search.brave.com/pmVzHdu5GSjM7iDfR0bbnc2ewSdFGtKuqXu-0ZHIlrU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA2LzI0/L2ZiLzA2MjRmYjE5/MWE1OWRmM2EyODI0/OGIzYTcyYTM0OTRj/LmpwZw' },
  
]

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <nav className="navbar navbar-expand-lg" style={{ zIndex: 1000 }}>
        {/* ... other navbar content ... */}
        <button 
          className="btn btn-outline-secondary btn-sm me-3" 
          onClick={toggleTheme}
          style={{ fontFamily: 'Modak' }}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
    </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary"style={{ zIndex: 1000, borderBottom: '5px solid #ff8fec' }}>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ fontFamily: 'Modak', color: '#ff69b4' }} >
      HOME 🏠
    </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

         <div className="collapse navbar-collapse" id="navbarNav">
      <div className="d-flex align-items-center ms-auto">
        
        {/* 1. Theme Change (Now before Orders) */}
        <button className="btn btn-outline-secondary btn-sm me-3" style={{ fontFamily: 'Modak' }}>
          🌙 Change Theme
        </button>

        {/* 2. Orders */}
        <ul className="navbar-nav flex-row align-items-center me-3">
          <li className="nav-item px-2">
            <a className="nav-link" href="#" style={{ fontFamily: 'Modak' }}>ORDERS 🎀</a>
          </li>
        </ul>

        {/* 3. Account (Far right corner) */}
        <a className="nav-link" href="#" style={{ fontFamily: 'Modak', textTransform: 'uppercase' }}>
          ACCOUNT 👤
        </a>
      </div>
    </div>
  </div>
      </nav>

      {/* Main Scene */}
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden'
        }}
      >
        <h1 className="main-heading">Dream Scoop🍦</h1>

        {/* Ballpit – visual only, no pointer capture */}
        <div
          style={{
            position: 'absolute',
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            inset: 0,
            zIndex: 10,
            pointerEvents: 'none' // 🔑 allows clicks to pass through
          }}
        >
          <Ballpit
            count={50}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
          />
        </div>

        {/* Flowing Menu – interactive layer */}
        <div
          style={{
            position: 'absolute',
            bottom: '260px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(100%, 900px)', // responsive width
            padding: '0 16px',
            zIndex: 10,
            pointerEvents: 'auto',
            borderRadius: '100px', // Use a string like '50px' or '100px'
            overflow: 'hidden',
            fontFamily: "Luckiest Guy',system-ui"
          }}
        >
          <FlowingMenu
            items={demoItems}
            speed={20}
            textColor="#e97ebc"
            bgColor="#fc9fd200"
            marqueeBgColor="#f59ccd"
            marqueeTextColor="#060010"
            borderColor="#ffffff00"
            borderRadius={100}
            
          />
        </div>
      </div>
    </>
  )
}

export default App
