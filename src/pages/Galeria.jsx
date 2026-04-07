import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import destinos from '../data/destinos.js'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from './Galeria.module.css'



/* ============================================================
   GALERIA — página dinâmica por slug, com Lightbox puro React
   ============================================================ */
export default function Galeria() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const destino = destinos.find(d => d.slug === slug)

  const galeriaFotos = destino?.fotos?.length
    ? destino.fotos.map((url, i) => ({ id: i + 1, label: `Foto ${i + 1}`, url }))
    : Array.from({ length: 12 }, (_, i) => ({ id: i + 1, label: `Foto ${i + 1}`, url: null }))

  const TOTAL_FOTOS = galeriaFotos.length

  /* Estado do lightbox: null = fechado, número = índice ativo */
  const [lightboxIndex, setLightboxIndex] = useState(null)

  /* ---- Lightbox: navegação ---- */
  const fecharLightbox = useCallback(() => setLightboxIndex(null), [])

  const proximaFoto = useCallback(() => {
    setLightboxIndex(prev => (prev + 1) % TOTAL_FOTOS)
  }, [TOTAL_FOTOS])

  const fotoAnterior = useCallback(() => {
    setLightboxIndex(prev => (prev - 1 + TOTAL_FOTOS) % TOTAL_FOTOS)
  }, [TOTAL_FOTOS])

  /* ---- Lightbox: teclado (ESC, ←, →) ---- */
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = e => {
      if (e.key === 'Escape')     fecharLightbox()
      if (e.key === 'ArrowRight') proximaFoto()
      if (e.key === 'ArrowLeft')  fotoAnterior()
    }

    window.addEventListener('keydown', handleKeyDown)
    /* Trava scroll do body enquanto lightbox está aberto */
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, fecharLightbox, proximaFoto, fotoAnterior])

  /* Scroll para o topo ao montar a página */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  /* Destino não encontrado */
  if (!destino) {
    return (
      <div className={styles.notFound}>
        <h2>Destino não encontrado</h2>
        <Link to="/" className={styles.voltarBtn}>
          ← Voltar para Home
        </Link>
      </div>
    )
  }

  /* Gera iniciais */
  const iniciais = destino.nome
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')

  return (
    <>
      <Header />

      <main className={styles.main}>
        {/* ---- Hero da galeria ---- */}
        <div
          className={styles.galeriaHero}
          style={{
            '--destino-color': destino.cor,
            ...(galeriaFotos[0]?.url && {
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${galeriaFotos[0].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            })
          }}
        >
          <div className={styles.galeriaHeroInner}>
            {/* Botão voltar */}
            <button
              className={styles.voltarBtn}
              onClick={() => navigate(-1)}
              aria-label="Voltar à página anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar
            </button>

            {/* Título e meta */}
            <span className={styles.heroCat}>{destino.categoria}</span>
            <h1 className={styles.heroTitle}>{destino.nome}</h1>
            <p className={styles.heroDesc}>{destino.descricao}</p>

            {/* Badge de contagem */}
            <span className={styles.fotosBadge}>{TOTAL_FOTOS} fotos</span>
          </div>
        </div>

        {/* ---- Grid de fotos ---- */}
        <section className={styles.galeriaSection}>
          <div className={styles.galeriaContainer}>
            <ul className={galeriaFotos.length <= 3 ? styles.galeriaGridCentered : styles.galeriaGrid} role="list">
              {galeriaFotos.map((foto, idx) => (
                <li key={foto.id}>
                  <button
                    className={styles.fotoCard}
                    style={{
                      '--card-color': destino.cor,
                      ...(foto.url && { backgroundImage: `url(${foto.url})`, backgroundSize: 'cover', backgroundPosition: 'center' })
                    }}
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Abrir ${foto.label} de ${destino.nome}`}
                  >
                    {!foto.url && (
                      <div className={styles.fotoPlaceholder} aria-hidden="true">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                      </div>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {destino.mapaIframe && (
              <div className={styles.mapaContainer}>
                <h2 className={styles.mapaTitle}>Veja no Mapa</h2>
                <iframe
                  src={destino.mapaIframe}
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: 'var(--radius-md)', marginTop: '1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa para ${destino.nome}`}
                ></iframe>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ---- Lightbox ---- */}
      {lightboxIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${galeriaFotos[lightboxIndex].label}`}
          onClick={fecharLightbox}
        >
          {/* Parar propagação para clicar dentro sem fechar */}
          <div
            className={styles.lightboxContent}
            onClick={e => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              className={styles.lightboxClose}
              onClick={fecharLightbox}
              aria-label="Fechar lightbox"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Seta anterior */}
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={fotoAnterior}
              aria-label="Foto anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Imagem lightbox */}
            <div
              className={styles.lightboxImagem}
              style={{
                '--lb-color': destino.cor,
                ...(galeriaFotos[lightboxIndex].url && { backgroundImage: `url(${galeriaFotos[lightboxIndex].url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' })
              }}
              aria-label={galeriaFotos[lightboxIndex].label}
            >
              {!galeriaFotos[lightboxIndex].url && (
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              )}
            </div>

            {/* Seta próxima */}
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={proximaFoto}
              aria-label="Próxima foto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            {/* Contador */}
            <div className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {TOTAL_FOTOS}
            </div>

            {/* Miniaturas navegáveis */}
            <div className={styles.lightboxThumbs}>
              {galeriaFotos.map((f, idx) => (
                <button
                  key={f.id}
                  className={`${styles.lightboxThumb} ${idx === lightboxIndex ? styles.lightboxThumbActive : ''}`}
                  style={{
                    '--lb-color': destino.cor,
                    ...(f.url && { backgroundImage: `url(${f.url})`, backgroundSize: 'cover', backgroundPosition: 'center' })
                  }}
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={f.label}
                  aria-current={idx === lightboxIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
