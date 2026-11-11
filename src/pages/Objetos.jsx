
import ImagenWiki from '../components/ImagenWiki'

/* ========================================
   OBJETOS - ESPERANZA EN EL CIELO
======================================== */

/* ========================================
   INFORMACIÓN DE LOS OBJETOS
======================================== */

const objetos = [

  /* =====================================
     PISTOLA DE PULSO
  ===================================== */

  {
    id: 'pistola-pulso',
    nombre: 'Pistola de pulso',
    categoria: 'Arma principal',
    grupo: 'equipamiento',
    color: '#65caff',
    imagen: '/images/pistola-pulso.png',

    descripcion:
      'La pistola de pulso es el arma principal que utiliza el doctor Mateo para defenderse de los infectados. Se trata de un dispositivo de ciencia ficción diseñado para emitir disparos de energía. Su apariencia combina componentes blancos, naranjas y grises con un emisor de energía azul.',

    funcionamiento:
      'Permite atacar a los enemigos a distancia y practicar las mecánicas de combate durante el tutorial del laboratorio.',

    importancia:
      'Es una herramienta fundamental para la supervivencia de Mateo. Lo acompaña durante su aventura y le permite abrirse camino entre las criaturas infectadas.',

    etiquetas: [
      'Arma',
      'Tecnología',
      'Ataque a distancia'
    ]
  },

  /* =====================================
     GEMA VERDE
  ===================================== */

  {
    id: 'gema-verde',
    nombre: 'Gema verde',
    categoria: 'Gema de energía',
    grupo: 'gemas',
    color: '#65e6aa',
    imagen: '/images/gema-verde.png',

    descripcion:
      'La gema verde es un cristal energético que puede integrarse al traje experimental de Mateo. Su energía permite mejorar las capacidades de movimiento del protagonista.',

    funcionamiento:
      'Permite realizar un doble salto mientras Mateo se encuentra en el aire. Para utilizarlo, se debe presionar Espacio nuevamente en teclado o el botón A en mando.',

    importancia:
      'Permite alcanzar plataformas elevadas, superar obstáculos y acceder a nuevas zonas que no podrían explorarse utilizando únicamente el salto normal.',

    etiquetas: [
      'Gema',
      'Doble salto',
      'Movimiento'
    ]
  },

  /* =====================================
     GEMA ROJA
  ===================================== */

  {
    id: 'gema-roja',
    nombre: 'Gema roja',
    categoria: 'Gema de energía',
    grupo: 'gemas',
    color: '#ff637c',
    imagen: '/images/gema-roja.png',

    descripcion:
      'La gema roja contiene una gran cantidad de energía que puede aprovecharse mediante el traje experimental de Mateo. Está relacionada con el uso de pulsos energéticos.',

    funcionamiento:
      'Permite emitir un pulso de energía para defenderse y despejar determinadas barreras eléctricas. Su habilidad se activa con K en teclado o X en mando.',

    importancia:
      'Proporciona una habilidad adicional para enfrentar amenazas y superar obstáculos tecnológicos que aparecen durante la aventura.',

    etiquetas: [
      'Gema',
      'Energía',
      'Pulso'
    ]
  },

  /* =====================================
     GEMA AZUL
  ===================================== */

  {
    id: 'gema-azul',
    nombre: 'Gema azul',
    categoria: 'Gema de energía',
    grupo: 'gemas',
    color: '#65caff',
    imagen: '/images/gema-azul.png',

    descripcion:
      'La gema azul es un cristal especial que permite aprovechar la energía del traje experimental para mejorar la movilidad y agilidad de Mateo.',

    funcionamiento:
      'Proporciona mayor velocidad y agilidad para desplazarse por los escenarios y evitar amenazas. Su función se activa con K en teclado o X en mando.',

    importancia:
      'Facilita el desplazamiento por zonas peligrosas y permite reaccionar con mayor rapidez durante los enfrentamientos con los infectados.',

    etiquetas: [
      'Gema',
      'Velocidad',
      'Agilidad'
    ]
  },

  /* =====================================
     VENDA
  ===================================== */

  {
    id: 'venda',
    nombre: 'Venda',
    categoria: 'Curación',
    grupo: 'curacion',
    color: '#65e6aa',
    imagen: '/images/venda.png',

    descripcion:
      'La venda es un suministro médico básico que puede encontrarse en distintos lugares del escenario. Permite tratar heridas leves y recuperar parte de la salud de Mateo.',

    funcionamiento:
      'Restaura una pequeña cantidad de salud. Su efecto se aplica automáticamente cuando Mateo entra en contacto con el objeto.',

    importancia:
      'Ayuda a recuperar parte de la salud después de recibir ataques. Es especialmente útil durante la exploración y los enfrentamientos menores.',

    etiquetas: [
      'Salud',
      'Curación menor',
      'Suministro médico'
    ]
  },

  /* =====================================
     BOTIQUÍN
  ===================================== */

  {
    id: 'botiquin',
    nombre: 'Botiquín',
    categoria: 'Curación',
    grupo: 'curacion',
    color: '#ff637c',
    imagen: '/images/botiquin.png',

    descripcion:
      'El botiquín es un equipo de primeros auxilios que contiene suministros médicos destinados a tratar heridas y recuperar la salud de Mateo.',

    funcionamiento:
      'Permite recuperar una cantidad mayor de salud que una venda. Se recoge por contacto y su efecto se aplica automáticamente.',

    importancia:
      'Resulta especialmente importante después de combates difíciles o cuando Mateo ha perdido una gran cantidad de salud.',

    etiquetas: [
      'Salud',
      'Curación mayor',
      'Primeros auxilios'
    ]
  },

  /* =====================================
     MICROCHIP COLECCIONABLE
  ===================================== */

  {
    id: 'microchip',
    nombre: 'Microchip',
    categoria: 'Coleccionable',
    grupo: 'coleccionables',
    color: '#65e6aa',
    imagen: '/images/microchip.png',

    descripcion:
      'Un pequeño circuito electrónico de color verde que Mateo puede encontrar durante su aventura. Su apariencia tecnológica destaca entre los objetos distribuidos por los escenarios.',

    funcionamiento:
      'Es un objeto coleccionable que puede recogerse durante la exploración de los niveles.',

    importancia:
      'Forma parte de los elementos coleccionables del videojuego e incentiva la exploración de los diferentes escenarios.',

    etiquetas: [
      'Coleccionable',
      'Microchip',
      'Exploración'
    ]
  }

]

