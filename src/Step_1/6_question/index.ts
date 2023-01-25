import fs = require('fs')
const inputFile = 'example.txt'
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync(inputFile).toString().split(' ');
let a = parseInt(input[0])
let b = parseInt(input[1])
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);



