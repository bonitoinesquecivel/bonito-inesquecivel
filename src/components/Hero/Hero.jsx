import styles from './Hero.module.css'

/* ============================================================
   HERO — seção fullscreen de entrada
   ============================================================ */
export default function Hero() {
  /* Scroll suave até a seção de destinos */
  const handleCTA = () => {
    const section = document.getElementById('destinos')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className={styles.hero} aria-label="Seção principal">
      {/* Camadas de gradiente decorativas */}
      <div className={styles.gradientLayer} aria-hidden="true" />
      <div className={styles.waveSvg} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="var(--color-gelo)"
          />
        </svg>
      </div>

      {/* Círculos decorativos */}
      <div className={`${styles.circle} ${styles.circleA}`} aria-hidden="true" />
      <div className={`${styles.circle} ${styles.circleB}`} aria-hidden="true" />
      <div className={`${styles.circle} ${styles.circleC}`} aria-hidden="true" />

      {/* Conteúdo central */}
      <div className={styles.content}>
        <span className={styles.badge}>Bonito · Mato Grosso do Sul</span>

        <h1 className={styles.headline}>
          Descubra o paraíso<br />
          <em>natural de Bonito, MS</em>
        </h1>

        <p className={styles.subtitle}>
          Passeios, hospedagens e experiências únicas<br className={styles.brDesktop} />
          no coração do Pantanal
        </p>

        <div className={styles.actions}>
          <button className={styles.ctaPrimary} onClick={handleCTA}>
            Explorar Destinos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </button>
          <a href="#sobre" className={styles.ctaSecondary}>
            Saiba mais
          </a>
        </div>

        {/* Indicadores flutuantes */}
        <div className={styles.stats}>
          {[
            { value: '50+',    label: 'Passeios' },
            { value: '100%',   label: 'Natureza' },
            { value: '4.9★',   label: 'Avaliação' },
          ].map(stat => (
            <div key={stat.label} className={styles.statItem}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
