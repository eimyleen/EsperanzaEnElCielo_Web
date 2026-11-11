
import { useState } from 'react'

import {
  Keyboard,
  Gamepad2,
  MoveHorizontal,
  ArrowUp,
  Crosshair,
  Gem,
  ChevronsUp
} from 'lucide-react'

import ImagenWiki from '../components/ImagenWiki'

/* ========================================
   MECÁNICAS - ESPERANZA EN EL CIELO
======================================== */

/* ========================================
   CONTROLES DE TECLADO
======================================== */

const controlesTeclado = [
  {
    teclas: ['W', 'A', 'S', 'D'],
    accion: 'Mover al personaje',
    descripcion:
      'Permite controlar los movimientos de Mateo por los escenarios.'
  },
  {
    teclas: ['ESPACIO'],
    accion: 'Saltar',
    descripcion:
      'Permite saltar para alcanzar plataformas y superar obstáculos.'
  },
  {
    teclas: ['J'],
    accion: 'Disparar',
    descripcion:
      'Utiliza la pistola de pulso para atacar a los enemigos.'
  },
  {
    teclas: ['K'],
    accion: 'Activar gema',
    descripcion:
      'Activa la función de la gema roja o azul equipada.'
  },
  {
    teclas: ['ESPACIO'],
    accion: 'Doble salto',
    descripcion:
      'Con la gema verde, presiona nuevamente Espacio mientras Mateo está en el aire.'
  }
]

/* ========================================
   CONTROLES DE MANDO
======================================== */

const controlesMando = [
  {
    teclas: ['D-PAD', 'JOYSTICK'],
    accion: 'Mover al personaje',
    descripcion:
      'Permite controlar los movimientos de Mateo utilizando la cruceta o el joystick.'
  },
  {
    teclas: ['A'],
    accion: 'Saltar',
    descripcion:
      'Permite saltar para alcanzar plataformas y superar obstáculos.'
  },
  {
    teclas: ['RT'],
    accion: 'Disparar',
    descripcion:
      'Utiliza la pistola de pulso para atacar a los enemigos.'
  },
  {
    teclas: ['X'],
    accion: 'Activar gema',
    descripcion:
      'Activa la función de la gema roja o azul equipada.'
  },
  {
    teclas: ['A'],
    accion: 'Doble salto',
    descripcion:
      'Con la gema verde, presiona nuevamente A mientras Mateo está en el aire.'
  }
]

/* ========================================
   MECÁNICAS PRINCIPALES
======================================== */

const mecanicas = [
  {
    numero: '01',
    titulo: 'Movimiento y plataformas',
    descripcion:
      'Mateo puede desplazarse por los escenarios y saltar para alcanzar plataformas. Con la gema verde puede realizar un segundo salto en el aire.'
  },
  {
    numero: '02',
    titulo: 'Combate',
    descripcion:
      'Mateo utiliza una pistola de pulso para disparar a los infectados. El jugador debe atacar desde una distancia adecuada y evitar que los enemigos se acerquen demasiado.'
  },
  {
    numero: '03',
    titulo: 'Daño y salud',
    descripcion:
      'Cuando un enemigo consigue herir a Mateo, su barra de vida disminuye. El jugador debe vigilar su salud para evitar ser derrotado durante la aventura.'
  },
  {
    numero: '04',
    titulo: 'Curación por contacto',
    descripcion:
      'Mateo puede recuperar salud al entrar en contacto con objetos de curación. Las vendas recuperan una cantidad menor de vida, mientras que los botiquines permiten recuperar una cantidad mayor.'
  },
  {
    numero: '05',
    titulo: 'Exploración',
    descripcion:
      'Cada escenario presenta un recorrido diferente. Mateo debe avanzar por el laboratorio, la ciudad infectada, la torre orbital y el reactor, superando los peligros que aparecen en su camino.'
  }
]

/* ========================================
   HABILIDADES DE LAS GEMAS
======================================== */

