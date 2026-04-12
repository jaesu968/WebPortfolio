# Kyle Jaesu Akuya Web Portfolio

A personal portfolio built with React and Vite to showcase web, mobile, and desktop projects.

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- CSS
- ESLint

## Features

- Intro/about section
- Project grid with tech stack details
- Media preview support (images and videos)
- Click-to-open modal for enlarged media
- Contact section with email and GitHub profile

## Project Structure

```
.
├── index.html
├── eslint.config.js
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── main.jsx
    ├── projects.js
    ├── assets/
    │   ├── JavaCalculator/
    │   ├── JavaQuizMaster/
    │   ├── OldSchoolForums/
    │   ├── ReactWebApp/
    │   ├── ShoppingList/
    │   ├── Stopwatch/
    │   ├── TipCalculator/
    │   └── Woofstagram/
    └── components/
        ├── ContactCard.jsx
        ├── Modal.jsx
        ├── Modal.css
        └── ProjectCard.jsx
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local URL shown in terminal (typically `http://localhost:5173/WebPortfolio/`).

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks
- `npm run deploy` - deploy `dist/` to GitHub Pages (uses `gh-pages`)

## Deployment

This project is configured for GitHub Pages using:

- `vite.config.js` with `base: "/WebPortfolio/"`
- `package.json` deploy scripts (`predeploy`, `deploy`)

Deploy with:

```bash
npm run deploy
```

## Notes

- Project data is managed in `src/projects.js`.
- Modal behavior and accessibility are implemented in `src/components/Modal.jsx`.