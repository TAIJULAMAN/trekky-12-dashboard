# RV Dashboard

A Vite + React dashboard application using Redux Toolkit Query, React Router, MUI/Ant Design, TailwindCSS, and Recharts.

## Tech Stack
- **Build**: Vite
- **Framework**: React 18
- **State/Network**: Redux Toolkit Query (`@reduxjs/toolkit/query`), React Query
- **UI**: MUI, Ant Design, TailwindCSS
- **Charts**: Recharts, MUI X Charts
- **Routing**: React Router DOM

## Requirements
- **Node.js**: 18+ recommended
- **Package manager**: npm (comes with Node.js)

## Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run dev
```
3. Open the URL shown in the terminal (usually http://localhost:5173).

## Available Scripts
- **Dev**: start Vite dev server
```bash
npm run dev
```
- **Build**: production build
```bash
npm run build
```
- **Preview**: serve the production build locally
```bash
npm run preview
```
- **Lint**: run ESLint
```bash
npm run lint
```

## Environment & API Configuration
API base URLs are currently defined in `src/config/envConfig.js`:
```js
export const imgUrl = "http://10.10.20.22:5000/";
export const url = `${imgUrl}api/`;
export const getBaseUrl = () => url;
```
- **Change `imgUrl`** to point to your backend server.
- The `baseApi` in `src/Redux/api/baseApi.js` uses `getBaseUrl()` for all requests and attaches a `Bearer` token from `state.auth.token` when present.

Optional: If you prefer environment variables, you can adapt Vite’s convention (e.g., `.env`, `.env.development`, `.env.production`) and reference with `import.meta.env.VITE_API_URL`, then update `envConfig.js` accordingly.

## Project Structure (high level)
- `src/`
  - `main.jsx`: React entry
  - `config/envConfig.js`: API base URL helpers
  - `Redux/api/baseApi.js`: RTK Query base API
  - Other feature modules, components, pages, and styles

## Building for Production
```bash
npm run build
```
The output will be generated to `dist/`. You can preview it locally:
```bash
npm run preview
```

## Deployment Notes
- This is a static build produced by Vite; deploy the `dist/` folder to your static hosting provider (e.g., Vercel/Netlify).
- Ensure the API URL is reachable from the deployed domain (CORS, HTTPS, etc.).

## Linting
```bash
npm run lint
```
Configure rules/plugins in ESLint and update as needed.

## Troubleshooting
- **CORS/Network errors**: verify `imgUrl` and API availability, and backend CORS headers.
- **Auth issues**: confirm `state.auth.token` is set correctly in your auth flow.

## Environment Variables (optional, recommended)
You can externalize the API base URL using Vite env variables. Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000/
```

Then update `src/config/envConfig.js` to read from `import.meta.env` (example):

```js
export const imgUrl = import.meta.env.VITE_API_URL ?? "http://10.10.20.22:5000/";
export const url = `${imgUrl}api/`;
export const getBaseUrl = () => url;
```

This keeps per-environment settings out of source.

## Styling (TailwindCSS)
Tailwind is configured and active.
- Config: `tailwind.config.js`
- PostCSS: `postcss.config.js`
- Directives: included in `src/index.css` (`@tailwind base; @tailwind components; @tailwind utilities;`).

To customize theme, edit `tailwind.config.js` under `theme.extend` and add plugins as needed.

## Project Structure (expanded)
```text
trekky12_dashboard/
  index.html
  vite.config.js
  tailwind.config.js
  postcss.config.js
  package.json
  src/
    main.jsx
    index.css
    App.jsx
    Redux/
      api/
        baseApi.js
      ...
    config/
      envConfig.js
    routes/
      Router (router config)
    components/
    layout/
    page/
    services/
    shared/
    utils/
    assets/
```

## Development Tips
- **Change dev server port**: `npm run dev -- --port 5174`
- **ESLint autofix**: `npm run lint -- --fix`
- **API auth header**: `src/Redux/api/baseApi.js` attaches `Authorization: Bearer <token>` from `state.auth.token` when present.

## Deployment (Static Hosting)
1. Build: `npm run build` (outputs to `dist/`).
2. Deploy `dist/` to your host (e.g., Netlify, Vercel, S3/CloudFront, Nginx).
3. SPA routing:
   - Netlify: ensure SPA fallback. Add a `_redirects` file with `/* /index.html 200` if needed.
   - Vercel: Vite React SPA works by default.
4. Confirm backend CORS allows your production origin and `Authorization` header.

## Browser Support
Modern evergreen browsers (Chromium, Firefox, Safari, Edge). For legacy support, consider polyfills as needed.

## License
Proprietary. All rights reserved unless otherwise specified.
