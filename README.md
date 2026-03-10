# OWASP ASVS Checker — Angular 21 + Gemini 2.5 Flash

A security compliance checklist application built with **Angular 21** and powered by **Google Gemini 2.5 Flash** for AI recommendations.

## Tech Stack

- **Angular 21** — Standalone Components + Signals
- **SCSS** — Component-scoped styling with CSS variables

## Setup

### 1. Get a Gemini API Key
Go to → **https://aistudio.google.com/apikey** and create a free API key.

### 2. Add Your Key
Open `src/environments/environment.ts` and paste your key:
```ts
export const environment = {
  production: false,
  geminiApiKey: 'AIza...'   // ← your key here
};
```

### 3. Install & Run
```bash
npm install
npm start   # → http://localhost:4200
```

## ⚠️ Security
- `src/environments/environment.ts` is in `.gitignore` — **never commit it**
- For production deployments, inject the key via CI/CD environment variables

## Project Structure
```
src/
├── environments/
│   ├── environment.ts          ← DEV key (gitignored)
│   └── environment.prod.ts     ← PROD key (gitignored)
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── checklist/
│   │   └── recommendations/
│   ├── data/asvs-data.ts
│   ├── models/asvs.model.ts
│   └── services/
│       ├── asvs.service.ts     ← State (Signals)
│       └── ai.service.ts       ← Gemini 2.5 Flash
└── styles.scss
```
