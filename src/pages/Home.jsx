import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import DestinosGrid from '../components/DestinosGrid/DestinosGrid.jsx'
import SobreBonito from '../components/SobreBonito/SobreBonito.jsx'
import PacoteSugerido from '../components/PacoteSugerido/PacoteSugerido.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from './Home.module.css'

/* ============================================================
   HOME — monta a Landing Page completa
   ============================================================ */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DestinosGrid />
        <section className={styles.mapaSection} aria-label="Mapa turístico de Bonito">
          <a
            href="/mapa-bonito.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapaButton}
          >
            <svg
              className={styles.mapaIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9 5 3 7v12l6-2 6 2 6-2V5l-6 2-6-2Z" />
              <path d="M9 5v12M15 7v12" />
            </svg>
            Abrir Mapa de Bonito (PDF)
          </a>
        </section>
        <PacoteSugerido />
        <SobreBonito />
      </main>
      <Footer />
    </>
  )
}
