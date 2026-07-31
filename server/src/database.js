import { neon } from '@neondatabase/serverless';
import { randomBytes } from 'node:crypto';

let schemaPromise;
function sql() {
  if (!process.env.DATABASE_URL) throw Object.assign(new Error('DATABASE_UNAVAILABLE'), { status: 503 });
  return neon(process.env.DATABASE_URL);
}
async function ensureSchema() {
  if (!schemaPromise) schemaPromise = (async () => {
    const query = sql();
    await query`CREATE TABLE IF NOT EXISTS users (id BIGSERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
    await query`CREATE TABLE IF NOT EXISTS resumes (id BIGSERIAL PRIMARY KEY, user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE, title TEXT NOT NULL, data JSONB NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
    await query`CREATE TABLE IF NOT EXISTS sessions (id TEXT PRIMARY KEY, user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE, expires_at TIMESTAMPTZ NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
    await query`CREATE INDEX IF NOT EXISTS resumes_user_id_idx ON resumes(user_id)`;
  })().catch(error => { schemaPromise = undefined; throw error; });
  return schemaPromise;
}
export async function db() { await ensureSchema(); return sql(); }
export const newSessionId = () => randomBytes(32).toString('base64url');
