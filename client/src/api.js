export async function aiRequest(path, body) {
  const response = await fetch(`/api/ai/${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.message || 'AI request failed.');
  return payload.data;
}
export async function api(path, options = {}) {
  const response = await fetch(path, { credentials: 'include', headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  const payload = response.status === 204 ? {} : await response.json();
  if (!response.ok) throw new Error(payload.message || 'Request failed.');
  return payload;
}
