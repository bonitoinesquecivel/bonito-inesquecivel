/* ============================================================
   DADOS DOS DESTINOS
   Usado na Home (DestinosGrid) e nas páginas de Galeria
   ============================================================ */

/** @type {Array<any>} */
const destinos = [
  {
    "id": 1,
    "nome": "Praia da Figueira",
    "slug": "praia-da-figueira",
    "categoria": "Passeio Natural",
    "cor": "#4FC3D0",
    "descricao": "Praia de águas doces e calmas com infraestrutura completa de lazer, tirolesa e flutuação.",
    "imagemPrincipal": "/praia-da-figueira/foto-1.jpg",
    "fotos": [
      "/praia-da-figueira/foto-1.jpg",
      "/praia-da-figueira/foto-2.jpg",
      "/praia-da-figueira/foto-3.jpg",
      "/praia-da-figueira/foto-4.jpg",
      "/praia-da-figueira/foto-5.jpg",
      "/praia-da-figueira/foto-6.jpg",
      "/praia-da-figueira/foto-7.jpg",
      "/praia-da-figueira/foto-9.jpg",
      "/praia-da-figueira/foto-10.jpg"
    ]
  },
  {
    "id": 2,
    "nome": "Parque das Cachoeiras",
    "slug": "parque-das-cachoeiras",
    "categoria": "Ecoturismo",
    "cor": "#1B3A2D",
    "descricao": "Trilha ecológica passeando por belíssimas quedas do Rio Mimoso com acesso direto para banho.",
    "imagemPrincipal": "/parque-das-cachoeiras/foto-4.jpg",
    "fotos": [
      "/parque-das-cachoeiras/foto-1.jpg",
      "/parque-das-cachoeiras/foto-3.jpg",
      "/parque-das-cachoeiras/foto-4.jpg",
      "/parque-das-cachoeiras/foto-5.jpg",
      "/parque-das-cachoeiras/foto-7.jpg",
      "/parque-das-cachoeiras/foto-8.jpg",
      "/parque-das-cachoeiras/foto-9.jpg"
    ]
  },
  {
    "id": 3,
    "nome": "Gruta Catedral",
    "slug": "gruta-catedral",
    "categoria": "Aventura",
    "cor": "#6B4F3A",
    "descricao": "Aventura subterrânea através de impressionantes formações de estalactites em um passeio contemplativo.",
    "imagemPrincipal": "/gruta-catedral/foto-1.jpg",
    "fotos": [
      "/gruta-catedral/foto-1.jpg",
      "/gruta-catedral/foto-2.png",
      "/gruta-catedral/foto-3.jpg",
      "/gruta-catedral/foto-4.jpg"
    ]
  },
  {
    "id": 4,
    "nome": "Buraco das Araras",
    "slug": "buraco-das-araras",
    "categoria": "Fauna Exótica",
    "cor": "#C0392B",
    "descricao": "A maior dolina da América do Sul e refúgio espetacular para observação de araras-vermelhas.",
    "imagemPrincipal": "/buraco-das-araras/foto-3.jpg",
    "fotos": [
      "/buraco-das-araras/foto-1.jpg",
      "/buraco-das-araras/foto-2.jpg",
      "/buraco-das-araras/foto-3.jpg",
      "/buraco-das-araras/foto-4.jpg",
      "/buraco-das-araras/foto-5.jpg",
      "/buraco-das-araras/foto-7.jpg"
    ]
  },
  {
    "id": 5,
    "nome": "Balneário Jardim Ecopark",
    "slug": "balneario-jardim-ecopark",
    "categoria": "Balneário",
    "cor": "#27AE8F",
    "descricao": "Recanto de águas calmas e cristalinas ideal para relaxar com a família no gramado às margens do rio.",
    "fotos": [
      "/balneario-jardim-ecopark/foto-1.jpg",
      "/balneario-jardim-ecopark/foto-2.webp",
      "/balneario-jardim-ecopark/foto-3.jpg",
      "/balneario-jardim-ecopark/foto-4.jpg",
      "/balneario-jardim-ecopark/foto-5.jpg",
      "/balneario-jardim-ecopark/foto-6.webp",
      "/balneario-jardim-ecopark/foto-7.jpg",
      "/balneario-jardim-ecopark/foto-8.webp",
      "/balneario-jardim-ecopark/foto-9.jpg",
      "/balneario-jardim-ecopark/foto-10.webp",
      "/balneario-jardim-ecopark/foto-11.jpg",
      "/balneario-jardim-ecopark/foto-12.jpg"
    ],
    "imagemPrincipal": "/balneario-jardim-ecopark/foto-1.jpg"
  },
  {
    "id": 6,
    "nome": "Pantanal Jungle Lodge",
    "slug": "pantanal-jungle-lodge",
    "categoria": "Hospedagem",
    "cor": "#2E6E4E",
    "descricao": "Hospedagem rústica em palafitas às margens do Rio Miranda para imersão e safári no coração do Pantanal.",
    "fotos": [
      "/pantanal-jungle-lodge/foto-1.jpg",
      "/pantanal-jungle-lodge/foto-2.jpg",
      "/pantanal-jungle-lodge/foto-3.jpg",
      "/pantanal-jungle-lodge/foto-4.jpg",
      "/pantanal-jungle-lodge/foto-5.jpg",
      "/pantanal-jungle-lodge/foto-6.jpg",
      "/pantanal-jungle-lodge/foto-7.jpg",
      "/pantanal-jungle-lodge/foto-8.jpg",
      "/pantanal-jungle-lodge/foto-9.jpg",
      "/pantanal-jungle-lodge/foto-10.jpg"
    ],
    "imagemPrincipal": "/pantanal-jungle-lodge/foto-1.jpg"
  },
  {
    "id": 7,
    "nome": "Hotel da Praça",
    "slug": "hotel-da-praca",
    "categoria": "Hospedagem",
    "cor": "#D4A95A",
    "descricao": "Acomodações confortáveis localizadas no point central da cidade, exatamente na Praça da Liberdade.",
    "fotos": [
      "/hotel-da-praca/foto-1.jpg",
      "/hotel-da-praca/foto-2.jpg",
      "/hotel-da-praca/foto-3.jpg",
      "/hotel-da-praca/foto-4.jpg",
      "/hotel-da-praca/foto-5.jpg",
      "/hotel-da-praca/foto-6.jpg",
      "/hotel-da-praca/foto-7.jpg",
      "/hotel-da-praca/foto-8.jpg",
      "/hotel-da-praca/foto-9.jpg",
      "/hotel-da-praca/foto-10.jpg"
    ],
    "imagemPrincipal": "/hotel-da-praca/foto-1.jpg"
  },
  {
    "id": 8,
    "nome": "Hotel Bonsai",
    "slug": "hotel-bonsai",
    "categoria": "Hospedagem",
    "cor": "#5B8A6D",
    "descricao": "Ambiente acolhedor e familiar a poucos passos do centro comercial, cercado por jardins e área de lazer.",
    "fotos": [
      "/hotel-bonsai/foto-1.jpg",
      "/hotel-bonsai/foto-2.jpg",
      "/hotel-bonsai/foto-3.jpg",
      "/hotel-bonsai/foto-4.jpg",
      "/hotel-bonsai/foto-5.jpg",
      "/hotel-bonsai/foto-6.jpg",
      "/hotel-bonsai/foto-7.jpg",
      "/hotel-bonsai/foto-8.jpg",
      "/hotel-bonsai/foto-9.jpg",
      "/hotel-bonsai/foto-10.jpg",
      "/hotel-bonsai/foto-11.jpg",
      "/hotel-bonsai/foto-12.jpg",
      "/hotel-bonsai/foto-13.jpg"
    ],
    "imagemPrincipal": "/hotel-bonsai/foto-1.jpg"
  },
  {
    "id": 9,
    "nome": "Shopping China",
    "slug": "shopping-china",
    "categoria": "Compras & Lazer",
    "cor": "#8E6BBF",
    "descricao": "O maior e mais famoso complexo de compras de produtos importados situado na fronteira com o Paraguai.",
    "fotos": [
      "/shopping-china/foto-1.jpg",
      "/shopping-china/foto-2.jpg",
      "/shopping-china/foto-3.jpg",
      "/shopping-china/foto-4.jpg",
      "/shopping-china/foto-5.jpg",
      "/shopping-china/foto-6.jpg",
      "/shopping-china/foto-7.jpg"
    ],
    "imagemPrincipal": "/shopping-china/foto-1.jpg"
  },
  {
    "id": 10,
    "nome": "Hotel Pousada do Bosque",
    "slug": "hotel-pousada-do-bosque",
    "categoria": "Hospedagem",
    "cor": "#3D7A5C",
    "descricao": "Hotel tradicional e muito arborizado em Ponta Porã, a apenas alguns minutos da fronteira paraguaia.",
    "fotos": [
      "/hotel-pousada-do-bosque/imgi_104_area-de-lazer-da-pousada.jpg",
      "/hotel-pousada-do-bosque/imgi_133_image-ponta-pora-hotel-pousada-do-bosque-1.jpg",
      "/hotel-pousada-do-bosque/imgi_156_photo0jpg.jpg",
      "/hotel-pousada-do-bosque/imgi_183_image-canela-hotel-pousada-do-bosque-6.jpg",
      "/hotel-pousada-do-bosque/imgi_175_image-bonito-mato-grosso-do-sul-chale-do-bosque-53.jpg",
      "/hotel-pousada-do-bosque/imgi_112_bda1e9f9.jpg",
      "/hotel-pousada-do-bosque/imgi_165_96dfac1e.jpg",
      "/hotel-pousada-do-bosque/imgi_127_ebd5b736.jpg",
      "/hotel-pousada-do-bosque/imgi_155_b1749792372f75c884bc28ee30d17daf90163e96.jpg"
    ],
    "imagemPrincipal": "/hotel-pousada-do-bosque/imgi_104_area-de-lazer-da-pousada.jpg"
  }
]

export default destinos
