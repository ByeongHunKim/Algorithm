import fs = require('fs')
const inputFile = 'example.txt'
let input = fs.readFileSync('/dev/stdin').toString().trim();
// let input = fs.readFileSync(inputFile).toString().trim();
// let result = input + '??!'
console.log(input + '??!')