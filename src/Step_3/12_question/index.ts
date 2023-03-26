const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

let result = '';

for(let i = 0; i < input.length -1 ; i++){
    let array = input[i].split(' ');
    let num1 = Number(array[0]);
    let num2 = Number(array[1]);
    result += num1 + num2 + '\n';
}
console.log(result)