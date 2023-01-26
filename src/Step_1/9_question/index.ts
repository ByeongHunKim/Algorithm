import fs = require('fs')
const inputFile = ('example.txt')
let input = fs.readFileSync(inputFile).toString().split(' ')
console.log("result : ", 1 - parseInt(input[0]), 1 - parseInt(input[1]), 2 - parseInt(input[2]), 2 - parseInt(input[3]), 2 - parseInt(input[4]), 8 - parseInt(input[5]))

/* 제출용
import fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
console.log(1 - parseInt(input[0]), 1 - parseInt(input[1]), 2 - parseInt(input[2]), 2 - parseInt(input[3]), 2 - parseInt(input[4]), 8 - parseInt(input[5]))
*/
