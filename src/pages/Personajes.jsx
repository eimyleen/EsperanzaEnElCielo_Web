
/* ========================================
   PERSONAJES - ESPERANZA EN EL CIELO
======================================== */

import ImagenWiki from '../components/ImagenWiki'

const personajes = [
  /* =====================================
     PERSONAJES PRINCIPALES
  ===================================== */

  {
    id: 'mateo',
    nombre: 'Doctor Mateo',
    categoria: 'Personaje principal',

    descripcion:
      'Mateo es un científico universitario que trabajaba en el desarrollo de tecnología experimental. Su investigación más importante es un traje de protección capaz de aprovechar la energía de unas misteriosas gemas.',

    detalles:
      'Después de que una infección devastara la Tierra, Mateo queda atrapado mientras la humanidad intenta evacuar el planeta. Aunque es inteligente y creativo, también es nervioso y algo cobarde. Tendrá que enfrentar sus miedos para sobrevivir y llegar hasta la última nave de evacuación.',

    etiquetas: [
      'Protagonista',
      'Científico',
      'Superviviente'
    ],

    imagen: '/images/mateo-personaje.png'
  },

  {
    id: 'sargento',
    nombre: 'El Sargento',
    categoria: 'Personaje secundario',

    descripcion:
      'El Sargento es un militar experimentado que participa en la organización de la evacuación de los últimos sobrevivientes de la Tierra. Su personalidad es seria, disciplinada y autoritaria.',

    detalles:
      'Durante la aventura, se comunica con Mateo para orientarlo y explicarle cómo llegar a la torre orbital. A pesar de la situación desesperada, permanece atento a la llegada del científico y representa su última oportunidad de escapar.',

    etiquetas: [
      'Militar',
      'Aliado',
      'Evacuación'
    ],

    imagen: '/images/sargento.png'
  },

  /* =====================================
     MANIQUÍ DE ENTRENAMIENTO
  ===================================== */

  {
    id: 'maniqui',
    nombre: 'Maniquí de entrenamiento',
    categoria: 'Entrenamiento',

    descripcion:
      'El Maniquí, también conocido como Dummy, es un objetivo de entrenamiento que se encuentra dentro del laboratorio donde comienza la aventura de Mateo.',

    detalles:
      'Su propósito es permitir que el jugador practique el uso de la pistola de pulso y se familiarice con las mecánicas de combate. Tiene un cuerpo artificial de color amarillo anaranjado y una característica línea vertical en el rostro. No representa una amenaza para Mateo.',

    etiquetas: [
      'Dummy',
      'Laboratorio',
      'Tutorial',
      'Práctica de disparo'
    ],

    imagen: '/images/maniqui-entrenamiento.png'
  },

  /* =====================================
     INFECTADOS
  ===================================== */

  {
    id: 'infectado-comun',
    nombre: 'Infectado común',
    categoria: 'Enemigo - Nivel 1',

    descripcion:
      'Es el tipo de infectado más común que Mateo encontrará durante su aventura. Originalmente era una persona normal, pero la infección transformó su comportamiento y apariencia.',

    detalles:
      'Tiene la piel verdosa, cabello corto y oscuro, una playera blanca deteriorada y pantalones azules. Camina descalzo y ataca cuerpo a cuerpo cuando se aproxima al jugador. Aunque es un enemigo básico, puede resultar peligroso cuando aparece acompañado de otros infectados.',

    etiquetas: [
      'Enemigo básico',
      'Cuerpo a cuerpo',
      'Infectado'
    ],

    imagen: '/images/infectado-comun.png'
  },

  {
    id: 'infectado-rastrero',
    nombre: 'Infectado rastrero',
    categoria: 'Enemigo - Nivel 2',

    descripcion:
      'Esta variante de infectado ha perdido sus piernas, por lo que se ve obligada a desplazarse utilizando únicamente los brazos para arrastrarse por el suelo.',

    detalles:
      'Tiene el torso descubierto, cabello corto de color castaño y restos de un pantalón marrón. Su manera de desplazarse lo convierte en una amenaza diferente a los infectados comunes, ya que el jugador deberá prestar atención a los ataques que provienen cerca del suelo.',

    etiquetas: [
      'Enemigo rastrero',
      'Ataque bajo',
      'Infectado'
    ],

    imagen: '/images/infectado-rastrero.png'
  },

  {
    id: 'infectado-grande',
    nombre: 'Infectado grande',
    categoria: 'Enemigo - Nivel 3',

    descripcion:
      'Es una variante de infectado que destaca por su gran tamaño, fuerza física y aspecto militar. Tiene un cuerpo considerablemente más robusto que los infectados anteriores.',

    detalles:
      'Lleva cabello militar muy corto, una camiseta de tirantes café, pantalones azules y botas. Utiliza una señal de ALTO como arma improvisada para golpear a Mateo. Debido a su fuerza y resistencia, representa un desafío mayor durante los enfrentamientos.',

    etiquetas: [
      'Enemigo pesado',
      'Mayor resistencia',
      'Señal de ALTO'
    ],

    imagen: '/images/infectado-grande.png'
  },

  /* =====================================
     JEFE FINAL
  ===================================== */

  {
    id: 'recolector',
    nombre: 'El Recolector',
    categoria: 'Jefe final',

    descripcion:
      'El Recolector es un enorme infectado que ha reunido piezas metálicas, maquinaria abandonada y restos de tecnología para construir una armadura improvisada que protege su cuerpo.',

    detalles:
      'Entre sus características más reconocibles se encuentran su casco con una cruz roja, una máscara respiratoria, numerosas placas metálicas en los brazos y una enorme pieza mecánica semejante a una tuerca o engranaje en la espalda. Mateo deberá enfrentarlo en el reactor de la torre orbital antes de alcanzar la última nave de evacuación.',

    etiquetas: [
      'Jefe final',
      'Gran resistencia',
      'Armadura de chatarra',
      'Reactor'
    ],

    imagen: '/images/recolector.png'
  }
]

