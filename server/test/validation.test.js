import test from 'node:test';
import assert from 'node:assert/strict';
import { validate } from '../src/validation.js';
test('rejects malformed AI requests', () => { assert.equal(validate({}, 'chat'), 'A resume context object is required.'); assert.equal(validate({ resume: {}, message: '' }, 'chat'), 'Message must be between 1 and 4000 characters.'); });
test('accepts a valid chat request', () => assert.equal(validate({ resume: {}, message: 'Help me improve this' }, 'chat'), null));
