
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

import Sidebar from './Sidebar'
import Footer from './Footer'

function WikiLayout({ children }) {
  const { pathname } = useLocation()

  // Guarda la ruta actual para distinguir
  // la primera carga de un cambio de pestaña.
  const rutaAnterior = useRef(pathname)

  useEffect(() => {
    // Al abrir la wiki inicialmente, no desplazamos
    // la página: el usuario verá la portada y el logo.
    //
    // Si cambia de pestaña, desplazamos la página
    // hasta el inicio de la estructura de la wiki.
    if (rutaAnterior.current !== pathname) {
      rutaAnterior.current = pathname

      const estructura = document.querySelector(
        '.wiki-estructura'
      )

      estructura?.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      })
    }

    // Animaciones de aparición de los elementos.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15
      }
    )

    const elementos = document.querySelectorAll(
      '.revelar'
    )

    elementos.forEach((elemento) => {
      observer.observe(elemento)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      {/* FONDO PRINCIPAL */}
      <div
        className="fondo-wiki"
        aria-hidden="true"
      />

      {/* PORTADA CON LOGO */}
      <section className="portada">
        <img
          src="/images/logo-wiki.png"
          alt="Esperanza en el Cielo Wiki"
          className="logo-wiki"
        />
      </section>

      {/* BARRA LATERAL Y CONTENIDO */}
      <div className="wiki-estructura">
        <Sidebar />

        <main className="contenido-wiki">
          {children}
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default WikiLayout
