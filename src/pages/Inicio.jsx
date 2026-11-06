
import ImagenWiki from '../components/ImagenWiki'

function Inicio() {
  return (
    <div id="inicio" className="pagina-inicio">

      {/* =====================================
          SECCIÓN 1: BIENVENIDA
      ===================================== */}

      <section className="panel-wiki revelar">
        <h1>¡Bienvenido a la Wiki!</h1>

        <div className="bienvenida-mateo">
          <ImagenWiki
            src="/images/mateo-bienvenida.png"
            alt="Doctor Mateo saludando"
            className="mateo-chibi"
          />

          <div className="dialogo-mateo">
            <h3>Dr. Mateo</h3>

            <p>
              ¡Ah, hola! No esperaba visitas...
              Soy el doctor Mateo, y esta es la
              wiki de Esperanza en el Cielo.
              Aquí podrás descubrir nuestra historia,
              conocer a los infectados y explorar
              los lugares que tendremos que atravesar.
              ¡Espero que disfrutes tu visita!
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          SECCIÓN 2: INTRODUCCIÓN
      ===================================== */}

      <section className="panel-wiki revelar">
        <h2>¿Qué es Esperanza en el Cielo?</h2>

        <p>
          Esperanza en el Cielo es un videojuego
          de acción, plataformas y ciencia ficción
          desarrollado en 2D.
        </p>

        <p>
          La aventura sigue al doctor Mateo,
          un científico que debe sobrevivir
          en una Tierra devastada por una
          infección que ha transformado
          a las personas en criaturas peligrosas.
        </p>
      </section>

      {/* =====================================
          SECCIÓN 3: HISTORIA
      ===================================== */}

      <section className="panel-wiki revelar">
        <h2>Historia</h2>

        <div className="bloque-info bloque-info-derecha">

          <div className="texto-info">
            <p>
              En un futuro cercano, la humanidad se enfrenta
              a una catástrofe que cambiará para siempre
              la vida en la Tierra. Una misteriosa infección
              comienza a propagarse rápidamente, transformando
              a las personas en criaturas agresivas y
              peligrosas conocidas como infectados.
            </p>

            <p>
              En cuestión de poco tiempo, las ciudades
              quedan devastadas, las comunicaciones
              comienzan a fallar y los sobrevivientes
              buscan desesperadamente una forma de escapar.
              Ante la imposibilidad de contener la infección,
              se organiza una evacuación masiva hacia
              un nuevo planeta habitable.
            </p>

            <p>
              Mientras tanto, el doctor Mateo, un científico
              universitario que trabajaba con tecnología
              experimental, se encuentra en medio del
              desastre. Su investigación está relacionada
              con un traje de protección capaz de utilizar
              unas misteriosas gemas como fuente de energía.
            </p>

            <p>
              Cuando la situación se sale de control,
              Mateo queda atrapado en la Tierra mientras
              las últimas naves comienzan a partir.
              Sin embargo, recibe un mensaje del Sargento,
              quien le informa que todavía existe una
              oportunidad de evacuación en la torre orbital.
            </p>

            <p>
              A pesar de su personalidad nerviosa y de
              no estar preparado para enfrentarse a tantos
              peligros, Mateo deberá reunir el valor
              suficiente para atravesar un laboratorio,
              una ciudad infestada y la torre orbital.
            </p>

            <p>
              Durante su viaje encontrará infectados,
              obstáculos y tecnología abandonada, hasta
              llegar al reactor de la torre, donde tendrá
              que superar un último enfrentamiento antes
              de alcanzar la nave y descubrir si todavía
              existe esperanza en el cielo.
            </p>
          </div>

          <ImagenWiki
            src="/images/nave-historia.png"
            alt="Nave espacial de evacuación"
            className="imagen-info imagen-nave"
          />

        </div>
      </section>

      {/* =====================================
          SECCIÓN 4: OBJETIVO
      ===================================== */}

      <section className="panel-wiki revelar">
        <h2>Objetivo del videojuego</h2>

        <p>
          El objetivo principal es ayudar a Mateo
          a llegar hasta la última nave de evacuación
          y escapar de la Tierra.
        </p>

        <p>
          Para conseguirlo, el jugador deberá
          superar plataformas y obstáculos,
          enfrentarse a diferentes infectados,
          utilizar objetos de supervivencia
          y avanzar por los distintos niveles.
        </p>
      </section>

      {/* =====================================
          SECCIÓN 5: GÉNERO
      ===================================== */}

      <section className="panel-wiki revelar">
        <h2>Género del videojuego</h2>

        <div className="bloque-info bloque-info-izquierda">

          {/* Zombie grande a la izquierda */}
          <ImagenWiki
            src="/images/zombie-genero.png"
            alt="Zombie chibi del videojuego"
            className="imagen-info imagen-zombie"
          />

          {/* Texto a la derecha */}
          <div className="texto-info">
            <div className="etiquetas-genero">
              <span>Acción</span>
              <span>Plataformas 2D</span>
              <span>Ciencia ficción</span>
              <span>Supervivencia</span>
            </div>

            <p>
              Esperanza en el Cielo combina
              desplazamiento lateral,
              combate contra enemigos,
              exploración de escenarios
              y diferentes desafíos que
              aumentan progresivamente
              su dificultad.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Inicio
