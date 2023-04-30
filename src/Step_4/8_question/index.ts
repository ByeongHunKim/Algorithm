const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n').map((num) => Number(num) % 42)

let result = [];

for(let i = 0; i < 10; i++) {
    if(!result.includes(input[i])){
        result.push(input[i]);
    }
}
console.log(result.length);