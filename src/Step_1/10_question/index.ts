import fs = require('fs')
const inputFile = ('example.txt')
let input = fs.readFileSync(inputFile).toString().split(' ')
let A = parseInt(input[0])
let B = parseInt(input[1])
let C = parseInt(input[2])
console.log("result : ", (A + B) % C, ((A % C) + (B % C)) % C, (A * B) % C, ((A % C) * (B % C) % C))

/*
import fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
console.log((parseInt(input[0]) + parseInt(input[1])) % parseInt(input[2]))
console.log(((parseInt(input[0]) % parseInt(input[2])) + (parseInt(input[1]) % parseInt(input[2]))) % parseInt(input[2]))
console.log((parseInt(input[0]) * parseInt(input[1])) % parseInt(input[2]))
console.log((parseInt(input[0]) % parseInt(input[2])) * (parseInt(input[1]) % parseInt(input[2])) % parseInt(input[2]))
*/