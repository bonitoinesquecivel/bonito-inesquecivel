import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Galeria from './pages/Galeria.jsx'

/* Rotas principais da aplicação */
export default function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria/:slug" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  )
}
