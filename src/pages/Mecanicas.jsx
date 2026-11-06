/* ========================================
   MECÁNICAS - ESPERANZA EN EL CIELO
======================================== */

import ImagenWiki from '../components/ImagenWiki'

/* ========================================
   CONTROLES PROVISIONALES
======================================== */

const controles = [
  {
    teclas: ['A', 'D'],
    accion: 'Caminar',
    descripcion:
      'Permite mover a Mateo hacia la izquierda o hacia la derecha.'
  },
  {
    teclas: ['ESPACIO'],
    accion: 'Saltar',
    descripcion:
      'Permite saltar para alcanzar plataformas y superar obstáculos.'
  },
  {
    teclas: ['S'],
    accion: 'Agacharse',
    descripcion:
      'Permite que Mateo se agache para adoptar una posición más baja.'
  },
  {
    teclas: ['CLIC IZQ.'],
    accion: 'Disparar',
    descripcion:
      'Utiliza la pistola de pulso para atacar a los enemigos.'
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
      'Mateo puede caminar hacia ambos lados, saltar y agacharse. Estas acciones le permiten recorrer los escenarios, alcanzar plataformas y superar distintos obstáculos.'
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
    poder: 'Saltos impulsados',
    descripcion:
      'Permite realizar saltos más altos para alcanzar lugares elevados.',
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

      {/* TECLAS */}
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
          MATEO CHIBI CON INTERROGACIÓN
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
              Aprende a caminar, saltar y agacharte
              durante el tutorial del laboratorio.
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
            loading="lazy"
          />

        </div>
      </section>

      {/* =====================================
          CONTROLES
      ===================================== */}

      <section className="panel-wiki revelar">
        <h2>Controles</h2>

        <p>
          Estos son los controles propuestos para
          realizar las acciones principales de Mateo.
        </p>

        <p className="mecanicas-aviso">
          Controles provisionales. La asignación
          definitiva de las teclas puede cambiar
          durante el desarrollo del videojuego.
        </p>

        <div className="mecanicas-tabla-controles">

          {controles.map((control) => (
            <FichaControl
              key={control.accion}
              control={control}
            />
          ))}

        </div>
      </section>

      {/* =====================================
          GUÍA VISUAL DE CONTROLES
      ===================================== */}

      <section className="panel-wiki revelar">
        <h2>Guía visual de controles</h2>

        <p>
          Esta ilustración muestra las teclas
          propuestas para moverte, saltar,
          agacharte y disparar.
        </p>

        <div className="mecanicas-imagen-controles">
          <ImagenWiki
            src="/images/controles-mecanicas.png"
            alt="Guía visual de los controles provisionales de Esperanza en el Cielo"
            loading="lazy"
          />
        </div>

        <p className="mecanicas-pie-imagen">
          Esquema provisional de controles para PC.
        </p>

      </section>

      {/* =====================================
          MECÁNICAS DE JUEGO
          MATEO CHIBI DISPARANDO
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
            loading="lazy"
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
          Las teclas para activar estas habilidades
          se definirán durante el desarrollo del juego.
        </p>

      </section>

    </div>
  )
}

export default Mecanicas