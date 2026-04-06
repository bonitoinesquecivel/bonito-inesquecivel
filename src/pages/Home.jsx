import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import DestinosGrid from '../components/DestinosGrid/DestinosGrid.jsx'
import SobreBonito from '../components/SobreBonito/SobreBonito.jsx'
import Footer from '../components/Footer/Footer.jsx'

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
        <SobreBonito />
      </main>
      <Footer />
    </>
  )
}
