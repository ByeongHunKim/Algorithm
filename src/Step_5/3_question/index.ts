const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

for(let i =1; i <= Number(input[0]); i++) {
    console.log(input[i].slice(0,1) + input[i].slice(input[i].length - 1))
}