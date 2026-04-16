import "./Home.css"

/* ── Navegación suave ── */
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

function Home() {

  const goToLogin = () => {
    window.location.href = "https://mauel-escorza-torres.vercel.app/login"
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>Colegio Manuel Scorza</h1>
        <p>Formando estudiantes con valores, conocimiento y disciplina.</p>

        <div className="hero-buttons">
          {/* Botón principal */}


          {/* 🔐 Botón Login */}
          <button
            className="btn-secondary"
            onClick={goToLogin}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home