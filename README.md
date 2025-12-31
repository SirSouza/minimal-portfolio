# 🟢 Anorak — Minimal Portfolio

Portfolio pessoal desenvolvido como **landing page**, com foco em **design minimalista**, estética retrô e **boas práticas modernas de front-end**.

O projeto foi pensado para ser simples na superfície, mas **bem estruturado por baixo**, permitindo crescimento sem retrabalho.

---

## ⚙️ Stack

- **Next.js (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion / Motion**
- **GSAP**
- **Radix UI**
- **Lucide / React Icons**
- **Vercel** (deploy)

---

## ⚙️ Componentes

Foi utilizado componentes de libs variadas de acordo com a necessidade do projeto.
Um destaque para o ScrollReveal da biblioteca de componentes Lighstwind que foi modificado para 
aplicar o efeito tanto em texto como em outros componentes, modo texto e modo container.
Outros componentes também sofreram pequenas mudanças, os devidos créditos foi deixado no footer do projeto.

## 🧠 Decisões Técnicas

Mesmo sendo uma landing page, o projeto utiliza:

- **Metadata nativa do Next.js**
  - Título padrão + template para páginas futuras
  - SEO limpo e escalável

- **Favicon completo**
  - Desktop
  - iOS (Apple Touch Icon)
  - Android / PWA (Web Manifest)

- **Arquitetura preparada para expansão**
  - Estrutura pronta para novas rotas (`/projects`, `/about`, etc.)
  - Sem necessidade de refatoração futura


---

## 🗂️ Estrutura Essencial

/
├── public
└── src
    ├── app
    │   ├── global.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── componentes
    ├── hooks
    └── lib


---

## 🏷️ Metadata (SEO)

O título do site é controlado via `metadata`:

```ts
title: {
  default: "Anorak | Portfolio",
  template: "%s • Anorak",
}
Isso garante:
Título consistent
Facilidade para páginas futuras
Melhor leitura por buscadores e compartilhamentos


▶️ Rodando localmente
npm install
npm run dev

Acesse:
👉 http://localhost:3000

🏗️ Build de produção
npm run build
npm run start

🌐 Deploy

Deploy automatizado via Vercel, com build a cada push na branch principal.

👤 Autor

Anorak
Front-end Developer
Portfolio pessoal