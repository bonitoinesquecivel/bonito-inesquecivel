# PacoteSugerido Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar a seção "Sugestão de Pacote para Bonito" abaixo do botão do mapa na Home, com 5 cards (fotos + ícones + WhatsApp), carrossel no mobile e preço em destaque.

**Architecture:** Novo componente `PacoteSugerido` com CSS Module próprio, seguindo o padrão de `DestinosGrid`. Os dados do pacote ficam definidos estaticamente no próprio componente (array local, sem novo arquivo de dados). Carrossel mobile implementado via CSS scroll-snap nativo, sem biblioteca JS.

**Tech Stack:** React 18, CSS Modules, Vite, scroll-snap CSS nativo. Sem framework de testes no projeto.

---

## Arquivos

| Ação | Caminho |
|------|---------|
| Criar | `src/components/PacoteSugerido/PacoteSugerido.jsx` |
| Criar | `src/components/PacoteSugerido/PacoteSugerido.module.css` |
| Modificar | `src/pages/Home.jsx` |

---

### Task 1: Criar o componente PacoteSugerido.jsx

**Files:**
- Create: `src/components/PacoteSugerido/PacoteSugerido.jsx`

- [ ] **Step 1: Criar o arquivo com os dados e estrutura JSX**

Criar `src/components/PacoteSugerido/PacoteSugerido.jsx` com o conteúdo abaixo:

```jsx
import styles from './PacoteSugerido.module.css'

const WA_LINK = 'https://wa.me/5567992834917'

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

        {/* Carrossel / grid de cards */}
        <ul
          className={styles.carousel}
          role="list"
          aria-label="Itens incluídos no pacote"
          tabIndex={0}
        >
          {ITENS.map(({ id, nome, tag, detalhe, imagem, Icone }) => (
            <li key={id} className={styles.item}>
              <article className={styles.card} aria-label={nome}>
                {/* Foto de capa */}
                <div
                  className={styles.visual}
                  style={{ backgroundImage: `url(${imagem})` }}
                  role="img"
                  aria-label={`Foto de ${nome}`}
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
                    href={WA_LINK}
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

        {/* Rodapé com preço e CTA */}
        <div className={styles.preco}>
          <p className={styles.precoLabel}>À partir de</p>
          <p className={styles.precoValor}>R$ 1.175,00</p>
          <p className={styles.precoComplemento}>por pessoa · base duas pessoas</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            aria-label="Solicitar pacote para Bonito via WhatsApp"
          >
            <IconWhatsApp />
            Solicitar este pacote
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verificar que o arquivo foi criado**

```bash
ls src/components/PacoteSugerido/
```
Esperado: `PacoteSugerido.jsx`

---

### Task 2: Criar o CSS Module

**Files:**
- Create: `src/components/PacoteSugerido/PacoteSugerido.module.css`

- [ ] **Step 1: Criar o arquivo CSS**

Criar `src/components/PacoteSugerido/PacoteSugerido.module.css`:

```css
/* ============================================================
   PACOTE SUGERIDO — seção com cards e carrossel mobile
   ============================================================ */

.section {
  background: var(--color-gelo);
  padding: var(--section-padding);
  padding-top: 0;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ---------- Cabeçalho ---------- */
.sectionHeader {
  text-align: center;
  margin-bottom: 2.5rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-areia);
  margin-bottom: 0.5rem;
}

.title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--color-verde);
  margin-bottom: 0.6rem;
}

.subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 480px;
  margin: 0 auto;
}

/* ---------- Carrossel / grid ---------- */
.carousel {
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  /* Scroll snap — ativo em tablet/mobile, passivo em desktop */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.item {
  /* Largura fixa para carrossel; no desktop 5 cabem sem scroll */
  flex: 0 0 220px;
  scroll-snap-align: start;
  list-style: none;
}

/* ---------- Card ---------- */
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* Foto de capa */
.visual {
  position: relative;
  height: 160px;
  background-size: cover;
  background-position: center;
  background-color: var(--color-verde);
}

/* Tag de categoria */
.tag {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  background: rgba(52, 95, 78, 0.85);
  color: var(--color-white);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}

/* Ícone SVG */
.iconWrapper {
  position: absolute;
  bottom: 0.6rem;
  left: 0.6rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-areia);
  color: var(--color-white);
  border-radius: 50%;
  box-shadow: var(--shadow-sm);
}