/* ========================================
   CATEGORÍAS DE OBJETOS
======================================== */

const secciones = [
  {
    id: 'equipamiento',
    titulo: 'Equipamiento',
    descripcion:
      'Herramientas y dispositivos que Mateo utiliza para defenderse y sobrevivir durante su aventura.'
  },
  {
    id: 'gemas',
    titulo: 'Gemas de energía',
    descripcion:
      'Cristales especiales que pueden integrarse al traje experimental de Mateo para otorgarle diferentes habilidades.'
  },
  {
    id: 'curacion',
    titulo: 'Objetos de curación',
    descripcion:
      'Suministros médicos que permiten recuperar la salud de Mateo después de recibir ataques.'
  },
  {
    id: 'coleccionables',
    titulo: 'Objetos coleccionables',
    descripcion:
      'Objetos especiales distribuidos por los escenarios que Mateo puede encontrar y recoger mientras explora los niveles.'
  }
]

/* ========================================
   COMPONENTE - FICHA DE OBJETO
======================================== */

function FichaObjeto({ objeto, invertido = false }) {
  return (
    <article
      id={objeto.id}
      className={`panel-wiki revelar objeto-restaurado ${
        invertido ? 'invertido' : ''
      }`}
      style={{
        '--objeto-color': objeto.color
      }}
    >

      {/* =====================================
          ENCABEZADO DEL OBJETO
      ===================================== */}

      <div className="objeto-restaurado-encabezado">

        <span className="objeto-restaurado-categoria">
          {objeto.categoria}
        </span>

        <h3>{objeto.nombre}</h3>

      </div>

      {/* =====================================
          IMAGEN Y DESCRIPCIÓN
      ===================================== */}

      <div className="objeto-restaurado-cuerpo">

        {/* IMAGEN DEL OBJETO */}

        <div className="objeto-restaurado-imagen">

          <ImagenWiki
            src={objeto.imagen}
            alt={`Imagen de ${objeto.nombre} de Esperanza en el Cielo`}
            className="objeto-restaurado-img"
          />

        </div>

        {/* INFORMACIÓN DEL OBJETO */}

        <div className="objeto-restaurado-informacion">

          {/* DESCRIPCIÓN */}

          <p className="objeto-restaurado-descripcion">
            {objeto.descripcion}
          </p>

          {/* FUNCIONAMIENTO */}

          <div className="objeto-restaurado-funcionamiento">

            <h4>Funcionamiento</h4>

            <p>
              {objeto.funcionamiento}
            </p>

          </div>

        </div>

      </div>

      {/* =====================================
          IMPORTANCIA EN EL JUEGO
      ===================================== */}

      <div className="objeto-restaurado-importancia">

        <h4>Importancia en el juego</h4>

        <p>
          {objeto.importancia}
        </p>

      </div>

      {/* =====================================
          ETIQUETAS INFERIORES
      ===================================== */}

      <div className="objeto-restaurado-etiquetas">

        {objeto.etiquetas.map((etiqueta) => (

          <span
            key={etiqueta}
            className="objeto-restaurado-etiqueta"
          >
            {etiqueta}
          </span>

        ))}

      </div>

    </article>
  )
}

