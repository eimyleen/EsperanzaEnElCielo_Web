
import { Download, Monitor, HardDriveDownload } from 'lucide-react'

/* ========================================
   DESCARGA DEL VIDEOJUEGO
======================================== */

const URL_DESCARGA =
  'https://github.com/eimyleen/EsperanzaEnElCielo_Web/releases/download/v1.1.0/Instalador_EsperanzaEnElCielo_v1.1.0.exe'


function DescargarJuego() {
  return (
    <section
      id="descargar-juego"
      className="panel-wiki revelar descarga-juego"
    >
      <div className="descarga-juego-contenido">

        <span className="descarga-juego-etiqueta">
          DISPONIBLE PARA WINDOWS
        </span>

        <h2>¡Descarga Esperanza en el Cielo!</h2>

        <p>
          Acompaña al doctor Mateo en una aventura
          de acción, plataformas y ciencia ficción.
          Explora escenarios, enfréntate a los infectados
          y utiliza las habilidades de su traje
          experimental para sobrevivir.
        </p>

        <div className="descarga-juego-detalles">
          <span>
            <Monitor size={18} />
            Windows
          </span>

          <span>
            <HardDriveDownload size={18} />
            Descarga ZIP
          </span>
        </div>

        <a
          href={URL_DESCARGA}
          className="descarga-juego-boton"
          aria-label="Descargar Esperanza en el Cielo para Windows"
        >
          <Download size={23} />
          Descargar juego
        </a>

        <p className="descarga-juego-nota">
          Descarga el archivo ZIP, extráelo en una
          carpeta y ejecuta EsperanzaEnElCielo.exe
          para comenzar a jugar.
        </p>

      </div>
    </section>
  )
}

export default DescargarJuego
