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

## Deployment Notes
- This is a static build produced by Vite; deploy the `dist/` folder to your static hosting provider (e.g., Vercel/Netlify).
- Ensure the API URL is reachable from the deployed domain (CORS, HTTPS, etc.).

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


## Browser Support
Modern evergreen browsers (Chromium, Firefox, Safari, Edge). For legacy support, consider polyfills as needed.

## License
Proprietary. All rights reserved unless otherwise specified.
