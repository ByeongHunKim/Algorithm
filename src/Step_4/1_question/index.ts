const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split('\n');

const count = Number(input[0]) - 1;
const resultNum = Number(input[2]);
let numberCount = 0;

// todo string 값 배열로 만드는 법 -> split
for(let i = 0; i <= count; i++){
    let numArray = input[1].split(' ');
    let compareNum = Number(numArray[i]);
    if(compareNum === resultNum){
        numberCount++;
    }
}
console.log(numberCount)