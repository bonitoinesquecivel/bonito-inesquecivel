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
        { label: 'Contato',      href: '#contato' },
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

            {/* Redes sociais (ícones SVG) */}
            <div className={styles.socials}>
              {[
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01 M2 2h6l2 3H9v5H4V5H2V2z' },
                { label: 'Facebook',  path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'YouTube',   path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#contato"
                  className={styles.socialLink}
                  aria-label={label}
                  onClick={e => e.preventDefault()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
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