/* Informações textuais */
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.9rem 1rem 1rem;
  gap: 0.3rem;
}

.nome {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--color-verde);
  line-height: 1.3;
}

.detalhe {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  flex: 1;
}

/* Botão WhatsApp */
.waBtn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #25D366;
  color: var(--color-white);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  margin-top: 0.4rem;
  width: fit-content;
  transition: background var(--transition);
}

.waBtn:hover {
  background: #1ebe5d;
}

/* ---------- Rodapé com preço ---------- */
.preco {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  gap: 0.25rem;
}

.precoLabel {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.precoValor {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: var(--color-areia);
  line-height: 1.1;
}

.precoComplemento {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

/* CTA principal */
.ctaBtn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-verde);
  color: var(--color-white);
  font-weight: 700;
  font-size: 0.98rem;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  box-shadow: var(--shadow-sm);
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
}

.ctaBtn:hover {
  background: var(--color-verde-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.ctaBtn:focus-visible {
  outline: 3px solid var(--color-areia);
  outline-offset: 3px;
}

/* ---------- Responsivo ---------- */

/* Desktop largo: 5 cards sem scroll */
@media (min-width: 1100px) {
  .carousel {
    overflow-x: visible;
    scroll-snap-type: none;
  }

  .item {
    flex: 1 1 0;
    min-width: 0;
  }
}

/* Tablet */
@media (max-width: 1099px) and (min-width: 768px) {
  .item {
    flex: 0 0 260px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .section {
    padding: 0 0 3rem;
  }

  .container {
    padding: 0;
  }

  .sectionHeader {
    padding: 0 1.5rem;
    margin-bottom: 1.5rem;
  }

  .carousel {
    padding: 0 1.5rem 1rem;
    /* Revela próximo card */
    scroll-padding-left: 1.5rem;
  }

  .item {
    flex: 0 0 80vw;
    max-width: 300px;
  }

  .preco {
    padding: 0 1.5rem;
    margin-top: 2rem;
  }
}
```

- [ ] **Step 2: Verificar que o arquivo foi criado**

```bash
ls src/components/PacoteSugerido/
```
Esperado: `PacoteSugerido.jsx  PacoteSugerido.module.css`

- [ ] **Step 3: Commit dos dois arquivos do componente**

```bash
git add src/components/PacoteSugerido/
git commit -m "feat: adicionar componente PacoteSugerido com carrossel mobile"
```

---

### Task 3: Integrar na Home

**Files:**
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Adicionar o import no topo do arquivo**

Em `src/pages/Home.jsx`, adicionar o import após a linha do `SobreBonito`:

```jsx
import PacoteSugerido from '../components/PacoteSugerido/PacoteSugerido.jsx'
```

- [ ] **Step 2: Inserir o componente após mapaSection**

No JSX de `Home.jsx`, inserir `<PacoteSugerido />` logo após o fechamento de `</section>` do `mapaSection`:

```jsx
        </section>
        <PacoteSugerido />
        <SobreBonito />
```

O arquivo completo ficará:

```jsx
import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import DestinosGrid from '../components/DestinosGrid/DestinosGrid.jsx'
import SobreBonito from '../components/SobreBonito/SobreBonito.jsx'
import PacoteSugerido from '../components/PacoteSugerido/PacoteSugerido.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from './Home.module.css'

/* ============================================================
   HOME — monta a Landing Page completa
   ============================================================ */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DestinosGrid />
        <section className={styles.mapaSection} aria-label="Mapa turístico de Bonito">
          <a
            href="/mapa-bonito.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapaButton}
          >
            <svg
              className={styles.mapaIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9 5 3 7v12l6-2 6 2 6-2V5l-6 2-6-2Z" />
              <path d="M9 5v12M15 7v12" />
            </svg>
            Abrir Mapa de Bonito (PDF)
          </a>
        </section>
        <PacoteSugerido />
        <SobreBonito />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Verificar no browser**

```bash
npm run dev
```

Abrir `http://localhost:5173` e verificar:
- Seção aparece abaixo do botão do mapa
- 5 cards com foto, ícone, tag, título, detalhe e botão WhatsApp
- Preço "R$ 1.175,00" e botão "Solicitar este pacote" visíveis
- No desktop (≥1100px): 5 cards lado a lado sem scroll
- No mobile (≤767px): carrossel com snap, cards de ~80vw

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "feat: integrar PacoteSugerido na Home"
```
