
import { useEffect, useRef, useState } from 'react'
import { Download, CheckCircle2 } from 'lucide-react'

/* ========================================
   BOTÓN PARA INSTALAR LA PWA
======================================== */

function BotonInstalarPWA() {
  const eventoInstalacion = useRef(null)

  const [instalada, setInstalada] = useState(false)
  const [instalando, setInstalando] = useState(false)
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    // Comprobar si estamos dentro de la app instalada.
    const estaInstalada =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true

    setInstalada(estaInstalada)

    // Guardar el evento de instalación del navegador.
    const prepararInstalacion = (evento) => {
      evento.preventDefault()
      eventoInstalacion.current = evento
    }

    // Detectar cuando se instala la aplicación.
    const instalacionCompletada = () => {
      eventoInstalacion.current = null
      setInstalada(true)
      setMensaje('')
    }

    window.addEventListener(
      'beforeinstallprompt',
      prepararInstalacion
    )

    window.addEventListener(
      'appinstalled',
      instalacionCompletada
    )

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        prepararInstalacion
      )

      window.removeEventListener(
        'appinstalled',
        instalacionCompletada
      )
    }
  }, [])

  /* ========================================
     FUNCIÓN PARA INSTALAR LA APLICACIÓN
  ======================================== */

  const descargarApp = async () => {
    if (instalada || instalando) return

    const evento = eventoInstalacion.current

    // Abrir la instalación desde Chrome o Edge
    // cuando el navegador la tenga disponible.
    if (evento) {
      try {
        setInstalando(true)
        setMensaje('')

        // El evento solo puede utilizarse una vez.
        eventoInstalacion.current = null

        await evento.prompt()

        const eleccion = await evento.userChoice

        if (eleccion?.outcome === 'dismissed') {
          setMensaje(
            'Cancelaste la instalación. Puedes volver a instalar la wiki desde el menú de tu navegador.'
          )
        }
      } catch {
        setMensaje(
          'No fue posible abrir la instalación automáticamente. Intenta instalar la wiki desde el menú de tu navegador.'
        )
      } finally {
        setInstalando(false)
      }

      return
    }

    // Si el navegador no permite abrir directamente
    // la ventana de instalación, dar instrucciones.
    const agente = navigator.userAgent

    const esIOS =
      /iPhone|iPad|iPod/i.test(agente) ||
      (
        navigator.platform === 'MacIntel' &&
        navigator.maxTouchPoints > 1
      )

    if (esIOS) {
      setMensaje(
        'En iPhone o iPad, abre la wiki en Safari, toca Compartir y selecciona "Agregar a pantalla de inicio".'
      )

      return
    }

    if (/Android/i.test(agente)) {
      setMensaje(
        'Abre el menú de tu navegador (⋮) y selecciona "Instalar aplicación" o "Agregar a pantalla de inicio".'
      )

      return
    }

    setMensaje(
      'Busca el icono de instalación en la barra de direcciones o abre el menú del navegador y selecciona "Instalar aplicación".'
    )
  }

  /* ========================================
     INTERFAZ DEL BOTÓN
  ======================================== */

  return (
    <div className="pwa-instalacion">

      {instalada ? (
        <div className="pwa-ya-instalada">
          <CheckCircle2
            size={19}
            aria-hidden="true"
          />

          <span>Aplicación instalada</span>
        </div>
      ) : (
        <button
          type="button"
          className="btn-instalar-pwa"
          onClick={descargarApp}
          disabled={instalando}
        >
          <Download
            size={20}
            strokeWidth={2.2}
            aria-hidden="true"
          />

          <span>
            {instalando
              ? 'Abriendo instalación...'
              : 'Descargar app'}
          </span>
        </button>
      )}

      {mensaje && (
        <p
          className="pwa-mensaje"
          role="status"
          aria-live="polite"
        >
          {mensaje}
        </p>
      )}

    </div>
  )
}

export default BotonInstalarPWA
