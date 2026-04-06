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
        style={{ '--card-color': destino.cor }}
        aria-hidden="true"
      >
        <span className={styles.iniciais}>{iniciais}</span>

        {/* Padrão pontilhado decorativo */}
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
