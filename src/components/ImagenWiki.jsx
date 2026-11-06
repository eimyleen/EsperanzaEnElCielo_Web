
import { useEffect, useState } from 'react'

function ImagenWiki({
  src,
  alt = '',
  className = '',
  loading = 'lazy'
}) {
  const [enLinea, setEnLinea] = useState(
    () => navigator.onLine
  )

  const [errorImagen, setErrorImagen] = useState(false)

  useEffect(() => {
    const conectar = () => {
      setEnLinea(true)
      setErrorImagen(false)
    }

    const desconectar = () => {
      setEnLinea(false)
    }

    window.addEventListener('online', conectar)
    window.addEventListener('offline', desconectar)

    return () => {
      window.removeEventListener('online', conectar)
      window.removeEventListener('offline', desconectar)
    }
  }, [])

  useEffect(() => {
    setErrorImagen(false)
  }, [src])

  if (!enLinea || errorImagen) {
    return (
      <div
        className={`imagen-no-disponible ${className}`}
        role="img"
        aria-label={alt || 'Imagen no disponible'}
      >
        <span className="imagen-no-disponible-icono">
          ✕
        </span>

        <strong>No se pudo cargar la imagen</strong>

        <span>
          {!enLinea
            ? 'Sin conexión a Internet'
            : 'Imagen no disponible'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setErrorImagen(true)}
    />
  )
}

export default ImagenWiki
