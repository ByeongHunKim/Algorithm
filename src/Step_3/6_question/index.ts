const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const count = Number(input[0]);

let totalResult = '';
for(let i = 1; i <= count; i++){
    let result = input[i].toString().split(' ');
    let num1 = Number(result[0]);
    let num2 = Number(result[1]);
    totalResult += num1 + num2 + '\n';
}
console.log(totalResult)