const habilidades = [
  {
    nombre: 'Gema verde',
    poder: 'Doble salto',
    descripcion:
      'Permite realizar un segundo salto mientras Mateo está en el aire. Se utiliza con Espacio en teclado o A en mando.',
    color: '#65e6aa'
  },
  {
    nombre: 'Gema roja',
    poder: 'Pulso de energía',
    descripcion:
      'Permite emitir un pulso de energía para defenderse y despejar barreras eléctricas.',
    color: '#ff637c'
  },
  {
    nombre: 'Gema azul',
    poder: 'Velocidad y agilidad',
    descripcion:
      'Permite desplazarse más rápido y esquivar ataques enemigos.',
    color: '#65caff'
  }
]

/* ========================================
   COMPONENTE DE CONTROL
======================================== */

function FichaControl({ control }) {
  return (
    <div className="mecanicas-fila-control">

      {/* TECLAS O BOTONES */}

      <div className="mecanicas-teclas">
        {control.teclas.map((tecla) => (
          <kbd
            key={tecla}
            className="mecanicas-tecla"
          >
            {tecla}
          </kbd>
        ))}
      </div>

      {/* DESCRIPCIÓN */}

      <div className="mecanicas-control-texto">
        <h3>{control.accion}</h3>
        <p>{control.descripcion}</p>
      </div>

    </div>
  )
}

/* ========================================
   DATOS DE LA GUÍA VISUAL
======================================== */

const guiaVisual = [
  {
    id: 'mover',
    titulo: 'Mover al personaje',
    descripcion:
      'Controla el desplazamiento de Mateo.',
    icono: MoveHorizontal,
    teclado: ['W', 'A', 'S', 'D'],
    mando: ['D-PAD', 'JOYSTICK']
  },
  {
    id: 'saltar',
    titulo: 'Saltar',
    descripcion:
      'Salta para superar obstáculos y alcanzar plataformas.',
    icono: ArrowUp,
    teclado: ['ESPACIO'],
    mando: ['A']
  },
  {
    id: 'disparar',
    titulo: 'Disparar',
    descripcion:
      'Dispara con la pistola de pulso.',
    icono: Crosshair,
    teclado: ['J'],
    mando: ['RT']
  },
  {
    id: 'gema',
    titulo: 'Activar gema',
    descripcion:
      'Activa la función de la gema roja o azul.',
    icono: Gem,
    teclado: ['K'],
    mando: ['X']
  },
  {
    id: 'doble-salto',
    titulo: 'Doble salto',
    descripcion:
      'Con la gema verde, presiona nuevamente el botón de salto mientras Mateo está en el aire.',
    icono: ChevronsUp,
    teclado: ['ESPACIO'],
    mando: ['A']
  }
]

/* ========================================
   COMPONENTE DE GUÍA VISUAL
======================================== */

