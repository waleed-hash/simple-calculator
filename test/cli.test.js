'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { parsePrecision, formatResult } = require('../src/cli');

test('parsePrecision returns null when the flag is absent', () => {
  assert.deepStrictEqual(parsePrecision(['1', '+', '2']), { precision: null, rest: ['1', '+', '2'] });
});

test('parsePrecision reads the flag and removes it from the arguments', () => {
  assert.deepStrictEqual(parsePrecision(['10', '/', '3', '--precision', '2']), { precision: 2, rest: ['10', '/', '3'] });
});

test('formatResult rounds to the requested digits', () => {
  assert.strictEqual(formatResult(10 / 3, 2), '3.33');
});

test('formatResult leaves the value alone without a precision', () => {
  assert.strictEqual(formatResult(0.5, null), '0.5');
});
