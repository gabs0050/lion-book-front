import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import CadastroUsuario from './pages/CadastroUsuario.jsx'
import Estoque from './pages/Estoque.jsx'

export default function App() {
  const location = useLocation()
  const isAuthLike = ['/login','/cadastro','/cadastro-usuario','/estoque','/home'].includes(location.pathname)
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
              <Link to="/estoque" className="hover:underline">Estoque</Link>
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
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="/estoque" element={<Estoque />} />
        </Routes>
      </main>
    </div>
  )
}
