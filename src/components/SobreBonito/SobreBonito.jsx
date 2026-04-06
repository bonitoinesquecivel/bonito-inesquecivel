import styles from './SobreBonito.module.css'

/* ============================================================
   SOBRE BONITO — descrição do destino + estatísticas visuais
   ============================================================ */

const estatisticas = [
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M2 12h4m12 0h4M12 2v4m0 12v4"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    valor: 'Águas',
    label: 'Cristalinas',
    descricao: 'Visibilidade de até 40m em rios e dolinas',
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    valor: 'Patrimônio',
    label: 'Natural',
    descricao: 'Reconhecido pela UNESCO e MMA',
  },
]

export default function SobreBonito() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        {/* Colunas: texto + imagem decorativa */}
        <div className={styles.layout}>
          {/* Coluna esquerda — texto */}
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Sobre o destino</span>
            <h2 className={styles.title}>
              Bonito: onde a natureza<br />
              <em>revela seus segredos</em>
            </h2>
            <p className={styles.body}>
              Encravado no coração do Mato Grosso do Sul, Bonito é reconhecido
              mundialmente como um dos maiores destinos de ecoturismo do Brasil.
              Suas águas cristalinas, formadas pelo calcário que filtra os rios,
              permitem uma visibilidade rara — mergulhar ali é flutuar entre
              cardumes coloridos sem precisar ir ao mar.
            </p>
            <p className={styles.body}>
              A Chapada do Pantanal abraça a cidade com cachoeiras, grutas e
              dolinas habitadas por araras e tucanos. Cada trilha é uma revelação;
              cada pôr do sol, uma tela viva. Aqui, o turismo sustentável não é
              tendência — é tradição.
            </p>
          </div>

          {/* Coluna direita — decoração visual */}
          <div className={styles.visualCol} aria-hidden="true">
            <div className={styles.visualCard}>
              <div className={styles.visualInner}>
                <div className={styles.blob} />
                <div className={styles.ripple} />
                <div className={styles.ripple2} />
                <span className={styles.visualText}>Bonito, MS</span>
                <span className={styles.visualSub}>Pantanal · Cerrado · Águas Cristalinas</span>
              </div>
            </div>
            {/* Card flutuante decorativo */}
            <div className={styles.floatCard}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-cristal)" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <div>
                <strong>Certificado Sustentável</strong>
                <span>Ecoturismo de base comunitária</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas visuais */}
        <ul className={styles.statsGrid} role="list">
          {estatisticas.map(stat => (
            <li key={stat.label} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icone}</div>
              <div className={styles.statContent}>
                <div className={styles.statValor}>
                  <strong>{stat.valor}</strong>
                  <span>{stat.label}</span>
                </div>
                <p className={styles.statDescricao}>{stat.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
