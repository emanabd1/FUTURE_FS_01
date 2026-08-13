# Full-Stack Personal Portfolio

React + Vite frontend, Node.js + Express backend, MongoDB, contact API, CV download and RAG-style portfolio chatbot.

## 1. Backend
```bash
cd server
npm install
copy .env.example .env
# put your MongoDB URI in .env
npm run dev
```
Put your CV at `server/public/cv.pdf`.

Seed the knowledge base once with the JSON in `server/seed-knowledge.json`. Example using PowerShell:
```powershell
$body = Get-Content .\seed-knowledge.json -Raw
Invoke-RestMethod -Uri http://localhost:5000/api/seed -Method Post -ContentType 'application/json' -Body $body
```
For AI-generated answers, add an OpenAI API key in `.env`. Without it, the API still retrieves relevant knowledge and returns the best matching profile entry.

## 2. Frontend
```bash
cd client
npm install
copy .env.example .env
npm run dev
```

## 3. Replace placeholders
- `client/src/data/profile.js`: name, real bio, skills and project links.
- `client/src/App.jsx`: email, GitHub, LinkedIn and image placeholders.
- `client/src/assets/`: add profile/hero/project images.
- `server/public/cv.pdf`: add your real CV.
- `server/seed-knowledge.json`: expand with your exact projects, certificates, education, skills and experience.

## 4. Task alignment
The Future Interns Task 1 asks for a professional portfolio with homepage, projects, about/resume, contact and responsive presentation. This starter includes those plus MongoDB, contact storage, CV download and the requested personal RAG assistant.
