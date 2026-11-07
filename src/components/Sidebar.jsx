
import { NavLink } from 'react-router'

import {
  House,
  Users,
  Map,
  Package,
  Gamepad2
} from 'lucide-react'

/* ========================================
   ENLACES DEL MENÚ
======================================== */

const enlaces = [
  {
    nombre: 'Inicio',
    destino: '/',
    icono: House
  },
  {
    nombre: 'Personajes',
    destino: '/personajes',
    icono: Users
  },
  {
    nombre: 'Niveles',
    destino: '/niveles',
    icono: Map
  },
  {
    nombre: 'Objetos',
    destino: '/objetos',
    icono: Package
  },
  {
    nombre: 'Mecánicas',
    destino: '/mecanicas',
    icono: Gamepad2
  }
]

/* ========================================
   COMPONENTE SIDEBAR
======================================== */

function Sidebar() {
  return (
    <aside className="sidebar-wiki">

      {/* TÍTULO DEL MENÚ */}
      <h2>Navegación</h2>

      {/* BOTONES DE NAVEGACIÓN */}
      <nav aria-label="Navegación principal">

        {enlaces.map((enlace) => {
          const Icono = enlace.icono

          return (
            <NavLink
              key={enlace.nombre}
              to={enlace.destino}
              end={enlace.destino === '/'}
              className={({ isActive }) =>
                isActive ? 'enlace-activo' : ''
              }
            >
              {/* ICONO */}
              <Icono
                className="sidebar-icono"
                size={20}
                strokeWidth={2}
                aria-hidden="true"
              />

              {/* NOMBRE DE LA PESTAÑA */}
              <span className="sidebar-texto">
                {enlace.nombre}
              </span>

            </NavLink>
          )
        })}

      </nav>

      {/* SEPARADOR */}
      <div className="sidebar-separador" />

      {/* INFORMACIÓN ADICIONAL */}
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
