const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const count = Number(input[0]) - 1;
const numList = input[1].split(' ');

let minNum = Number(numList[0]);
let maxNum = Number(numList[0]);

for(let i = 1; i <= count; i++){
    let compareNum = Number(numList[i]);
    if(compareNum < minNum){
        minNum = compareNum;
    } else if(compareNum > maxNum) {
        maxNum = compareNum;
    }
}
console.log(`${minNum} ${maxNum}`)