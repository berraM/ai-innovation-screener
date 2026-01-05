# AI Innovation Screener

Evaluate your innovation ideas based on desirability, feasibility, and viability using AI.

## General Structure:
```bash
├─ backend/             # Express backend
│   ├─ .env             # to be created by the user
│   └─ ...             
├─ src/                 # React frontend
│   ├─ api/
│   │   └─ ...
│   ├─ components/
│   │   ├─ IdeaForm.tsx
│   │   ├─ EvaluationResult.tsx
│   │   └─ DimensionCard.tsx
│   ├─ App.tsx
│   └─ ...
└─ ...
```

## How to Setup:

1. Clone
```bash
git clone https://github.com/berraM/ai-innovation-screener.git
cd ai-innovation-screener
```

2. Install dependencies
```bash
npm install
cd backend
npm install
```

3. Create a .env file in folder backend with your API key
```bash
OPENROUTER_API_KEY=sk-your_openrouter_api_key
```
Note: Keep this file private; never commit it.

4. Run backend
```bash
Run backend
cd backend
npm run dev
```

5. Run frontend
```bash
cd ../
npm run dev
```

You can access the app at http://localhost:5173 by default

