const xss = require('xss');

if (process.argv.length < 3) {
  console.log('node test_xss.js <string>');
  process.exit(0);
}
const input = process.argv[2];
console.log(`*** input="${input}"`);

// scriptは削除する。
const xssOptions = {
  whiteList: [],
  //stripIgnoreTag: true,
  stripIgnoreTagBody: ['script'],
};

const result = xss(input, xssOptions);

// script=removedになるので、そこだけどうするか。

console.log(result);
