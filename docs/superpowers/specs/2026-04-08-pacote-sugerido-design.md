# Design: Seção PacoteSugerido

**Data:** 2026-04-08  
**Status:** Aprovado

---

## Objetivo

Adicionar uma dobra "Sugestão de Pacote para Bonito" logo abaixo do botão do mapa na Home, apresentando os 5 itens do pacote (1 hospedagem + 4 passeios) com cards visuais, preço final e CTA para WhatsApp.

---

## Posicionamento na página

`Home.jsx`:
```
<Header />
<Hero />
<DestinosGrid />
<mapaSection>          ← já existe
<PacoteSugerido />     ← novo componente aqui
<SobreBonito />
<Footer />
```

---

## Componente

**Arquivo:** `src/components/PacoteSugerido/PacoteSugerido.jsx`  
**CSS:** `src/components/PacoteSugerido/PacoteSugerido.module.css`

---

## Estrutura visual

### Cabeçalho da seção
- Eyebrow: `"Monte sua experiência completa"`
- Título (h2): `"Sugestão de Pacote para Bonito"`
- Subtítulo: `"Hospedagem + passeios selecionados para uma viagem inesquecível"`

### Cards (5 itens)

| Item | Imagem | Ícone | Tag | Detalhe |
|------|--------|-------|-----|---------|
| Hotel da Praça | `/hotel-da-praca/foto-1.jpg` | 🛏 (cama) | Hospedagem | 3 diárias incluídas |
| Praia da Figueira | `/praia-da-figueira/foto-1.jpg` | 🏖 (praia/água) | Day-use | Flutuação e lazer |
| Parque das Cachoeiras | `/parque-das-cachoeiras/foto-4.jpg` | 💧 (cachoeira) | Trilha | Quedas do Rio Mimoso |
| Gruta Catedral | `/gruta-catedral/foto-1.jpg` | 🗿 (caverna) | Aventura | Formações de estalactites |
| Buraco das Araras | `/buraco-das-araras/foto-3.jpg` | 🦜 (pássaro) | Contemplação | Maior dolina da América do Sul |

Cada card contém:
1. Foto de capa (background-image, ~55% altura do card)
2. Tag de tipo (badge sobreposto, canto superior esquerdo)
3. Ícone SVG inline (sobreposto na foto, canto inferior esquerdo)
4. Título (nome do item)
5. Detalhe (texto curto)
6. Botão "Saiba mais" → WhatsApp `https://wa.me/5567992834917`

Todos os ícones são SVG inline (sem dependência externa), estilo `stroke`, cor branca sobre fundo verde semitransparente.

### Rodapé da seção

Preço centralizado abaixo dos cards:
- Texto: `"À partir de"` (muted)
- Valor: `"R$ 1.175,00"` (display, grande, cor areia)
- Complemento: `"por pessoa · base duas pessoas"` (muted)
- Botão CTA: `"Solicitar este pacote"` → WhatsApp

---

## Layout

### Desktop (≥ 1100px)
- 5 cards em `display: flex`, `gap: 1rem`, todos visíveis sem scroll
- Largura máxima do container: `--max-width` (1200px)

### Tablet (768px – 1099px)
- `overflow-x: auto` + `scroll-snap-type: x mandatory`
- Cards com largura fixa (~260px), mostrando parcialmente o próximo

### Mobile (≤ 767px)
- Carrossel com `scroll-snap-align: start`
- Cards com largura `80vw`, altura fixa
- Padding lateral assimétrico para revelar próximo card
- Scroll suave nativo (sem biblioteca JS)

---

## Tokens CSS utilizados

Todos os valores seguem os tokens já definidos em `global.css`:
- Cores: `--color-verde`, `--color-areia`, `--color-gelo`, `--color-text-muted`, `--color-white`
- Tipografia: `--font-display`, `--font-body`
- Sombras: `--shadow-sm`, `--shadow-md`
- Bordas: `--radius-md`, `--radius-lg`
- Transições: `--transition`

---

## Acessibilidade

- `<section aria-label="Sugestão de pacote turístico para Bonito">`
- Lista de cards como `<ul role="list">`
- Botões WhatsApp com `aria-label` descritivo por item
- Fotos com `role="img"` e `aria-label`
- Scroll container com `tabIndex={0}` e `aria-label` para leitores de tela

---

## Arquivos a criar/modificar

| Arquivo | Ação |
|---------|------|
| `src/components/PacoteSugerido/PacoteSugerido.jsx` | Criar |
| `src/components/PacoteSugerido/PacoteSugerido.module.css` | Criar |
| `src/pages/Home.jsx` | Modificar (importar e inserir componente) |
