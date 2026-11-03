import test from 'node:test';
import assert from 'node:assert/strict';
import { refundable } from '../src/refund.js';

test('refundable 没退过时可以全退', () => {
  assert.equal(refundable(500, 0), 500);
});
