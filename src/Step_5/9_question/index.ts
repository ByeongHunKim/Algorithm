const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(file).toString().split(' ');

const firstNum = Number(input[0].split('').reverse().join(''))
const secondNum = Number(input[1].split('').reverse().join(''))
let result = 0;
if(firstNum > secondNum){
    result += firstNum
}else{
    result += secondNum
}
console.log(result)