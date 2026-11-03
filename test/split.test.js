import test from 'node:test';
import assert from 'node:assert/strict';
import { splitEvenly } from '../src/split.js';

test('splitEvenly 能整除时平摊', () => {
  assert.deepEqual(splitEvenly(300, 3), [100, 100, 100]);
});
