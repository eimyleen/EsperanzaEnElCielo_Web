
import { BrowserRouter, Routes, Route } from 'react-router'

import WikiLayout from './components/WikiLayout'

import Inicio from './pages/Inicio'
import Personajes from './pages/Personajes'
import Niveles from './pages/Niveles'
import Objetos from './pages/Objetos'
import Mecanicas from './pages/Mecanicas'
import Comunidad from './pages/Comunidad'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <WikiLayout>
        <Routes>
          <Route
            path="/"
            element={<Inicio />}
          />

          <Route
            path="/personajes"
            element={<Personajes />}
          />

          <Route
            path="/niveles"
            element={<Niveles />}
          />

          <Route
            path="/objetos"
            element={<Objetos />}
          />

          <Route
            path="/mecanicas"
            element={<Mecanicas />}
          />

          <Route
            path="/comunidad"
            element={<Comunidad />}
          />
        </Routes>
      </WikiLayout>
    </BrowserRouter>
  )
}

export default App
