import test from 'node:test';
import assert from 'node:assert/strict';
import { subtotal } from '../src/cart.js';

test('subtotal 把每项金额加起来', () => {
  assert.equal(subtotal([{ price: 100, qty: 2 }, { price: 50, qty: 1 }]), 250);
});

test('applyDiscount 达到门槛才减', async () => {
  const { applyDiscount } = await import('../src/cart.js');
  assert.equal(applyDiscount(1000, { threshold: 1000, off: 100 }), 900);
  assert.equal(applyDiscount(999, { threshold: 1000, off: 100 }), 999);
});
