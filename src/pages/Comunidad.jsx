
import { useEffect, useState } from 'react'

import {
  UsersRound,
  ClipboardList,
  MessageCircleHeart,
  ExternalLink,
  WifiOff
} from 'lucide-react'

import ImagenWiki from '../components/ImagenWiki'

/* ========================================
   ENLACE DEL FORMULARIO
======================================== */

const FORMULARIO_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdk6_N8zLdjHkqVqSDw9MWiJpg9lsoNfjQyvOCfZoECLDk-rg/viewform'

const FORMULARIO_EMBEBIDO =
  `${FORMULARIO_URL}?embedded=true`

/* ========================================
   PÁGINA COMUNIDAD
======================================== */

function Comunidad() {
  const [enLinea, setEnLinea] = useState(
    navigator.onLine
  )

  useEffect(() => {
    const conectar = () => setEnLinea(true)
    const desconectar = () => setEnLinea(false)

    window.addEventListener('online', conectar)
    window.addEventListener('offline', desconectar)

    return () => {
      window.removeEventListener('online', conectar)
      window.removeEventListener('offline', desconectar)
    }
  }, [])

  return (
    <div className="pagina-comunidad">

      {/* =====================================
          SECCIÓN 1: BIENVENIDA
      ===================================== */}

      <section className="panel-wiki revelar">

        <h1 className="comunidad-titulo">
          <UsersRound
            size={30}
            aria-hidden="true"
          />

          Comunidad
        </h1>

        <h2>¡Tu opinión importa!</h2>

        {/* MENSAJE Y CHIBI DEL SARGENTO */}

        <div className="comunidad-presentacion">

          <div className="comunidad-presentacion-texto">

            <p>
              ¡Hola, sobreviviente! Bienvenido a la
              comunidad de Esperanza en el Cielo.
            </p>

            <p>
              Estamos desarrollando un videojuego 2D
              de acción, plataformas y ciencia ficción.
              Queremos conocer tus primeras impresiones
              sobre nuestra historia, personajes,
              escenarios y estilo artístico.
            </p>

            <p>
              Aunque el videojuego todavía no cuenta
              con una versión pública para probar,
              tus opiniones pueden ayudarnos a
              mejorarlo antes de su lanzamiento.
            </p>

          </div>

          <ImagenWiki
            src="/images/sargento-comunidad.png"
            alt="El Sargento chibi señalando hacia el mensaje de Comunidad"
            className="comunidad-personaje comunidad-sargento"
          />

        </div>

        {/* MENSAJE DESTACADO */}

        <div className="comunidad-destacado">

          <MessageCircleHeart
            size={25}
            aria-hidden="true"
          />

          <div>
            <h3>¡Ayúdanos a mejorar!</h3>

            <p>
              Explora las diferentes secciones
              de nuestra wiki y después comparte
              tus expectativas, ideas y sugerencias.
            </p>
          </div>

        </div>

      </section>

      {/* =====================================
          SECCIÓN 2: ENCUESTA
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2 className="comunidad-subtitulo">
          <ClipboardList
            size={27}
            aria-hidden="true"
          />

          Encuesta de la comunidad
        </h2>

        <p>
          Hemos preparado una encuesta para
          conocer qué te parece el proyecto
          y qué te gustaría encontrar en el juego.
        </p>

        <p>
          La encuesta contiene 15 preguntas
          distribuidas en cuatro apartados:
          primeras impresiones, historia y
          personajes, expectativas del videojuego
          y retroalimentación.
        </p>

        {/* INFORMACIÓN DE LA ENCUESTA */}

        <div className="comunidad-informacion">
          <span>15 preguntas</span>
          <span>4 apartados</span>
          <span>4–6 minutos aproximadamente</span>
        </div>

        {/* FORMULARIO CON CONEXIÓN */}

        {enLinea ? (
          <div className="comunidad-formulario">
            <iframe
              src={FORMULARIO_EMBEBIDO}
              title="Encuesta de la comunidad de Esperanza en el Cielo"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            >
              Cargando formulario...
            </iframe>
          </div>
        ) : (
          <div
            className="comunidad-sin-conexion"
            role="status"
          >
            <WifiOff
              size={34}
              aria-hidden="true"
            />

            <h3>Sin conexión a Internet</h3>

            <p>
              La encuesta necesita conexión para
              cargar y enviar tus respuestas.
              Vuelve a intentarlo cuando tengas
              acceso a Internet.
            </p>
          </div>
        )}

        {/* ENLACE ALTERNATIVO */}

        <div className="comunidad-enlace">

          <p>
            ¿Tienes problemas para visualizar
            el formulario?
          </p>

          <a
            href={FORMULARIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="comunidad-boton"
          >
            <ExternalLink
              size={19}
              aria-hidden="true"
            />

            Abrir encuesta en Google Forms
          </a>

        </div>

      </section>

      {/* =====================================
          SECCIÓN 3: AGRADECIMIENTO
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2>
          ¡Gracias por formar parte de nuestra comunidad!
        </h2>

        {/* MATEO Y MENSAJE DE AGRADECIMIENTO */}

        <div className="comunidad-agradecimiento">

          <ImagenWiki
            src="/images/mateo-agradecimiento.png"
            alt="Doctor Mateo chibi levantando el pulgar"
            className="comunidad-personaje comunidad-mateo"
          />

          <div className="comunidad-agradecimiento-texto">

            <p>
              Cada comentario nos ayudará a conocer
              mejor las expectativas de los futuros
              jugadores y a tomar decisiones sobre
              el desarrollo de Esperanza en el Cielo.
            </p>

            <p>
              Agradecemos tu participación desde
              las primeras etapas del proyecto.
            </p>

            <p className="comunidad-despedida">
              ¡Nos vemos en el cielo!
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Comunidad
