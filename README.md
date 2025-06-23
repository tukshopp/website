# Tukshopp Customer Web Marketplace

> Production URL: <https://tukshopp.ng>

This repository contains the customer-facing web marketplace for **Tukshopp**—a commerce platform that connects customers with local vendors for on-demand delivery.

⚠️ **Note:** The repository currently hosts a basic landing/marketing site. The fully-featured marketplace flows listed below are to be implemented during the assessment.

## ✨ Key Features

• **Authentication** – Email/password or phone/OTP login using Tukshopp Auth Service.  
• **Marketplace Feed** – Infinite-scroll product grid inspired by the mobile app home screen.  
• **Search** – Unified search across products & vendors with instant results.  
• **Vendor Profile** – Banner, ratings, opening hours and full catalogue.  
• **Cart Management** – Add / update / remove items via SDK cart endpoints, state persisted across sessions.  
• **Checkout Flow** – Order intent and summary page (payment step stubbed).  
• **Responsive UI** – Built with [Mantine](https://mantine.dev/) + Tailwind for rapid, accessible components.  
• **Storybook & Tests** – Component isolation and Jest/RTL tests for reliability.

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (Pages Router) |
| Language  | TypeScript |
| UI        | Mantine UI + TailwindCSS |
| State     | Zustand / Redux Toolkit |
| Data-Fetching | TanStack Query |
| API Client | Auto-generated SDK in `src/sdk` (OpenAPI) |
| Tooling   | Jest • Storybook • ESLint • Prettier |

## 🔧 Getting Started

```bash
# 1. Clone
$ git clone https://github.com/tukshopp/website.git && cd website

# 2. Install deps (Yarn 1.x)
$ yarn

# 3. Configure environment
$ cp .env.example .env.local
# → fill NEXT_PUBLIC_API_BASE_URL and any other vars

# 4. Run in dev mode
$ yarn dev
```

Visit <http://localhost:3000> to see the app.

## 🗺️ Project Structure (excerpt)

```text
components/      reusable UI & feature components
data/            static fixture data
pages/           Next.js pages (routes)
src/sdk/         Auto-generated API client
styles/          Global styles (Tailwind)
storybook/       Component explorer config
test-utils/      Jest / RTL helpers
```

## 📑 API & Docs

<!-- Detailed API references are internal. Refer to the generated SDK in `src/sdk` or request access if needed. -->

## 🎨 Design Resources

Figma mobile reference: <https://www.figma.com/design/nTdzRs4uGnF4qyR4sHhQDn/Tukshopp?node-id=25-1970&p=f&t=FLExi6dNr7UwDD7X-0>

## 🤝 Contributing

1. Create a branch `your-name/task` (e.g. `jane-doe/checkout-flow`).  
2. Commit early & often, push to GitHub.  
3. Your branch will be reviewed directly—no need to open a PR to `master`.

## 🗣️ Support / Questions

Email **tshopppro@gmail.com** and someone from the team will get back to you.

---
© Tukshopp 2025. All rights reserved.
