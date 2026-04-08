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
        <span className={styles.badge}>
          Bonito · Pantanal <br /> Mato Grosso do Sul
        </span>

        <h1 className={styles.headline}>
          Dois destinos no<br />
          <em>coração do Brasil</em>
        </h1>

        <p className={styles.subtitle}>
          Passeios, hospedagem e experiências únicas{' '}
          <br className={styles.brDesktop} />
          em Bonito e Pantanal
        </p>

        <div className={styles.actions}>
          <button className={styles.ctaPrimary} onClick={handleCTA}>
            Explorar Destinos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </button>
          <a href="https://wa.me/5567992834917" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Saiba mais
          </a>
        </div>

        {/* Indicadores flutuantes */}
        <div className={styles.stats}>
          {[
            { value: 'Águas',      label: 'Cristalinas' },
            { value: 'Patrimônio', label: 'Natural' },
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