function GuiaVisualControles() {
  const [tipoControl, setTipoControl] = useState('teclado')

  return (
    <div className="mecanicas-guia-visual">

      {/* =====================================
          SELECTOR TECLADO / MANDO
      ===================================== */}

      <div className="mecanicas-guia-selector">

        <button
          type="button"
          className={`mecanicas-guia-tab ${
            tipoControl === 'teclado' ? 'activo' : ''
          }`}
          onClick={() => setTipoControl('teclado')}
          aria-pressed={tipoControl === 'teclado'}
        >
          <Keyboard size={20} />
          Teclado
        </button>

        <button
          type="button"
          className={`mecanicas-guia-tab ${
            tipoControl === 'mando' ? 'activo' : ''
          }`}
          onClick={() => setTipoControl('mando')}
          aria-pressed={tipoControl === 'mando'}
        >
          <Gamepad2 size={20} />
          Mando
        </button>

      </div>

      {/* =====================================
          TARJETAS HOLOGRÁFICAS
      ===================================== */}

      <div className="mecanicas-guia-grid">

        {guiaVisual.map((control) => {

          const Icono = control.icono

          return (
            <article
              key={control.id}
              className={`mecanicas-guia-tarjeta ${
                control.id === 'doble-salto'
                  ? 'gema-verde'
                  : ''
              }`}
            >

              {/* TÍTULO E ILUSTRACIÓN */}

              <div className="mecanicas-guia-cabecera">

                <h3>{control.titulo}</h3>

                <div className="mecanicas-guia-ilustracion">
                  <Icono
                    size={38}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

              </div>

              {/* =====================================
                  TECLAS O BOTONES DEL MANDO
              ===================================== */}

              <div className="mecanicas-guia-entrada">

                {/* MOVIMIENTO CON TECLADO */}

                {tipoControl === 'teclado' &&
                control.id === 'mover' ? (

                  <div className="mecanicas-guia-wasd">

                    <kbd>W</kbd>

                    <div>
                      <kbd>A</kbd>
                      <kbd>S</kbd>
                      <kbd>D</kbd>
                    </div>

                  </div>

                ) : tipoControl === 'mando' &&
                control.id === 'mover' ? (

                  /* MOVIMIENTO CON MANDO */

                  <div className="mecanicas-guia-movimiento-mando">

                    <div
                      className="mecanicas-guia-dpad"
                      aria-label="Cruceta direccional"
                      role="img"
                    >
                      <span>▲</span>
                      <span>◀</span>
                      <span>▶</span>
                      <span>▼</span>
                    </div>

                    <span className="mecanicas-guia-o">
                      o
                    </span>

                    <div
                      className="mecanicas-guia-joystick"
                      aria-label="Joystick"
                      role="img"
                    >
                      <span />
                    </div>

                  </div>

                ) : (

                  /* DEMÁS TECLAS Y BOTONES */

                  <div className="mecanicas-guia-botones">

                    {control[tipoControl].map((boton) => (
                      <kbd key={boton}>
                        {boton}
                      </kbd>
                    ))}

                  </div>

                )}

              </div>

              {/* DESCRIPCIÓN */}

              <p>{control.descripcion}</p>

              {/* INDICADOR DE GEMA VERDE */}

              {control.id === 'doble-salto' && (

                <div className="mecanicas-guia-gema">
                  <Gem
                    size={17}
                    aria-hidden="true"
                  />
                  Gema verde
                </div>

              )}

            </article>
          )
        })}

      </div>

    </div>
  )
}

/* ========================================
   PÁGINA DE MECÁNICAS
======================================== */

