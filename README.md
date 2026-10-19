# simple-calculator

A tiny command-line calculator.

```
node src/cli.js 6 '*' 7   # 42
```

Round the result with `--precision`:

```
node src/cli.js 10 / 3 --precision 2   # 3.33
```

Supported operators: `+`, `-`, `*`, `/`.

## Tests

```
npm test
```
