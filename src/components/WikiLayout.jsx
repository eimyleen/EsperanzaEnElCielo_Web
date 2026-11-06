
import { useEffect } from 'react'
import { useLocation } from 'react-router'

import Sidebar from './Sidebar'
import Footer from './Footer'

function WikiLayout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elementos = document.querySelectorAll('.revelar')

    elementos.forEach((elemento) => {
      observer.observe(elemento)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <div className="fondo-wiki" aria-hidden="true" />

      <section className="portada">
        <img
          src="/images/logo-wiki.png"
          alt="Esperanza en el Cielo Wiki"
          className="logo-wiki"
        />
      </section>

      <div className="wiki-estructura">
        <Sidebar />

        <main className="contenido-wiki">
          {children}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default WikiLayout
