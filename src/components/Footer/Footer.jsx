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
              O portal definitivo do ecoturismo em Bonito, MS.
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
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {anoAtual} Bonito Inesquecível Oficial. Todos os direitos reservados.
          </p>
          <p className={styles.credits}>
            Feito com ♥ para o Pantanal · Bonito, MS
          </p>
        </div>
      </div>
    </footer>
  )
}
