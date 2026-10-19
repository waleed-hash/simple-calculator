#!/usr/bin/env node
'use strict';

const { calculate, squareRoot } = require('./calculator');

function main(argv) {
  if (argv.length === 2 && argv[0] === 'sqrt') {
    const value = Number(argv[1]);
    if (Number.isNaN(value)) {
      console.error('The operand must be a number');
      return 1;
    }
    try {
      console.log(squareRoot(value));
      return 0;
    } catch (err) {
      console.error(err.message);
      return 1;
    }
  }
  if (argv.length !== 3) {
    console.error('Usage: calc <number> <operator> <number> | calc sqrt <number>');
    return 1;
  }
  const [rawA, operator, rawB] = argv;
  const a = Number(rawA);
  const b = Number(rawB);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Both operands must be numbers');
    return 1;
  }
  try {
    console.log(calculate(a, operator, b));
    return 0;
  } catch (err) {
    console.error(err.message);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}

module.exports = { main };
