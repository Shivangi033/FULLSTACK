import { Routes, Route, Link } from 'react-router-dom'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import './App.css'




function App() {
  return (
    <div>
      <header>
        <Link to="/">Profile</Link>
      </header>
      <h1>React Router – Vite Example</h1>

      <nav>
        <Link to="/"><button>Profile</button></Link> |{' '}
        <Link to="/dashboard"><button>Dashboard</button></Link> |{' '}
      </nav>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
