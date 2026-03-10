# OWASP ASVS Checker — Angular 17

A security compliance checklist application built with **Angular 17** (standalone components + Signals).

## Features

- ✅ Full OWASP ASVS v4 checklist across 11 categories (~100 requirements)
- 🔍 Filter by Level (L1/L2/L3) and category
- 🔎 Full-text search across requirement descriptions
- 📊 Real-time compliance score with animated ring indicator
- ⚡ AI-powered recommendations via Anthropic Claude API
- 🎨 Dark cybersecurity-grade UI (JetBrains Mono + Syne fonts)

## Tech Stack

- **Angular 17** with Standalone Components
- **Angular Signals** for reactive state management
- **Angular HttpClient** for API calls
- **SCSS** for styling

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/           # Score ring + Analyze button
│   │   ├── sidebar/          # Category nav + Level filters
│   │   ├── checklist/        # Main checklist with items
│   │   └── recommendations/  # AI slide-over panel
│   ├── data/
│   │   └── asvs-data.ts      # Full OWASP ASVS dataset
│   ├── models/
│   │   └── asvs.model.ts     # TypeScript interfaces
│   ├── services/
│   │   ├── asvs.service.ts   # State management (Signals)
│   │   └── ai.service.ts     # Anthropic API integration
│   ├── app.component.*       # Root shell
├── styles.scss               # Global CSS variables
└── main.ts                   # Bootstrap
```

## Setup & Run

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Open browser
http://localhost:4200
```

## Configuration

The AI recommendations call the Anthropic API via proxy. In development, Angular's dev server proxies the request. In production, configure your backend to forward `/api/anthropic` calls.

To set up a proxy for local dev, create `proxy.conf.json`:

```json
{
  "/v1": {
    "target": "https://api.anthropic.com",
    "changeOrigin": true,
    "secure": true,
    "headers": {
      "anthropic-version": "2023-06-01",
      "x-api-key": "YOUR_API_KEY_HERE"
    }
  }
}
```

Then update `angular.json` serve options:
```json
"proxyConfig": "proxy.conf.json"
```

## OWASP ASVS Categories Covered

| ID  | Category |
|-----|----------|
| V1  | Architecture, Design & Threat Modeling |
| V2  | Authentication |
| V3  | Session Management |
| V4  | Access Control |
| V5  | Validation, Sanitization & Encoding |
| V6  | Stored Cryptography |
| V7  | Error Handling & Logging |
| V8  | Data Protection |
| V9  | Communication Security |
| V13 | API & Web Service Security |
| V14 | Configuration |
