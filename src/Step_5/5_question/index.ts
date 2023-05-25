const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const count = Number(input[0])
const targetArray = input[1].split('')
let result = 0;

for(let i = 0; i < count; i++){
    result += Number(targetArray[i])
}
console.log(result)