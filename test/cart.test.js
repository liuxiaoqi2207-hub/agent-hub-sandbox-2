import test from 'node:test';
import assert from 'node:assert/strict';
import { subtotal } from '../src/cart.js';

test('subtotal 把每项金额加起来', () => {
  assert.equal(subtotal([{ price: 100, qty: 2 }, { price: 50, qty: 1 }]), 250);
});
