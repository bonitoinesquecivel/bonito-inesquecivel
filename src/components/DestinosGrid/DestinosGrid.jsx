import destinos from '../../data/destinos.js'
import DestinoCard from './DestinoCard.jsx'
import styles from './DestinosGrid.module.css'

/* ============================================================
   DESTINOS GRID — grid responsivo de cards
   ============================================================ */
export default function DestinosGrid() {
  return (
    <section id="destinos" className={styles.section}>
      <div className={styles.container}>
        {/* Cabeçalho da seção */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Explore o melhor de Bonito</span>
          <h2 className={styles.title}>Nossos Destinos</h2>
          <p className={styles.subtitle}>
            De cachoeiras a cavernas, de pousadas ao Pantanal — cada lugar conta uma história única.
          </p>
        </div>

        {/* Grid de cards */}
        <ul className={styles.grid} role="list">
          {destinos.map(destino => (
            <li key={destino.id} className={styles.gridItem}>
              <DestinoCard destino={destino} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
