
/* ========================================
   FOOTER - ESPERANZA EN EL CIELO
======================================== */

const integrantes = [
  {
    nombre: 'Aranda Martínez Eimy Elieen',
    rol: 'Diseñadora creativa y desarrolladora web'
  },
  {
    nombre: 'Araujo Robledo Alain Javier',
    rol: 'Desarrollador del videojuego y móvil'
  },
  {
    nombre: 'Flores Luna Diego Sebastian',
    rol: 'Documentador del proyecto'
  },
  {
    nombre: 'Mora Yáñez Jonathan Alexis',
    rol: 'Product Owner'
  },
  {
    nombre: 'Santana Fernando Frausto',
    rol: 'Desarrollador del videojuego'
  }
]

function Footer() {
  return (
    <footer className="footer-wiki">
      <div className="footer-contenido">

        {/* NOMBRE DEL VIDEOJUEGO */}
        <h2>Esperanza en el Cielo</h2>

        <p className="footer-descripcion">
          Videojuego 2D de ciencia ficción,
          acción y plataformas.
        </p>

        <div className="footer-separador" />

        {/* CRÉDITOS */}
        <h3>Créditos del proyecto</h3>

        <div className="footer-contenedor-creditos">

          {/* INTEGRANTES */}
          <div className="footer-creditos">
            {integrantes.map((integrante) => (
              <div
                className="footer-integrante"
                key={integrante.nombre}
              >
                <strong>{integrante.nombre}</strong>
                <span>{integrante.rol}</span>
              </div>
            ))}
          </div>

          {/* MATEO CIENTÍFICO */}
          <img
            src="/images/mateo-creditos.png"
            alt="Doctor Mateo con bata de científico, lápiz y libreta"
            className="footer-mateo"
            loading="lazy"
          />

        </div>

        <div className="footer-separador" />

        {/* DERECHOS RESERVADOS */}
        <p className="footer-copyright">
          © 2026 Esperanza en el Cielo.
          Todos los derechos reservados.
        </p>

        <p className="footer-academico">
          Proyecto académico de desarrollo de videojuegos.
        </p>

      </div>
    </footer>
  )
}

export default Footer
