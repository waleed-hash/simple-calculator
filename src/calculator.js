'use strict';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function calculate(a, operator, b) {
  const fn = operations[operator];
  if (!fn) {
    throw new Error(`Unknown operator: ${operator}`);
  }
  return fn(a, b);
}

module.exports = { add, subtract, multiply, divide, calculate };
