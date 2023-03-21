const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const count = Number(fs.readFileSync(file).toString())
let result = '';


for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
