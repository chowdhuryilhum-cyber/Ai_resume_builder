import { GoogleGenerativeAI } from '@google/generative-ai';
import { prompts } from './prompts.js';

export async function askGemini(action, payload) {
  if (!process.env.GEMINI_API_KEY) throw Object.assign(new Error('AI_UNAVAILABLE'), { status: 503 });
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-2.5-flash', generationConfig: { responseMimeType: 'application/json' } });
  const result = await model.generateContent(prompts[action](payload));
  const text = result.response.text();
  try { return JSON.parse(text); } catch { throw Object.assign(new Error('INVALID_AI_RESPONSE'), { status: 502 }); }
}
