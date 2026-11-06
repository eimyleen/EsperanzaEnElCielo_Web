
/* ========================================
   OBJETOS - ESPERANZA EN EL CIELO
======================================== */

const objetos = [
  /* =====================================
     EQUIPAMIENTO
  ===================================== */

  {
    id: 'pistola-pulso',
    nombre: 'Pistola de pulso',
    categoria: 'Arma principal',
    grupo: 'equipamiento',
    color: '#86dfff',

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
    ],

    imagen: '/images/pistola-pulso.png',
    invertido: false
  },

  /* =====================================
     GEMAS DE ENERGÍA
  ===================================== */

  {
    id: 'gema-verde',
    nombre: 'Gema verde',
    categoria: 'Objeto especial',
    grupo: 'energia',
    color: '#65e6aa',

    descripcion:
      'La gema verde es un cristal especial de color verde brillante. Su estructura en forma de diamante contiene energía que puede ser aprovechada por el traje experimental desarrollado por el doctor Mateo.',

    funcionamiento:
      'Al absorber la energía de la gema verde, el traje de Mateo desbloquea la capacidad de realizar saltos impulsados. Esto le permite alcanzar lugares más altos y superar obstáculos que normalmente no podría atravesar.',

    importancia:
      'Esta habilidad es especialmente útil para atravesar zonas con escombros, superficies peligrosas y obstáculos durante la exploración.',

    etiquetas: [
      'Gema verde',
      'Saltos impulsados',
      'Energía',
      'Coleccionable'
    ],

    imagen: '/images/gema-verde.png',
    invertido: true
  },

  {
    id: 'gema-roja',
    nombre: 'Gema roja',
    categoria: 'Objeto especial',
    grupo: 'energia',
    color: '#ff637c',

    descripcion:
      'La gema roja es un cristal energético de color rojo intenso. Comparte la misma forma de diamante que las otras gemas, pero se distingue por su coloración y brillo.',

    funcionamiento:
      'Al absorber la gema roja, el traje de Mateo obtiene la capacidad de emitir un poderoso pulso de energía. Este puede utilizarse para defenderse de ataques directos y despejar barreras eléctricas.',

    importancia:
      'Permite a Mateo superar sistemas de seguridad y protegerse durante situaciones peligrosas, especialmente en las instalaciones de la torre orbital.',

    etiquetas: [
      'Gema roja',
      'Pulso de energía',
      'Defensa',
      'Coleccionable'
    ],

    imagen: '/images/gema-roja.png',
    invertido: false
  },

  {
    id: 'gema-azul',
    nombre: 'Gema azul',
    categoria: 'Objeto especial',
    grupo: 'energia',
    color: '#65caff',

    descripcion:
      'La gema azul es un cristal energético de color azul brillante. Conserva la misma estructura de diamante que las otras gemas y presenta diferentes tonos azules en sus facetas.',

    funcionamiento:
      'Al absorber la energía de la gema azul, el traje de Mateo aumenta considerablemente su velocidad y agilidad, permitiéndole desplazarse más rápido y esquivar ataques enemigos.',

    importancia:
      'Esta habilidad resulta fundamental durante la evacuación final, cuando Mateo debe superar enemigos y activar el mecanismo de limpieza de la rampa para alcanzar la nave.',

    etiquetas: [
      'Gema azul',
      'Velocidad',
      'Agilidad',
      'Coleccionable'
    ],

    imagen: '/images/gema-azul.png',
    invertido: true
  },

  /* =====================================
     OBJETOS DE CURACIÓN
  ===================================== */

  {
    id: 'venda',
    nombre: 'Venda',
    categoria: 'Curación menor',
    grupo: 'curacion',
    color: '#7ce5bd',

    descripcion:
      'La venda es un objeto de primeros auxilios que Mateo puede encontrar durante su recorrido. Consiste en un rollo de material médico blanco con una cruz roja que identifica su función curativa.',

    funcionamiento:
      'Permite recuperar una cantidad pequeña de salud cuando el personaje ha recibido daño. Puede utilizarse desde el inventario del jugador.',

    importancia:
      'Es un recurso útil para recuperarse de heridas menores y continuar explorando sin gastar objetos de curación más potentes.',

    etiquetas: [
      'Consumible',
      'Primeros auxilios',
      'Curación menor'
    ],

    imagen: '/images/venda.png',
    invertido: false
  },

  {
    id: 'botiquin',
    nombre: 'Botiquín',
    categoria: 'Curación mayor',
    grupo: 'curacion',
    color: '#ff8496',

    descripcion:
      'El botiquín es un objeto médico que contiene suministros de primeros auxilios. Tiene forma de maletín, con una estructura azul y blanca, un asa roja y una cruz roja en la parte frontal.',

    funcionamiento:
      'Al utilizarlo, el jugador puede recuperar una cantidad de salud mayor que la proporcionada por una venda.',

    importancia:
      'Es uno de los recursos de supervivencia más importantes, especialmente durante los enfrentamientos difíciles y los recorridos con múltiples enemigos.',

    etiquetas: [
      'Consumible',
      'Primeros auxilios',
      'Curación mayor'
    ],

    imagen: '/images/botiquin.png',
    invertido: true
  }
]

