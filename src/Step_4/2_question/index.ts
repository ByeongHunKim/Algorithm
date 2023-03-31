const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const inputArray = input[0].split(' ');

const inputCount = Number(inputArray[0]) - 1;
const inputNum = Number(inputArray[1]);
const inputNumList = input[1];
let result = '';

for (let i = 0; i <= inputCount; i++){
    let compareNum = inputNumList.split(' ');
    if(Number(compareNum[i]) < inputNum){
        result += compareNum[i] + ' '
    }
}
console.log(result.trim())