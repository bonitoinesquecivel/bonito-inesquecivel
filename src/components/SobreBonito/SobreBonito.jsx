import styles from './SobreBonito.module.css'

/* ============================================================
   SOBRE BONITO — descrição do destino + estatísticas visuais
   ============================================================ */

export default function SobreBonito() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        {/* Coluna Bonito */}
        <div className={styles.layout}>
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Sobre o destino</span>
            <h2 className={styles.title}>
              Bonito: a natureza <em>em sua forma&nbsp;mais selvagem</em>
            </h2>
            <p className={styles.body}>
              Encravado no coração do Mato Grosso do Sul, Bonito é reconhecido
              mundialmente como um dos maiores destinos de ecoturismo do Brasil.
              Suas águas cristalinas, formadas pelo calcário que filtra os rios,
              permitem uma visibilidade rara — mergulhar ali é flutuar entre
              cardumes coloridos sem precisar ir ao mar.
            </p>
          </div>

          <div className={styles.visualCol} aria-hidden="true">
            <div className={styles.visualCard}>
              <div className={styles.visualInner}>
                <div className={styles.blob} />
                <div className={styles.ripple} />
                <div className={styles.ripple2} />
                <span className={styles.visualText}>Bonito, MS</span>
                <span className={styles.visualSub}>Cerrado · Águas Cristalinas</span>
              </div>
            </div>
            {/* Card flutuante decorativo */}
            <div className={styles.floatCard}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F1C40F" strokeWidth="2" strokeLinecap="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <div>
                <strong>Melhor destino turístico do Brasil</strong>
                <span>Reconhecimento Nacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Pantanal */}
        <div className={`${styles.layout} ${styles.layoutInvertido}`}>
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>Sobre o destino</span>
            <h2 className={styles.title}>
              Pantanal: a vida pulsando <em>em cada canto</em>
            </h2>
            <p className={styles.body}>
              O Pantanal é a maior planície alagável do planeta, um santuário
              ecológico onde a vida selvagem vibra intensamente. Safáris
              fotográficos e passeios de chalana oferecem o espetáculo do
              encontro com onças-pintadas, tuiuiús e a rica fauna brasileira.
              Uma experiência imersiva e inesquecível.
            </p>
          </div>

          <div className={styles.visualCol} aria-hidden="true">
            <div className={`${styles.visualCard} ${styles.visualCardPantanal}`}>
              <div className={styles.visualInner}>
                <div className={styles.blob} />
                <div className={styles.ripple} />
                <div className={styles.ripple2} />
                <span className={styles.visualText}>Pantanal, MS</span>
                <span className={styles.visualSub}>Maior Planície Alagável · Vida Selvagem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas visuais */}
        <ul className={styles.statsGrid} role="list">
          <li className={`${styles.statCard} ${styles.sealCard}`}>
            <img
              src="/selo-ecoturismo.webp"
              alt="Selo de ecoturismo"
              className={styles.sealImage}
            />
          </li>

        </ul>
      </div>
    </section>
  )
}