function Mecanicas() {
  return (
    <div className="pagina-mecanicas">

      {/* =====================================
          INTRODUCCIÓN
      ===================================== */}

      <section className="panel-wiki revelar">

        <h1>Mecánicas</h1>

        <p>
          Aprende a jugar Esperanza en el Cielo y
          descubre las acciones que puede realizar
          el doctor Mateo durante su aventura.
        </p>

        <p>
          En esta sección encontrarás las instrucciones,
          los controles y las principales mecánicas
          de movimiento, combate, salud y supervivencia.
        </p>

      </section>

      {/* =====================================
          CÓMO JUGAR
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2>¿Cómo jugar?</h2>

        <p>
          Tu objetivo es ayudar al doctor Mateo a
          atravesar diferentes escenarios y llegar
          hasta la última nave de evacuación.
        </p>

        <div className="mecanicas-con-mateo">

          {/* INSTRUCCIONES */}

          <ol className="mecanicas-pasos">

            <li>
              Aprende a moverte y saltar durante
              el tutorial del laboratorio.
            </li>

            <li>
              Practica el uso de la pistola de pulso
              con los maniquíes de entrenamiento.
            </li>

            <li>
              Avanza por los escenarios, utilizando
              las plataformas y evitando obstáculos.
            </li>

            <li>
              Defiéndete de los infectados y evita
              recibir ataques para conservar tu salud.
            </li>

            <li>
              Recoge objetos de curación para recuperar
              vida cuando sea necesario.
            </li>

            <li>
              Aprovecha las gemas de energía y llega
              hasta el enfrentamiento final contra
              El Recolector.
            </li>

          </ol>

          {/* MATEO PENSATIVO */}

          <ImagenWiki
            src="/images/mateo-pregunta.png"
            alt="Doctor Mateo chibi con un signo de interrogación"
            className="mecanicas-mateo-chibi"
          />

        </div>

      </section>

      {/* =====================================
          CONTROLES DE TECLADO Y MANDO
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2>Controles</h2>

        <p>
          Estos son los controles actuales para
          realizar las acciones principales de Mateo,
          tanto con teclado como con mando.
        </p>

        <p className="mecanicas-aviso">
          Los controles pueden recibir ajustes
          durante el desarrollo del videojuego.
        </p>

        {/* TECLADO */}

        <div className="mecanicas-grupo-controles">

          <h3>Teclado</h3>

          <div className="mecanicas-tabla-controles">

            {controlesTeclado.map((control) => (
              <FichaControl
                key={`teclado-${control.accion}`}
                control={control}
              />
            ))}

          </div>

        </div>

        {/* MANDO */}

        <div className="mecanicas-grupo-controles">

          <h3>Mando</h3>

          <div className="mecanicas-tabla-controles">

            {controlesMando.map((control) => (
              <FichaControl
                key={`mando-${control.accion}`}
                control={control}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          GUÍA VISUAL DE CONTROLES
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2>Guía visual de controles</h2>

        <p>
          Selecciona el tipo de control que utilizarás
          para descubrir cómo mover a Mateo, saltar,
          disparar y activar las habilidades de las gemas.
        </p>

        <GuiaVisualControles />

      </section>

      {/* =====================================
          MECÁNICAS DE JUEGO
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2>Mecánicas de juego</h2>

        <p>
          Estas son las principales acciones y
          sistemas que forman parte de la aventura.
        </p>

        <div className="mecanicas-con-mateo">

          {/* TARJETAS DE MECÁNICAS */}

          <div className="mecanicas-grid">

            {mecanicas.map((mecanica) => (

              <article
                key={mecanica.numero}
                className="mecanicas-tarjeta"
              >

                <span className="mecanicas-numero">
                  {mecanica.numero}
                </span>

                <h3>{mecanica.titulo}</h3>

                <p>{mecanica.descripcion}</p>

              </article>

            ))}

          </div>

          {/* MATEO DISPARANDO */}

          <ImagenWiki
            src="/images/mateo-disparando.png"
            alt="Doctor Mateo chibi disparando su pistola de pulso"
            className="mecanicas-mateo-chibi"
          />

        </div>

      </section>

      {/* =====================================
          CURACIÓN Y DAÑO
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2>Curación y daño</h2>

        <p>
          Durante la aventura, Mateo deberá
          cuidar su salud mientras combate
          a las criaturas infectadas.
        </p>

        <div className="mecanicas-sistemas">

          {/* CURACIÓN */}

          <div className="mecanicas-sistema curacion">

            <h3>Recuperar salud</h3>

            <p>
              Para curarte, debes acercarte y tocar
              una venda o un botiquín dentro del
              escenario.
            </p>

            <p>
              La recuperación de salud ocurre
              automáticamente por contacto,
              sin necesidad de presionar una tecla.
            </p>

          </div>

          {/* DAÑO */}

          <div className="mecanicas-sistema dano">

            <h3>Recibir daño</h3>

            <p>
              Cuando un enemigo acierta un ataque
              contra Mateo, su salud disminuye.
            </p>

            <p>
              Debes evitar los golpes y recuperar
              vida cuando encuentres suministros
              médicos durante el recorrido.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          HABILIDADES DEL TRAJE
      ===================================== */}

      <section className="panel-wiki revelar">

        <h2>Habilidades del traje</h2>

        <p>
          El traje experimental de Mateo puede
          aprovechar la energía de diferentes
          gemas para obtener capacidades especiales.
        </p>

        <div className="mecanicas-habilidades">

          {habilidades.map((habilidad) => (

            <div
              key={habilidad.nombre}
              className="mecanicas-habilidad"
              style={{
                '--habilidad-color': habilidad.color
              }}
            >

              <h3>{habilidad.nombre}</h3>

              <strong>{habilidad.poder}</strong>

              <p>{habilidad.descripcion}</p>

            </div>

          ))}

        </div>

        <p className="mecanicas-nota">
          La gema verde permite realizar un segundo
          salto mientras Mateo está en el aire.
          Las gemas roja y azul se activan con
          K en teclado o X en mando.
        </p>

      </section>

    </div>
  )
}

export default Mecanicas
