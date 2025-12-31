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

Essas escolhas não são obrigatórias para uma landing page,  
mas refletem **maturidade técnica e visão de longo prazo**.

---

## 🗂️ Estrutura Essencial

src/
└─ app/
├─ layout.tsx
├─ page.tsx
└─ globals.css
└─ components



public/
├─ favicon.ico
├─ icon.png
├─ apple-touch-icon.png
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
└─ site.webmanifest


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