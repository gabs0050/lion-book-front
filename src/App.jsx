import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'

export default function App() {
  const location = useLocation()
  const isAuthLike = location.pathname === '/login' || location.pathname === '/cadastro'
  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthLike && (
        <header className="border-b">
          <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-6">
            <Link to="/" className="font-semibold">Lion Book</Link>
            <div className="ml-auto flex items-center gap-4 text-sm">
              <Link to="/home" className="hover:underline">Home</Link>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/cadastro" className="hover:underline">Cadastro</Link>
            </div>
          </nav>
        </header>
      )}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
    </div>
  )
}
