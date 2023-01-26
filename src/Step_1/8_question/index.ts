import fs = require('fs')
const inputFile = 'example.txt'
let input = parseInt(fs.readFileSync(inputFile).toString().trim());
console.log(input - 543)

/* 제출용
import fs = require('fs')
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
console.log(input - 543)
*/
