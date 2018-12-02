const babylon = require('babylon')

const code = `function square(n) {
  return n * n;
}`;

console.log(babylon.parse(code, {
    sourceType: "module",
    plugins: []
}))