'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, calculate } = require('../src/calculator');

test('add', () => assert.strictEqual(add(2, 3), 5));
test('subtract', () => assert.strictEqual(subtract(5, 3), 2));
test('multiply', () => assert.strictEqual(multiply(4, 3), 12));
test('divide', () => assert.strictEqual(divide(12, 4), 3));
test('divide by zero throws', () => assert.throws(() => divide(1, 0), /divide by zero/));
test('calculate dispatches by operator', () => assert.strictEqual(calculate(6, '*', 7), 42));
test('calculate rejects unknown operators', () => assert.throws(() => calculate(1, '^', 2), /Unknown operator/));
