const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const count = input.length
let result = '';
for(let i = 0; i < count; i++){
    let array = input[i].split(' ');
    let num1 = Number(array[0]);
    let num2 = Number(array[1]);
    let addedNum = num1 + num2;
    if(addedNum !== 0){
        result += num1 + num2 + '\n';
    }
}
console.log(result)