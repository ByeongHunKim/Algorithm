const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

let count = Number(input[0]);
let totalResult = '';

for(let i = 1; i <= count; i++){
    let result = input[i].toString().split(' ');
    let num1 = Number(result[0]);
    let num2 = Number(result[1]);
    let addNum = num1 + num2;
    totalResult += `Case #${i}: ${num1} + ${num2} = ${addNum}\n`
}
console.log(totalResult)