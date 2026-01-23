# Casestudy — Interactive React UI (Vite)

A small React app scaffolded with Vite showcasing interactive UI components: `Ballpit`, `FlowingMenu`, and `Lanyard`. The project includes simple routing for `Home`, `Account`, and `Orders` pages.

## Features

- Interactive visual components for experimentation and demo.
- Client-side routing with separate page components.
- Fast dev server via Vite and production build support.

## Project Structure

- public/ — static assets
- src/
  - assets/ — images and static media
  - components/
    - Ballpit.jsx / Ballpit.css
    - FlowingMenu.jsx / FlowingMenu.css
    - Lanyard.jsx / Lanyard.css
  - pages/
    - Home.jsx
    - Account.jsx
    - Orders.jsx
  - App.jsx
  - main.jsx

## Prerequisites

- Node.js 16+ (or compatible)
- npm or yarn

## Setup & Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

This opens the app with Vite's fast HMR (Hot Module Replacement).

## Build & Preview

Create a production build and preview the output locally:

```bash
npm run build
npm run preview
```

## Notes

- The main interactive pieces are in `src/components/` and the example pages are in `src/pages/`.
- On Windows use PowerShell or a compatible terminal to run the commands above.

## Contributing

If you'd like changes (more examples, clearer docs for each component, or a demo page), tell me what to add and I will update the README and code accordingly.

## License

Include your license here (e.g., MIT) or tell me what to put.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
