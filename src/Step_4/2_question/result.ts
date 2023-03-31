const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

let arr1 = input[0].split(' ').map(Number);
let arr2 = input[1].split(' ').map(Number);

let result = '';
for (let i = 0 ; i < arr1[0]; i++) {
    if (arr1[1] > arr2[i]) {
        result += ` ${arr2[i]}`;
    }
}
console.log(result.trim());