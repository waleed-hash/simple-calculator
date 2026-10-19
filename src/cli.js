#!/usr/bin/env node
'use strict';

const { calculate } = require('./calculator');

function main(argv) {
  if (argv.length !== 3) {
    console.error('Usage: calc <number> <operator> <number>');
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
