const isObject = value => value && typeof value === 'object' && !Array.isArray(value);
export function validate(body, action) {
  if (!isObject(body)) return 'A JSON request body is required.';
  if (!isObject(body.resume)) return 'A resume context object is required.';
  if (action === 'chat' && (typeof body.message !== 'string' || !body.message.trim() || body.message.length > 4000)) return 'Message must be between 1 and 4000 characters.';
  if (action === 'improve' && (typeof body.section !== 'string' || typeof body.content !== 'string' || !body.content.trim())) return 'Section and content are required.';
  return null;
}