/* ========================================
   PÁGINA PRINCIPAL - OBJETOS
======================================== */

function Objetos() {
  return (
    <div className="pagina-objetos">

      {/* =====================================
          INTRODUCCIÓN
      ===================================== */}

      <section className="panel-wiki revelar">

        <h1>Objetos</h1>

        <p>
          Durante su aventura, el doctor Mateo
          encontrará diferentes objetos que le
          ayudarán a sobrevivir y avanzar por
          los escenarios de Esperanza en el Cielo.
        </p>

        <p>
          Conoce las armas, gemas de energía,
          suministros médicos y objetos coleccionables
          que forman parte del videojuego.
        </p>

      </section>

      {/* =====================================
          SECCIONES DE OBJETOS
      ===================================== */}

      {secciones.map((seccion) => {

        const objetosSeccion = objetos.filter(
          (objeto) => objeto.grupo === seccion.id
        )

        return (
          <section
            key={seccion.id}
            className="objetos-seccion"
            aria-labelledby={`titulo-${seccion.id}`}
          >

            {/* ENCABEZADO DE CATEGORÍA */}

            <div className="panel-wiki revelar">

              <h2 id={`titulo-${seccion.id}`}>
                {seccion.titulo}
              </h2>

              <p>
                {seccion.descripcion}
              </p>

            </div>

            {/* FICHAS DE LA CATEGORÍA */}

            {objetosSeccion.map((objeto) => {

              // Alternar imágenes a izquierda y derecha
              // en toda la página, sin reiniciar
              // la secuencia en cada categoría.

              const indiceGlobal = objetos.findIndex(
                (item) => item.id === objeto.id
              )

              const invertido = indiceGlobal % 2 !== 0

              return (
                <FichaObjeto
                  key={objeto.id}
                  objeto={objeto}
                  invertido={invertido}
                />
              )
            })}

          </section>
        )
      })}

    </div>
  )
}

export default Objetos
