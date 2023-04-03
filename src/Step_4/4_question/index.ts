const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const numberList = input.map((num) => Number(num))
let maxNum = numberList[0]
let count = 0;

for(let i = 1; i < numberList.length - 1; i++){
    count++;
    if(numberList[i] > maxNum){
        maxNum = numberList[i];
    }
}
console.log(`${maxNum} \n${count + 1}`);