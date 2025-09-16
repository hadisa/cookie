Cookie Site (Flavour)
=====================

A modern, responsive cookie shop website built with React, TypeScript, Vite, React Router, and Tailwind CSS. It showcases product categories, featured items, a contact form with validation, FAQ, and more — optimized for performance and developer experience.

Author: Hadisa


Table of Contents
-----------------
- Overview
- Features
- Tech Stack
- Project Structure
- Getting Started
  - Prerequisites
  - Clone
  - Install Dependencies
  - Environment Variables (optional)
  - Run in Development
  - Build for Production
  - Preview Production Build
- Available Scripts
- Linting and Formatting
- Routing Overview
- Deployment
  - Netlify
  - Vercel
  - GitHub Pages
- Troubleshooting
- Contributing
- License


Overview
--------
Cookie Site (Flavour) is a single-page application (SPA) that demonstrates a complete marketing and e‑commerce style front end for a bakery/cookie brand. It includes reusable components, a dynamic breadcrumb, accessible forms, and adaptable sections for real product data.


Features
--------
- Fast, modern toolchain with Vite + React + TypeScript
- Client-side routing with React Router v6
- Tailwind CSS for rapid, consistent styling
- Dynamic breadcrumbs that reflect the current path
- Reusable UI sections: hero, categories, featured products, newsletter, FAQ, etc.
- Contact form with robust validation using React Hook Form + Zod
- Accessible and responsive UI (mobile-first)
- ESLint configured for code quality


Tech Stack
----------
- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- ESLint
- React Hook Form + Zod (form validation)
- lucide-react (icons)


Project Structure
-----------------
High-level layout (non-exhaustive):

```
cookie-site/
├─ src/
│  ├─ components/
│  │  ├─ breadcrumb.tsx
│  │  ├─ about-hero.tsx
│  │  ├─ category.tsx
│  │  ├─ category-hero.tsx
│  │  ├─ contact-form.tsx
│  │  ├─ contact-hero.tsx
│  │  ├─ contact-map.tsx
│  │  ├─ faq.tsx
│  │  ├─ featured-products.tsx
│  │  ├─ footer.tsx
│  │  ├─ header.tsx
│  │  ├─ hero.tsx
│  │  ├─ newsletter.tsx
│  │  ├─ our-process.tsx
│  │  ├─ our-values.tsx
│  │  ├─ products.tsx
│  │  ├─ shopping-panel.tsx
│  │  ├─ special-offers.tsx
│  │  ├─ story.tsx
│  │  └─ team.tsx
│  ├─ pages/
│  │  ├─ home.tsx
│  │  ├─ about.tsx
│  │  ├─ contact.tsx
│  │  └─ categories.tsx
│  ├─ contexts/
│  ├─ data/
│  ├─ hooks/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ router.tsx
├─ public/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
└─ vite.config.ts
```


Getting Started
---------------

Prerequisites
-------------
- Node.js 18+ (LTS recommended)
- npm 9+ (or Yarn/Pnpm if you prefer, update commands accordingly)

Verify your versions:

```
node -v
npm -v
```


Clone
-----
```
git clone <your_repo_url>.git cookie-site
cd cookie-site
```


Install Dependencies
--------------------
```
npm install
```


Environment Variables (optional)
---------------------------------
This project does not require environment variables by default. If you later add APIs or keys, create a `.env` file at the project root and prefix variables with `VITE_` to expose them to the client at build time, for example:

```
# .env
VITE_API_BASE_URL=https://api.example.com
```


Run in Development
------------------
Start the development server with HMR (Hot Module Replacement):

```
npm run dev
```

By default Vite runs at http://localhost:5173 (check your terminal for the exact URL).


Build for Production
--------------------
Create an optimized production build:

```
npm run build
```

The output will be in the `dist/` directory.


Preview Production Build
------------------------
Serve the built assets locally to verify the production build:

```
npm run preview
```


Available Scripts
-----------------
Common scripts defined in `package.json` (adjust if your package.json differs):

- `npm run dev` — Start the Vite development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Lint the project with ESLint (if configured)


Linting and Formatting
----------------------
- ESLint is configured to maintain code quality and consistency. Run:

```
npm run lint
```

- If you add Prettier (optional), configure it and run via `npm run format` (or your preferred script).


Routing Overview
----------------
Client-side routing is set up in `src/router.tsx` using React Router:

```
/
├─ (index) -> Home
├─ /about -> About
├─ /contact -> Contact
└─ /categories -> Categories
```

Breadcrumbs are generated dynamically from the current URL path using `useLocation()` and React Router `Link`s. Add new routes by updating `src/router.tsx`. To customize breadcrumb labels for new paths, extend the title map in `src/components/breadcrumb.tsx`.


Deployment
----------

Netlify
-------
1. Run `npm run build`.
2. Drag the `dist/` folder into Netlify Drop, or connect your Git repo and set the build command to `npm run build` and publish directory to `dist`.
3. For SPA routing, add a `_redirects` file at the project root (or configure within Netlify) with:

```
/*    /index.html   200
```


Vercel
------
1. Install the Vercel CLI (`npm i -g vercel`) or use the dashboard.
2. Set the framework preset to “Vite”.
3. Build command: `npm run build`, Output directory: `dist`.


GitHub Pages
------------
1. Build: `npm run build`.
2. Serve `dist/` with GitHub Pages. For SPAs, ensure all routes serve `index.html` (you may need additional configuration or a 404 redirect to `/index.html`).


Troubleshooting
---------------
- Port already in use: Change the dev server port, e.g. `vite --port 3000` or set `"dev": "vite --port 3000"`.
- Styles not applying: Confirm Tailwind is configured in `tailwind.config.js` and `index.css` imports `@tailwind base; @tailwind components; @tailwind utilities;`.
- Router not working on refresh in production: Make sure your host is configured to fallback all routes to `index.html` (see Netlify `_redirects`).
- Type errors: Ensure you’re using Node 18+ and have TypeScript dependencies installed. Run `npm i` again to resolve missing packages.


Contributing
------------
Contributions are welcome! Feel free to open an issue or submit a pull request. Please adhere to conventional best practices—write clear commit messages, include screenshots for UI changes, and keep PRs focused.


License
-------
This project is open-source. If you need a specific license (e.g., MIT), add a `LICENSE` file to the repository.
