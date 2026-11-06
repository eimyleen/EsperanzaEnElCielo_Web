
/* ========================================
   NIVELES - ESPERANZA EN EL CIELO
======================================== */

import ImagenWiki from '../components/ImagenWiki'

const niveles = [
  /* =====================================
     NIVEL 1 - LABORATORIO
  ===================================== */

  {
    id: 'laboratorio',
    numero: '01',
    nombre: 'Laboratorio',
    tipo: 'Nivel tutorial',
    color: '#39d9a9',

    descripcion:
      'La aventura comienza en el laboratorio donde el doctor Mateo trabajaba como científico. Este lugar está equipado con maquinaria experimental, instalaciones de investigación y diferentes áreas diseñadas para probar nuevas tecnologías.',

    historia:
      'Después de que la infección comienza a propagarse, Mateo debe abandonar el laboratorio para buscar una forma de escapar de la Tierra. Antes de continuar su viaje, tendrá la oportunidad de familiarizarse con su traje tecnológico y aprender las mecánicas básicas.',

    objetivo:
      'Aprender a desplazarse, saltar, utilizar la pistola de pulso e interactuar con los elementos del escenario para encontrar la salida del laboratorio.',

    elementos: [
      'Maniquíes de entrenamiento',
      'Plataformas de práctica',
      'Instalaciones científicas',
      'Puertas e interacciones'
    ],

    enemigos:
      'No aparecen infectados. Los maniquíes permiten practicar el combate.',

    imagen: '/images/nivel-laboratorio.png'
  },

  /* =====================================
     NIVEL 2 - CIUDAD INFECTADA
  ===================================== */

  {
    id: 'ciudad',
    numero: '02',
    nombre: 'Ciudad infectada',
    tipo: 'Nivel urbano',
    color: '#bf7bff',

    descripcion:
      'Mateo abandona la seguridad del laboratorio y llega a una ciudad que ha sido devastada por la infección. Los edificios se encuentran dañados, las calles están llenas de escombros y gran parte de la población se ha convertido en infectados.',

    historia:
      'Mientras la humanidad continúa evacuando el planeta, Mateo debe atravesar las ruinas de la ciudad. Los caminos están bloqueados y las criaturas infectadas representan una amenaza constante durante el recorrido.',

    objetivo:
      'Superar los obstáculos urbanos, evitar los ataques de los infectados y encontrar el camino que conduce hacia la torre orbital.',

    elementos: [
      'Edificios destruidos',
      'Plataformas y obstáculos urbanos',
      'Infectados comunes',
      'Infectados rastreros'
    ],

    enemigos:
      'Infectado común e infectado rastrero.',

    imagen: '/images/nivel-ciudad.png'
  },

  /* =====================================
     NIVEL 3 - TORRE ORBITAL
  ===================================== */

  {
    id: 'torre',
    numero: '03',
    nombre: 'Torre orbital',
    tipo: 'Nivel tecnológico',
    color: '#66e6ba',

    descripcion:
      'La torre orbital es una enorme instalación tecnológica que conecta las operaciones terrestres con la evacuación espacial. Sus instalaciones contienen maquinaria avanzada, sistemas automatizados y mecanismos de seguridad.',

    historia:
      'Mateo finalmente alcanza la torre orbital, donde se encuentra su última posibilidad de escapar. Sin embargo, el recorrido se vuelve más peligroso debido a los sistemas de seguridad y a los infectados que han invadido las instalaciones.',

    objetivo:
      'Atravesar la torre, utilizar interruptores, superar los sistemas de seguridad y alcanzar las instalaciones del reactor.',

    elementos: [
      'Tecnología avanzada',
      'Emisores de láser',
      'Interruptores y puertas',
      'Plataformas tecnológicas',
      'Vistas de la Tierra'
    ],

    enemigos:
      'Infectados comunes, rastreros y grandes.',

    imagen: '/images/nivel-torre.png'
  },

  /* =====================================
     NIVEL FINAL - REACTOR
  ===================================== */

  {
    id: 'reactor',
    numero: '04',
    nombre: 'Reactor',
    tipo: 'Combate final',
    color: '#ff637c',

    descripcion:
      'En el interior de la torre orbital se encuentra una enorme sala de reactor, rodeada de maquinaria industrial y sistemas tecnológicos. La iluminación rojiza y las instalaciones dañadas crean un ambiente peligroso.',

    historia:
      'Cuando Mateo está cerca de completar su misión, aparece El Recolector, un gigantesco infectado protegido por una armadura improvisada de piezas metálicas. Para continuar hacia la evacuación, Mateo deberá enfrentar a esta criatura.',

    objetivo:
      'Sobrevivir al enfrentamiento contra El Recolector y superar el último obstáculo antes de llegar a la nave de evacuación.',

    elementos: [
      'Reactor tecnológico',
      'Maquinaria industrial',
      'Plataforma de combate',
      'El Recolector'
    ],

    enemigos:
      'El Recolector, jefe final del videojuego.',

    imagen: '/images/nivel-reactor.png'
  }
]

