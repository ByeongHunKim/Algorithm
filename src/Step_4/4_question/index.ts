const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const numberArray = input.map((num) => Number(num));
let maxNum = numberArray[0];
let numCount = 1;

for(let i = 0; i < numberArray.length - 1; i++){
    if(numberArray[i] > maxNum){
        maxNum = numberArray[i];
        numCount = numberArray.indexOf(numberArray[i]) + 1
    }
}
console.log(`${maxNum}`);
console.log(`${numCount}`);

