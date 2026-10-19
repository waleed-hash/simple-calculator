#!/usr/bin/env node
'use strict';

const { calculate } = require('./calculator');

function parsePrecision(argv) {
  const index = argv.indexOf('--precision');
  if (index === -1) {
    return { precision: null, rest: argv };
  }
  const precision = Number(argv[index + 1]);
  const rest = argv.slice(0, index).concat(argv.slice(index + 2));
  return { precision, rest };
}

function formatResult(value, precision) {
  if (precision === null) {
    return String(value);
  }
  return value.toFixed(precision);
}

function main(rawArgv) {
  const { precision, rest: argv } = parsePrecision(rawArgv);
  if (precision !== null && (!Number.isInteger(precision) || precision < 0 || precision > 20)) {
    console.error('--precision must be a whole number between 0 and 20');
    return 1;
  }
  if (argv.length !== 3) {
    console.error('Usage: calc <number> <operator> <number> [--precision <digits>]');
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
    console.log(formatResult(calculate(a, operator, b), precision));
    return 0;
  } catch (err) {
    console.error(err.message);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}

module.exports = { main, parsePrecision, formatResult };
