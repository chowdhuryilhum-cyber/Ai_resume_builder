# ResumeCraft AI

An accessible, beginner-friendly resume builder with a live A4 preview, local autosave, three ATS-friendly templates, printable PDF export, and a server-side Gemini assistant.

## Quick start

1. Copy `.env.example` to `.env`, set `DATABASE_URL` to a hosted Postgres database, and set `GEMINI_API_KEY` to enable AI features (the editor works without it).
2. Run `npm install`.
3. Run `npm run dev`, then open `http://localhost:5173`.

Use `npm run build` to make a production client build and `npm test` to run API validation tests. The **Download PDF** button opens the browser print dialog; choose **Save as PDF** for selectable, ATS-friendly text.

To demonstrate it quickly, open the builder, fill in a few fields (or use the values from `sample-resume.json`), select a template, ask the assistant for a summary after configuring Gemini, then download as PDF. The server provides `/api/auth/register`, `/api/auth/login`, `/api/auth/logout`, and protected SQLite-backed `/api/resumes` endpoints using secure HTTP-only cookie sessions—no JWT tokens.

## Architecture

- `client/`: React UI, reusable form/preview/assistant components, browser localStorage autosave.
- `server/`: Express API, input validation, rate limiting, centralized Gemini service and prompt templates.
- AI requests use only the contextual data supplied by the client. API keys never reach the browser.

## Deploy to Vercel

1. Create a serverless Postgres database (for example, add the Neon integration in the Vercel Marketplace) and copy its connection string to `DATABASE_URL`.
2. Import this repository into Vercel. It is already configured with `vercel.json` to build the Vite client and serve the Express API from `/api`.
3. Add `DATABASE_URL`, `GEMINI_API_KEY`, and optionally `GEMINI_MODEL` in **Project Settings → Environment Variables** for Production and Preview.
4. Deploy. Tables are initialized automatically on the first database request.

Do not use SQLite on Vercel: its function filesystem is not persistent. This version uses Postgres and database-backed opaque cookie sessions, not JWTs.
