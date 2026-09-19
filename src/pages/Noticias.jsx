// Noticias.jsx
import "./Noticias.css"
import fotoAño from "../assets/logo.png"

/* ============================================================
   NOTICIAS — edita, agrega o quita objetos aquí.
   Para usar imágenes locales:
     import foto from "../assets/foto.jpg"
     y pon: imagen: foto
   ============================================================ */
const NOTICIAS = [


  // Luego reemplaza la URL:

  /* ── Para agregar una noticia, copia este bloque: ──
  {
    id:        4,
    categoria: "Categoría",
    fecha:     "DD Mmm YYYY",
    titulo:    "Título de la noticia",
    resumen:   "Breve descripción de la noticia.",
    imagen:    "URL o import local",
    destacada: false,
  },
  ──────────────────────────────────────────────────── */
  
]

/* Colores por categoría */
const CATEGORIA_COLOR = {
  Ciencia:   "#7ad20e",
  Deportes:  "#65ea06",
  Académico: "#a78bfa",
  default:   "#55f50b",
}

function Noticias() {
  return (
    <section id="noticias" className="noticias">

      {/* ── Encabezado ── */}
      <div className="noticias-header">
        <span className="noticias-badge">Últimas novedades</span>
        <h2>Noticias del <em>Colegio</em></h2>
        <p>Entérate de todo lo que ocurre en nuestra comunidad educativa.</p>
      </div>

      {/* ── Grid ── */}
      <div className="noticias-grid">
        {NOTICIAS.map((n) => {
          const color = CATEGORIA_COLOR[n.categoria] ?? CATEGORIA_COLOR.default
          return (
            <article
              key={n.id}
              className={`noticia-card ${n.destacada ? "destacada" : ""}`}
              style={{ "--card-color": color }}
            >
              {/* Imagen */}
              <div className="noticia-img">
                <img src={n.imagen} alt={n.titulo} loading="lazy" />
                <span className="noticia-categoria">{n.categoria}</span>
              </div>

              {/* Contenido */}
              <div className="noticia-body">
                <time className="noticia-fecha">{n.fecha}</time>
                <h3>{n.titulo}</h3>
                <p>{n.resumen}</p>
                              </div>
            </article>
          )
        })}
      </div>

    </section>
  )
}

export default Noticias