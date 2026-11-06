
import { NavLink } from 'react-router'

const enlaces = [
  { nombre: 'Inicio', destino: '/' },
  { nombre: 'Personajes', destino: '/personajes' },
  { nombre: 'Niveles', destino: '/niveles' },
  { nombre: 'Objetos', destino: '/objetos' },
  { nombre: 'Mecánicas', destino: '/mecanicas' }
]

function Sidebar() {
  return (
    <aside className="sidebar-wiki">
      <h2>Navegación</h2>

      <nav aria-label="Navegación principal">
        {enlaces.map((enlace) => (
          <NavLink
            key={enlace.nombre}
            to={enlace.destino}
            end={enlace.destino === '/'}
            className={({ isActive }) =>
              isActive ? 'enlace-activo' : ''
            }
          >
            {enlace.nombre}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-separador" />

      <h2>Explora la Wiki</h2>

      <p>
        Descubre la historia, personajes,
        niveles, objetos y mecánicas de
        Esperanza en el Cielo.
      </p>
    </aside>
  )
}

export default Sidebar