/* ========================================
   CATEGORÍAS DE OBJETOS
======================================== */

const grupos = [
  {
    id: 'equipamiento',
    titulo: 'Equipamiento'
  },
  {
    id: 'energia',
    titulo: 'Gemas de energía'
  },
  {
    id: 'curacion',
    titulo: 'Objetos de curación'
  }
]

/* ========================================
   COMPONENTE DE FICHA
======================================== */

function FichaObjeto({ objeto }) {
  return (
    <article
      id={objeto.id}
      className="panel-wiki ficha-objeto revelar"
      style={{ '--objeto-color': objeto.color }}
    >

      {/* ENCABEZADO */}
      <div className="objeto-encabezado">
        <span className="objeto-categoria">
          {objeto.categoria}
        </span>

        <h2>{objeto.nombre}</h2>
      </div>

      {/* IMAGEN Y DESCRIPCIÓN */}
      <div
        className={`objeto-cuerpo ${
          objeto.invertido ? 'objeto-invertido' : ''
        }`}
      >

        {/* ILUSTRACIÓN */}
        <div className="objeto-imagen">
          <img
            src={objeto.imagen}
            alt={`Ilustración de ${objeto.nombre}`}
            loading="lazy"
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="objeto-informacion">
          <p>{objeto.descripcion}</p>

          <h3>
            {objeto.grupo === 'energia'
              ? 'Habilidad de la gema'
              : 'Funcionamiento'}
          </h3>

          <p>{objeto.funcionamiento}</p>
        </div>
      </div>

      {/* IMPORTANCIA */}
      <div className="objeto-apartado">
        <h3>Importancia en el juego</h3>
        <p>{objeto.importancia}</p>
      </div>

      {/* ETIQUETAS */}
      <div className="etiquetas-objeto">
        {objeto.etiquetas.map((etiqueta) => (
          <span key={etiqueta}>
            {etiqueta}
          </span>
        ))}
      </div>

    </article>
  )
}

/* ========================================
   PÁGINA DE OBJETOS
======================================== */

function Objetos() {
  return (
    <div className="pagina-objetos">

      {/* INTRODUCCIÓN */}
      <section className="panel-wiki revelar">
        <h1>Objetos</h1>

        <p>
          Durante su aventura, el doctor Mateo
          encontrará diferentes objetos que serán
          importantes para sobrevivir, combatir
          enemigos y avanzar por los escenarios
          de Esperanza en el Cielo.
        </p>

        <p>
          Algunos forman parte de su equipamiento,
          mientras que otros sirven para recuperar
          salud o aprovechar las capacidades
          de su traje experimental.
        </p>
      </section>

      {/* CATEGORÍAS Y OBJETOS */}
      {grupos.map((grupo) => (
        <section
          key={grupo.id}
          aria-labelledby={`grupo-${grupo.id}`}
        >

          {/* TÍTULO DE CATEGORÍA */}
          <h2
            id={`grupo-${grupo.id}`}
            className="titulo-grupo-objetos"
          >
            {grupo.titulo}
          </h2>

          {/* FICHAS DE LA CATEGORÍA */}
          {objetos
            .filter((objeto) => objeto.grupo === grupo.id)
            .map((objeto) => (
              <FichaObjeto
                key={objeto.id}
                objeto={objeto}
              />
            ))}
        </section>
      ))}

    </div>
  )
}

export default Objetos
