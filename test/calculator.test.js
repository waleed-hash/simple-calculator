'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, power, modulo, calculate } = require('../src/calculator');

test('add', () => assert.strictEqual(add(2, 3), 5));
test('subtract', () => assert.strictEqual(subtract(5, 3), 2));
test('multiply', () => assert.strictEqual(multiply(4, 3), 12));
test('divide', () => assert.strictEqual(divide(12, 4), 3));
test('divide by zero throws', () => assert.throws(() => divide(1, 0), /divide by zero/));
test('calculate dispatches by operator', () => assert.strictEqual(calculate(6, '*', 7), 42));
test('power', () => assert.strictEqual(power(2, 10), 1024));
test('power with zero exponent', () => assert.strictEqual(power(7, 0), 1));
test('modulo', () => assert.strictEqual(modulo(10, 3), 1));
test('modulo by zero throws', () => assert.throws(() => modulo(5, 0), /modulo by zero/));
test('calculate supports ^ and %', () => {
  assert.strictEqual(calculate(3, '^', 2), 9);
  assert.strictEqual(calculate(9, '%', 4), 1);
});
test('calculate rejects unknown operators', () => assert.throws(() => calculate(1, '&', 2), /Unknown operator/));
