/* 1차시도
import fs = require('fs')
const inputFile = ('example.txt')
let input = fs.readFileSync(inputFile).toString().split(' ')
let A = parseInt(input[0])
console.log("A", A)
let B = input[1].split('')
let C = parseInt(B[0])
let D = parseInt(B[1])
let E = parseInt(B[2])
console.log("result: ", A * C,A * D,A * E)
*/

/* 1차 제출
import fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
let B = input[1].split('')
let C = parseInt(B[0])
let D = parseInt(B[1])
let E = parseInt(B[2])
console.log(parseInt(input[0]) * C, parseInt(input[0]) * D, parseInt(input[0]) * E)
*/

// 레퍼런스 https://overcome-the-limits.tistory.com/245
const fs = require('fs');
const inputFile = ('example.txt')
const [A, B] = fs.readFileSync(inputFile).toString().trim().split('\n');
const [B0, B1, B2] = B.split('');

const temp1 = A * B2;
const temp2 = A * B1;
const temp3 = A * B0;
const sum = temp1 + Number(`${temp2}0`) +  Number(`${temp3}00`);

console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)

/* 2차 제출
const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [B0, B1, B2] = B.split('');

const temp1 = A * B2;
const temp2 = A * B1;
const temp3 = A * B0;
const sum = temp1 + Number(`${temp2}0`) +  Number(`${temp3}00`);

console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)
*/