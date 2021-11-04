const { readFileSync, writeFileSync } = require('fs');
const angelo = "My name is Giovanni Giorgio"

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first);
// console.log(second);
writeFileSync('./content/result-sync.txt', `Hello ${angelo}`);
const write = readFileSync('./content/result-sync.txt', 'utf8');
console.log(write);