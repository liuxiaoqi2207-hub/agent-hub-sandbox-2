import test from 'node:test';
import assert from 'node:assert/strict';
import { refundable } from '../src/refund.js';

test('refundable 没退过时可以全退', () => {
  assert.equal(refundable(500, 0), 500);
});

test('refundable 已部分退款时只能退剩余金额', () => {
  assert.equal(refundable(500, 200), 300);
});

test('refundable 已全额退款时不能再退', () => {
  assert.equal(refundable(500, 500), 0);
});
