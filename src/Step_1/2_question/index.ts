import fs = require('fs')
const inputfile = 'example.txt'
let input = fs.readFileSync(inputfile).toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a+b);