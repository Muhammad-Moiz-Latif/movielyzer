# Movielyzer

Movielyzer is a modern frontend for an AI-powered video search and discovery platform. The project presents a sleek product landing page, feature highlights, pricing, auth screens, and supporting pages for a product that helps users search through video content with speed and precision.

This repo currently focuses on the user-facing experience and product frontend, with a polished dark theme, motion-driven UI, and responsive layout.

## ✨ Highlights

- AI-first product positioning for intelligent video search
- Bold landing page with hero section and product storytelling
- Feature cards for search, speed, upload flow, and security
- How-it-works section with interactive motion design
- Pricing and CTA sections for conversion-focused UX
- Authentication routes for Sign In and Log In
- About, Contact, FAQ, and Privacy Policy pages
- Responsive layout built with React + Tailwind CSS

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Radix UI primitives
- Lucide React
- ESLint

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```bash
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

## 🧩 App Overview

The app includes:

- Home landing page
- Product/feature-focused storytelling
- Pricing section
- FAQ and privacy pages
- Contact page
- Sign-in and login experience

The routes are configured in `src/App.tsx` and include pages like:

- `/`
- `/About`
- `/Contact`
- `/Policy`
- `/FAQ`
- `/SignIn`
- `/LogIn`

## 📝 Notes

This repository is a frontend prototype / product showcase rather than a complete backend-powered AI video platform. The current codebase focuses on the user interface, branding, product marketing, and app flow.

## 🔧 Future Enhancements

Potential next steps for the project could include:

- Real authentication integration
- API connection for video upload and search
- Backend for AI transcription and indexing
- Dashboard for video library management
- Cloud deployment setup
- Database and user accounts

## 🚦 License

This project does not currently include a license file. If you plan to distribute or deploy it publicly, add a license such as MIT or Apache 2.0.

## 💡 Contributing

Contributions are welcome. If you want to improve the UI, add features, or connect this frontend to a backend service, open a pull request with a clear description of the change.

---

Built with React, Tailwind, and motion-driven design for a premium AI product experience.

