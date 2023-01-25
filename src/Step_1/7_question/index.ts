import fs = require('fs')
const inputFile = 'example.txt'
let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync(inputFile).toString()
// let result = input + '??!'
console.log(input + '??!')