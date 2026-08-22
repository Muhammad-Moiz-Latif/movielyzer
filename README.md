<div align="center">

<!-- Swap this for an actual banner/screenshot of the landing page -->
<img src="./public/banner.png" alt="Movielyzer — AI-powered video search" width="100%" />

# 🎬 MOVIELYZER

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Frontend%20Prototype-orange?style=flat-square)](#-notes)

### Search Smarter. Watch Faster.

**An AI-first product experience for searching video content with speed and precision.**
Sleek dark UI, motion-driven storytelling, and a conversion-ready frontend for the future of video discovery.

</div>

---

## Overview

**Movielyzer** is a modern frontend for an AI-powered video search and discovery platform. The product presents a sleek landing page, feature highlights, pricing, and auth screens for a product that helps users search through video content with speed and precision — all wrapped in a polished dark theme with motion-driven UI.

This repo currently focuses on the **user-facing experience and product frontend**: branding, storytelling, and app flow, ready to be wired into a real backend.

---

## Why Movielyzer

| Feature | Value |
|---|---|
| **AI-first search** | Positioned around fast, intelligent video discovery — not keyword guesswork |
| **Speed-focused UX** | Every section built to communicate precision and performance |
| **Conversion-ready flow** | Pricing, CTAs, and auth screens designed to move users to action |
| **Premium dark aesthetic** | High-contrast, motion-driven interface that feels built, not bolted on |

---

## Core Experience

- 🎯 Bold landing page with hero section and product storytelling
- 🧩 Feature cards for search, speed, upload flow, and security
- ⚙️ Interactive "How it Works" section with motion design
- 💳 Pricing and CTA sections for conversion-focused UX
- 🔐 Authentication routes for Sign In and Log In
- 📄 About, Contact, FAQ, and Privacy Policy pages
- 📱 Fully responsive layout built with React + Tailwind CSS

---

## Tech Stack

<table>
<tr><th>Core</th><th>UI & Motion</th></tr>
<tr valign="top">
<td>

- React 19
- TypeScript
- Vite
- React Router DOM
- ESLint

</td>
<td>

- Tailwind CSS
- Framer Motion
- Radix UI primitives
- Lucide React

</td>
</tr>
</table>

---

## Project Structure

```text
my-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── AboutUs.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── JoinUs.tsx
│   │   ├── Login.tsx
│   │   ├── navbar.tsx
│   │   ├── pricing.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── SignIn.tsx
│   │   └── stats.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

---

## Available Scripts

```bash
npm run dev       # start local development server
npm run build     # create production build
npm run preview   # preview production build
npm run lint       # lint project files
```

---

## App Overview

The app includes:

- Home landing page
- Product/feature-focused storytelling
- Pricing section
- FAQ and privacy pages
- Contact page
- Sign-in and login experience

Routes are configured in `src/App.tsx`:

| Route | Page |
|---|---|
| `/` | Home |
| `/About` | About Us |
| `/Contact` | Contact |
| `/Policy` | Privacy Policy |
| `/FAQ` | FAQ |
| `/SignIn` | Sign In |
| `/LogIn` | Log In |

---

## Brand Direction

Movielyzer is intentionally built with a **precise, high-performance aesthetic**:

- dark surfaces with sharp, high-contrast accents
- confident typography and clean spacing
- motion-driven storytelling over static sections
- conversion-focused marketing flow, end to end

The goal: make the product feel **fast, intelligent, and effortless** — before a single video is even searched.

---

## Notes

This repository is a **frontend prototype / product showcase**, not a complete backend-powered AI video platform. The current codebase focuses on the interface, branding, product marketing, and app flow.

---

## Future Enhancements

- [ ] Real authentication integration
- [ ] API connection for video upload and search
- [ ] Backend for AI transcription and indexing
- [ ] Dashboard for video library management
- [ ] Cloud deployment setup
- [ ] Database and user accounts

---

## License

This project does not currently include a license file. If you plan to distribute or deploy it publicly, add a license such as MIT or Apache 2.0.

## Contributing

Contributions are welcome. If you want to improve the UI, add features, or connect this frontend to a backend service, open a pull request with a clear description of the change.

<div align="center">

---

**Movielyzer** — search smarter, watch faster.

</div>
