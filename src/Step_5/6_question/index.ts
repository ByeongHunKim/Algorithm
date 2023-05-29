const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString();

let result = [];

for (let i = 97; i <= 122; i++) {
    result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));