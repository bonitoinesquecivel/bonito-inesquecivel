import useEmblaCarousel from 'embla-carousel-react'
import styles from './PacoteSugerido.module.css'

const waLink = (msg) =>
  `https://wa.me/5567992834917?text=${encodeURIComponent(msg)}`

/* Ícones SVG inline — estilo stroke, cor herdada */
const IconCama = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/>
    <path d="M2 10V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/>
    <path d="M6 10v4"/>
    <path d="M18 10v4"/>
  </svg>
)

const IconOnda = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/>
    <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/>
    <path d="M2 7c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/>
  </svg>
)

const IconAgua = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/>
  </svg>
)

const IconCaverna = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 20h18L12 4 3 20z"/>
    <path d="M12 4v6"/>
    <path d="M9 14l3 3 3-3"/>
  </svg>
)

const IconPassaro = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 7h.01"/>
    <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/>
    <path d="m20 7 2 .5-2 .5"/>
    <path d="M10 18v3"/>
    <path d="M14 17.75V21"/>
    <path d="M7 18a6 6 0 0 0 3.84-10.61"/>
  </svg>
)

const ITENS = [
  {
    id: 1,
    nome: 'Hotel da Praça',
    tag: 'Hospedagem',
    detalhe: '3 diárias incluídas',
    imagem: '/hotel-da-praca/foto-1.jpg',
    Icone: IconCama,
  },
  {
    id: 2,
    nome: 'Praia da Figueira',
    tag: 'Day-use',
    detalhe: 'Flutuação e lazer',
    imagem: '/praia-da-figueira/foto-1.jpg',
    Icone: IconOnda,
  },
  {
    id: 3,
    nome: 'Parque das Cachoeiras',
    tag: 'Trilha',
    detalhe: 'Quedas do Rio Mimoso',
    imagem: '/parque-das-cachoeiras/foto-4.jpg',
    Icone: IconAgua,
  },
  {
    id: 4,
    nome: 'Gruta Catedral',
    tag: 'Aventura',
    detalhe: 'Formações de estalactites',
    imagem: '/gruta-catedral/foto-1.jpg',
    Icone: IconCaverna,
  },
  {
    id: 5,
    nome: 'Buraco das Araras',
    tag: 'Contemplação',
    detalhe: 'Maior dolina da América do Sul',
    imagem: '/buraco-das-araras/foto-3.jpg',
    Icone: IconPassaro,
  },
]

const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

/* ============================================================
   PACOTE SUGERIDO — seção com cards de pacote turístico
   ============================================================ */
export default function PacoteSugerido() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    breakpoints: {
      '(min-width: 1100px)': { active: false },
    },
  })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className={styles.section} aria-label="Sugestão de pacote turístico para Bonito">
      <div className={styles.container}>
        {/* Cabeçalho */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Monte sua experiência completa</span>
          <h2 className={styles.title}>Sugestão de Pacote para Bonito</h2>
          <p className={styles.subtitle}>
            Hospedagem + passeios selecionados para uma viagem inesquecível
          </p>
        </div>

        {/* Carrossel (mobile/tablet) / grid (desktop) */}
        <div className={styles.carouselWrapper}>
          {/* Seta anterior */}
          <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={scrollPrev} aria-label="Card anterior">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Viewport do Embla */}
          <div className={styles.emblaViewport} ref={emblaRef}>
            <ul className={styles.emblaContainer} role="list" aria-label="Itens incluídos no pacote">
              {ITENS.map(({ id, nome, tag, detalhe, imagem, Icone }) => (
                <li key={id} className={styles.emblaSlide}>
                  <article className={styles.card} aria-label={nome}>
                    {/* Foto de capa */}
                    <div
                      className={styles.visual}
                      style={{ backgroundImage: `url(${imagem})` }}
                      aria-hidden="true"
                    >
                      <span className={styles.tag}>{tag}</span>
                      <div className={styles.iconWrapper} aria-hidden="true">
                        <Icone />
                      </div>
                    </div>

                    {/* Informações */}
                    <div className={styles.info}>
                      <h3 className={styles.nome}>{nome}</h3>
                      <p className={styles.detalhe}>{detalhe}</p>
                      <a
                        href={waLink(`Olá! Vim pelo site Bonito Inesquecível e tenho interesse em saber mais sobre: ${nome}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.waBtn}
                        aria-label={`Saiba mais sobre ${nome} via WhatsApp`}
                      >
                        <IconWhatsApp />
                        Saiba mais
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          {/* Seta próxima */}
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={scrollNext} aria-label="Próximo card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Rodapé com preço e CTA */}
        <div className={styles.preco}>
          <p className={styles.precoLabel}>A partir de</p>
          <p className={styles.precoValor}>R$ 1.175,00</p>
          <p className={styles.precoComplemento}>por pessoa · base duas pessoas</p>
          <a
            href={waLink('Olá! Vim pelo site Bonito Inesquecível e gostaria de solicitar o Pacote para Bonito (a partir de R$ 1.175,00 por pessoa). Podem me passar mais informações?')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            aria-label="Solicitar pacote para Bonito via WhatsApp"
          >
            <IconWhatsApp />
            Informações aqui
          </a>
        </div>
      </div>
    </section>
  )
}
