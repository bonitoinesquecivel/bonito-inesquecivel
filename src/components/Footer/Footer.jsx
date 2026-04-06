import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

/* ============================================================
   FOOTER — logo + links rápidos + copyright
   ============================================================ */
export default function Footer() {
  const anoAtual = new Date().getFullYear()

  const linkGroups = [
    {
      titulo: 'Passeios',
      links: [
        { label: 'Natureza',     href: '#destinos' },
        { label: 'Aventura',     href: '#destinos' },
        { label: 'Ecoturismo',   href: '#destinos' },
        { label: 'Fauna & Flora',href: '#destinos' },
      ],
    },
    {
      titulo: 'Hospedagem',
      links: [
        { label: 'Lodges',       href: '#destinos' },
        { label: 'Hotéis',       href: '#destinos' },
        { label: 'Pousadas',     href: '#destinos' },
      ],
    },
    {
      titulo: 'Portal',
      links: [
        { label: 'Início',       href: '#inicio' },
        { label: 'Sobre Bonito', href: '#sobre' },
      ],
    },
  ]

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        {/* Topo do footer */}
        <div className={styles.top}>
          {/* Identidade */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoIcon}>B</span>
              <span className={styles.logoText}>
                Bonito <strong>Inesquecível</strong>
                <em>Oficial</em>
              </span>
            </Link>
            <p className={styles.tagline}>
              O portal definitivo do ecoturismo em Bonito-MS e Pantanal.
              Natureza, aventura e hospitalidade em cada experiência.
            </p>

          </div>

          {/* Links agrupados */}
          <div className={styles.linksGrid}>
            {linkGroups.map(group => (
              <div key={group.titulo} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.titulo}</h4>
                <ul>
                  {group.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.footerLink}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <hr className={styles.divider} />

        {/* Rodapé do footer */}
        <div className={styles.bottom} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className={styles.copyright}>
              © {anoAtual} Bonito Inesquecível Oficial. Todos os direitos reservados.
            </p>
            <p className={styles.credits}>
              Feito com ♥ para o Pantanal · Bonito, MS
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="mailto:contato@bonitoinesquecivel.com.br" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
              contato@bonitoinesquecivel.com.br
            </a>
            <a href="https://wa.me/5567992834917" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (67) 99283-4917
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
