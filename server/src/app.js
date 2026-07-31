import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { validate } from './validation.js';
import { askGemini } from './gemini.js';
import { authRoutes, sessionMiddleware } from './auth.js';
import { resumeRoutes } from './resumes.js';

export const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '150kb' }));
app.use(sessionMiddleware);
authRoutes(app);
resumeRoutes(app);
const limiter = rateLimit({ windowMs: 60_000, max: 20, standardHeaders: true, legacyHeaders: false, message: { success: false, message: 'Please wait a moment before making another AI request.' } });
for (const action of ['chat', 'improve', 'summary', 'review']) app.post(`/api/ai/${action === 'improve' ? 'improve-section' : action === 'summary' ? 'generate-summary' : action === 'review' ? 'review-resume' : 'chat'}`, limiter, async (req, res) => {
  const error = validate(req.body, action);
  if (error) return res.status(400).json({ success: false, message: error });
  try { res.json({ success: true, data: await askGemini(action, req.body) }); }
  catch (err) { res.status(err.status || 502).json({ success: false, message: err.message === 'AI_UNAVAILABLE' ? 'The AI assistant is temporarily unavailable. You can keep editing manually.' : 'The AI response could not be processed. Please try again.' }); }
});
app.use((err, req, res, next) => { if (err.message === 'DATABASE_UNAVAILABLE') return res.status(503).json({ success: false, message: 'Database is not configured.' }); res.status(500).json({ success: false, message: 'Something went wrong.' }); });
export default app;