/* ========================================
   COMPONENTE DE FICHA
======================================== */

function FichaPersonaje({ personaje, indice }) {
  const imagenDerecha = indice % 2 !== 0

  return (
    <article
      id={personaje.id}
      className="panel-wiki ficha-personaje revelar"
    >

      {/* ENCABEZADO */}
      <div className="encabezado-personaje">
        <span className="categoria-personaje">
          {personaje.categoria}
        </span>

        <h2>{personaje.nombre}</h2>
      </div>

      {/* IMAGEN + INFORMACIÓN */}
      <div
        className={`cuerpo-personaje ${
          imagenDerecha ? 'personaje-invertido' : ''
        }`}
      >

        {/* ILUSTRACIÓN */}
        <div className="imagen-personaje">
          <ImagenWiki
            src={personaje.imagen}
            alt={`Ilustración de ${personaje.nombre}`}
            loading="lazy"
          />
        </div>

        {/* DESCRIPCIÓN */}
        <div className="informacion-personaje">
          <p>{personaje.descripcion}</p>
          <p>{personaje.detalles}</p>

          {/* ETIQUETAS */}
          <div className="etiquetas-personaje">
            {personaje.etiquetas.map((etiqueta) => (
              <span key={etiqueta}>
                {etiqueta}
              </span>
            ))}
          </div>

        </div>
      </div>

    </article>
  )
}

/* ========================================
   PÁGINA DE PERSONAJES
======================================== */

function Personajes() {
  const principales = personajes.slice(0, 2)
  const entrenamiento = personajes.slice(2, 3)
  const infectados = personajes.slice(3, 6)
  const jefeFinal = personajes.slice(6, 7)

  return (
    <div className="pagina-personajes">

      {/* INTRODUCCIÓN */}
      <section className="panel-wiki revelar">
        <h1>Personajes</h1>

        <p>
          Descubre a los protagonistas, aliados,
          enemigos y criaturas que forman parte
          de Esperanza en el Cielo.
        </p>

        <p>
          Conoce sus historias, características
          y el papel que desempeñan durante
          la aventura del doctor Mateo.
        </p>
      </section>

      {/* PERSONAJES PRINCIPALES */}
      <h2 className="titulo-grupo-personajes">
        Personajes principales
      </h2>

      {principales.map((personaje, indice) => (
        <FichaPersonaje
          key={personaje.id}
          personaje={personaje}
          indice={indice}
        />
      ))}

      {/* ENTRENAMIENTO */}
      <h2 className="titulo-grupo-personajes">
        Entrenamiento del laboratorio
      </h2>

      {entrenamiento.map((personaje, indice) => (
        <FichaPersonaje
          key={personaje.id}
          personaje={personaje}
          indice={indice + 2}
        />
      ))}

      {/* INFECTADOS */}
      <h2 className="titulo-grupo-personajes">
        Los infectados
      </h2>

      {infectados.map((personaje, indice) => (
        <FichaPersonaje
          key={personaje.id}
          personaje={personaje}
          indice={indice + 3}
        />
      ))}

      {/* JEFE FINAL */}
      <h2 className="titulo-grupo-personajes">
        Jefe final
      </h2>

      {jefeFinal.map((personaje, indice) => (
        <FichaPersonaje
          key={personaje.id}
          personaje={personaje}
          indice={indice + 6}
        />
      ))}

    </div>
  )
}

export default Personajes
