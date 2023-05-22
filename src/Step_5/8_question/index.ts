const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');
let count = 0;
for(let i = 0; i<input.length; i++){
    input[i] !== '' ? count++ : null
}
console.log(count)