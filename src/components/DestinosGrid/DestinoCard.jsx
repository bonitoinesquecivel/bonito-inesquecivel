import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import styles from './DestinoCard.module.css'

/* ============================================================
   DESTINO CARD — card individual com hover e link para galeria
   ============================================================ */
export default function DestinoCard({ destino }) {
  const navigate = useNavigate()

  /* Gera iniciais a partir do nome (ex: "Praia da Figueira" → "PF") */
  const iniciais = destino.nome
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')

  const handleVerGaleria = () => {
    navigate(`/galeria/${destino.slug}`)
  }

  return (
    <article
      className={styles.card}
      role="article"
      aria-label={`Destino: ${destino.nome}`}
    >
      {/* Área visual com cor única + iniciais */}
      <div
        className={styles.visual}
        style={{
          '--card-color': destino.cor,
          ...(destino.imagemPrincipal && { backgroundImage: `url(${destino.imagemPrincipal})`, backgroundSize: 'cover', backgroundPosition: 'center' })
        }}
        aria-hidden="true"
      >
        {!destino.imagemPrincipal && <span className={styles.iniciais}>{iniciais}</span>}

        {/* Padrão pontilhado decorativo */}
        {!destino.imagemPrincipal && (
          <svg className={styles.pattern} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 6 }, (_, row) =>
              Array.from({ length: 6 }, (_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={20 + col * 32}
                  cy={20 + row * 32}
                  r="2.5"
                  fill="rgba(255,255,255,.18)"
                />
              ))
            )}
          </svg>
        )}

        {/* Tag de categoria */}
        <span className={styles.categoriaTag}>{destino.categoria}</span>

        {/* Botão "Ver Galeria" que aparece no hover */}
        <button
          className={styles.galeriaBtn}
          onClick={handleVerGaleria}
          aria-label={`Ver galeria de ${destino.nome}`}
        >
          Ver Galeria
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Informações textuais */}
      <div className={styles.info}>
        <h3 className={styles.nome}>{destino.nome}</h3>
        <p className={styles.descricao}>{destino.descricao}</p>
        <a 
          href="https://wa.me/5567992834917" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#25D366', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '4px', textDecoration: 'none', marginTop: '1rem', fontSize: '0.8rem', fontWeight: 'bold', width: 'fit-content' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Saiba mais
        </a>
      </div>
    </article>
  )
}

DestinoCard.propTypes = {
  destino: PropTypes.shape({
    id:        PropTypes.number.isRequired,
    nome:      PropTypes.string.isRequired,
    slug:      PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    cor:       PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
  }).isRequired,
}
