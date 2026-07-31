import bcrypt from 'bcryptjs';
import { db, newSessionId } from './database.js';

const COOKIE = 'resumecraft_session';
const cookieValue = (header = '', name) => header.split(';').map(part => part.trim()).find(part => part.startsWith(`${name}=`))?.slice(name.length + 1);
export async function sessionMiddleware(req, res, next) {
  try {
    const id = cookieValue(req.headers.cookie, COOKIE);
    if (id) { const query = await db(); const rows = await query`SELECT user_id FROM sessions WHERE id=${id} AND expires_at > NOW()`; req.userId = rows[0]?.user_id || null; }
    next();
  } catch (error) { next(error); }
}
export function requireUser(req, res, next) { if (!req.userId) return res.status(401).json({ success: false, message: 'Please log in to access saved resumes.' }); next(); }
async function startSession(res, userId) {
  const id = newSessionId(); const query = await db();
  await query`INSERT INTO sessions (id, user_id, expires_at) VALUES (${id}, ${userId}, NOW() + INTERVAL '7 days')`;
  res.cookie(COOKIE, id, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 7 * 86400_000, path: '/' });
}
export function authRoutes(app) {
  app.post('/api/auth/register', async (req, res, next) => { try { const { name, email, password } = req.body || {}; if (!name?.trim() || !/^\S+@\S+\.\S+$/.test(email || '') || typeof password !== 'string' || password.length < 8) return res.status(400).json({ success: false, message: 'Enter a name, valid email, and password of at least 8 characters.' }); const query = await db(); const rows = await query`INSERT INTO users (name, email, password_hash) VALUES (${name.trim()}, ${email.toLowerCase()}, ${await bcrypt.hash(password, 12)}) RETURNING id, name, email`; await startSession(res, rows[0].id); res.status(201).json({ success: true, user: rows[0] }); } catch (error) { if (error.code === '23505') return res.status(409).json({ success: false, message: 'An account with that email already exists.' }); next(error); } });
  app.post('/api/auth/login', async (req, res, next) => { try { const { email, password } = req.body || {}; const query = await db(); const users = await query`SELECT id, name, email, password_hash FROM users WHERE email=${(email || '').toLowerCase()}`; const user = users[0]; if (!user || !await bcrypt.compare(password || '', user.password_hash)) return res.status(401).json({ success: false, message: 'Incorrect email or password.' }); await startSession(res, user.id); res.json({ success: true, user: { id: user.id, name: user.name, email: user.email } }); } catch (error) { next(error); } });
  app.post('/api/auth/logout', async (req, res, next) => { try { const id = cookieValue(req.headers.cookie, COOKIE); if (id) { const query = await db(); await query`DELETE FROM sessions WHERE id=${id}`; } res.clearCookie(COOKIE, { path: '/' }).json({ success: true }); } catch (error) { next(error); } });
  app.get('/api/auth/me', async (req, res, next) => { try { if (!req.userId) return res.json({ success: true, user: null }); const query = await db(); const rows = await query`SELECT id, name, email FROM users WHERE id=${req.userId}`; res.json({ success: true, user: rows[0] || null }); } catch (error) { next(error); } });
}