/* ========================================
   COMPONENTE DE FICHA DE NIVEL
======================================== */

function FichaNivel({ nivel, indice }) {
  const imagenDerecha = indice % 2 !== 0

  return (
    <article
      id={nivel.id}
      className="panel-wiki ficha-nivel revelar"
      style={{ '--nivel-color': nivel.color }}
    >

      {/* ENCABEZADO */}
      <div className="nivel-encabezado">
        <span className="nivel-numero">
          NIVEL {nivel.numero}
        </span>

        <div>
          <span className="nivel-tipo">
            {nivel.tipo}
          </span>

          <h2>{nivel.nombre}</h2>
        </div>
      </div>

      {/* IMAGEN Y DESCRIPCIÓN */}
      <div
        className={`nivel-cuerpo ${
          imagenDerecha ? 'nivel-invertido' : ''
        }`}
      >

        {/* IMAGEN DEL NIVEL */}
        <div className="nivel-imagen">
          <ImagenWiki
            src={nivel.imagen}
            alt={`Escenario de ${nivel.nombre}`}
            loading="lazy"
          />
        </div>

        {/* INFORMACIÓN DEL NIVEL */}
        <div className="nivel-informacion">
          <p>{nivel.descripcion}</p>
          <p>{nivel.historia}</p>
        </div>

      </div>

      {/* OBJETIVO */}
      <div className="nivel-apartado">
        <h3>Objetivo del nivel</h3>
        <p>{nivel.objetivo}</p>
      </div>

      {/* ELEMENTOS DEL ESCENARIO */}
      <div className="nivel-apartado">
        <h3>Elementos del escenario</h3>

        <ul className="nivel-elementos">
          {nivel.elementos.map((elemento) => (
            <li key={elemento}>
              {elemento}
            </li>
          ))}
        </ul>
      </div>

      {/* ENEMIGOS */}
      <div className="nivel-apartado">
        <h3>Enemigos</h3>
        <p>{nivel.enemigos}</p>
      </div>

    </article>
  )
}

/* ========================================
   PÁGINA DE NIVELES
======================================== */

function Niveles() {
  return (
    <div className="pagina-niveles">

      {/* INTRODUCCIÓN */}
      <section className="panel-wiki revelar">
        <h1>Niveles</h1>

        <p>
          Acompaña al doctor Mateo en su recorrido
          a través de los distintos escenarios de
          Esperanza en el Cielo.
        </p>

        <p>
          Cada nivel presenta nuevos desafíos,
          enemigos y obstáculos que deberá superar
          para alcanzar la última nave de evacuación.
        </p>
      </section>

      {/* LOS CUATRO NIVELES */}
      {niveles.map((nivel, indice) => (
        <FichaNivel
          key={nivel.id}
          nivel={nivel}
          indice={indice}
        />
      ))}

    </div>
  )
}

export default Niveles
